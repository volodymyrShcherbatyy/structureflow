import {
  addEdge as addFlowEdge,
  applyEdgeChanges,
  applyNodeChanges,
  EdgeChange,
  EdgeMarkerType,
  MarkerType,
  NodeChange,
} from '@xyflow/react';
import { create } from 'zustand';
import { ReactNode } from 'react';

import { FlowEdgeData } from '../canvas/mappers/edgeMapper';
import { FlowNodeData } from '../canvas/mappers/nodeMapper';
import { FlowPortData } from '../canvas/mappers/portMapper';
import { Connection } from '@xyflow/react';
import { getEdgeStyle, getEdgeStyleConfig, isAnimated } from '../canvas/edgeStyles';
import { FlowchartElementData } from '../canvas/mappers/flowchartElementMapper';
import { FlowchartConnectionEdgeData } from '../canvas/mappers/flowchartConnectionMapper';
import { useScopeStore } from './scopeStore';

type CanvasNode = {
  id: string;
  position: { x: number; y: number };
  data: FlowNodeData | FlowPortData | FlowchartElementData;
  type?: string;
  parentId?: string;
  style?: React.CSSProperties;
};

type CanvasEdge = {
  id: string;
  source: string;
  target: string;
  label?: ReactNode;
  data?: FlowEdgeData | FlowchartConnectionEdgeData;
  sourceHandle?: string;
  targetHandle?: string;
  animated?: boolean;
  style?: React.CSSProperties;
  markerEnd?: EdgeMarkerType;
};

type CanvasEndpointKind = 'node' | 'port' | 'flowchart-element';

type PendingConnection = {
  source: string;
  target: string;
  sourceHandle?: string | null;
  targetHandle?: string | null;
  sourceKind: CanvasEndpointKind;
  targetKind: CanvasEndpointKind;
};

export type PendingChange =
  | { type: 'move'; nodeId: string; x: number; y: number }
  | { type: 'move-port'; portId: string; x: number; y: number }
  | { type: 'move-external-handle'; portId: string; offset: number }
  | { type: 'rename'; nodeId: string; label: string }
  | { type: 'delete-node'; nodeId: string }
  | {
      type: 'connect-edge';
      tempEdgeId: string;
      sourceId: string;
      targetId: string;
      edgeType: string;
      label?: string;
      sourceHandle?: string | null;
      targetHandle?: string | null;
    }
  | { type: 'delete-edge'; edgeId: string }
  | {
      type: 'move-flowchart-element';
      elementId: string;
      x: number;
      y: number;
    }
  | {
      type: 'rename-flowchart-element';
      elementId: string;
      label: string;
    }
  | {
      type: 'delete-flowchart-element';
      elementId: string;
    }
  | {
      type: 'resize-flowchart-element';
      elementId: string;
      width: number;
      height: number;
    }
  | {
      type: 'connect-flowchart-connection';
      tempConnectionId: string;
      source: {
        kind: 'node' | 'port' | 'flowchart-element';
        id: string;
        anchor?: string;
      };
      target: {
        kind: 'node' | 'port' | 'flowchart-element';
        id: string;
        anchor?: string;
      };
      connectionType: string;
      label?: string;
      scopeId?: string;
    }
  | {
      type: 'delete-flowchart-connection';
      connectionId: string;
    }
  | {
    type: 'relabel-flowchart-connection';
    connectionId: string;
    label?: string;
  };

type CanvasStore = {
  nodes: CanvasNode[];
  edges: CanvasEdge[];
  pendingConnection: PendingConnection | null;
  pendingChanges: PendingChange[];
  isSaving: boolean;
  lastSavedAt: Date | null;
  initCanvas: (nodes: CanvasNode[], edges: CanvasEdge[]) => void;
  onNodesChange: (changes: NodeChange[]) => void;
  onEdgesChange: (changes: EdgeChange[]) => void;
  onConnect: (connection: Connection) => void;
  addNode: (node: CanvasNode) => void;
  removeNode: (nodeId: string) => void;
  addEdge: (edge: CanvasEdge) => void;
  removeEdge: (edgeId: string) => void;
  replaceEdgeId: (tempEdgeId: string, edgeId: string) => void;
  updateNodePosition: (nodeId: string, x: number, y: number) => void;
  updateNodeLabel: (nodeId: string, label: string) => void;
  updateExternalHandleOffset: (portId: string, offset: number) => void;
  setPendingConnection: (pendingConnection: PendingConnection | null) => void;
  addTypedEdgeFromPending: (edgeType: string) => void;
  addPendingChange: (change: PendingChange) => void;
  clearPendingChanges: () => void;
  setSaving: (isSaving: boolean) => void;
  markSaved: () => void;
  selectedNodeId: string | null;
  setSelectedNode: (nodeId: string | null) => void;
  isTraceEnabled: boolean;
  toggleTrace: () => void;
  updateFlowchartElementLabel: (elementId: string, label: string) => void;
  resizeFlowchartElement: (elementId: string, width: number, height: number,) => void;
  replaceFlowchartConnectionId: (tempConnectionId: string, connectionId: string,) => void;
  updateFlowchartConnectionLabel: (connectionId: string, label?: string,) => void;
  editFlowchartConnectionLabel: (connectionId: string) => void;
};

function resolveEndpointForPersistence(
  nodes: CanvasNode[],
  endpointId: string,
  handleId?: string | null,
): { nodeId: string; handleId?: string } {
  const node = nodes.find((item) => item.id === endpointId);

  if (node?.type === 'portNode' && 'nodeId' in node.data) {
    return {
      nodeId: node.data.nodeId,
      handleId: handleId ?? node.data.side,
    };
  }

  return {
    nodeId: endpointId,
    handleId: handleId ?? undefined,
  };
}

function flowchartEdgeTouchesEndpoint(
  edge: CanvasEdge,
  endpoint: { kind: CanvasEndpointKind; id: string },
): boolean {
  if (
    !edge.data ||
    !('connectionKind' in edge.data) ||
    edge.data.connectionKind !== 'flowchart'
  ) {
    return false;
  }

  const sourceKind = edge.data.sourceKind;
  const targetKind = edge.data.targetKind;

  return (
    (sourceKind === endpoint.kind && edge.source === endpoint.id) ||
    (targetKind === endpoint.kind && edge.target === endpoint.id)
  );
}

function resolveCanvasEndpoint(
  nodes: CanvasNode[],
  endpointId: string,
  handleId?: string | null,
): {
  kind: 'node' | 'port' | 'flowchart-element';
  id: string;
  anchor?: string;
} {
  const node = nodes.find((item) => item.id === endpointId);

  if (node?.type === 'flowchartShapeNode' && 'elementId' in node.data) {
    return {
      kind: 'flowchart-element',
      id: node.data.elementId,
      anchor: handleId ?? undefined,
    };
  }

  if (node?.type === 'portNode' && 'portId' in node.data) {
    return {
      kind: 'port',
      id: node.data.portId,
      anchor: handleId ?? node.data.side,
    };
  }

  return {
    kind: 'node',
    id: endpointId,
    anchor: handleId ?? undefined,
  };
}

function shouldUseRegularArchitectureEdge(
  sourceEndpoint: { kind: CanvasEndpointKind },
  targetEndpoint: { kind: CanvasEndpointKind },
): boolean {
  return (
    sourceEndpoint.kind !== 'flowchart-element' &&
    targetEndpoint.kind !== 'flowchart-element'
  );
}

function getEdgeType(edge: CanvasEdge): string {
  if (edge.data && 'edgeType' in edge.data) {
    return edge.data.edgeType ?? 'dependency';
  }

  return 'dependency';
}

function applyEdgeVisuals(edge: CanvasEdge): CanvasEdge {
  if (edge.data && 'connectionKind' in edge.data && edge.data.connectionKind === 'flowchart') {
    return {
      ...edge,
      animated: false,
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#111827',
        width: 18,
        height: 18,
      },
      style: {
        ...(typeof edge.style === 'object' && edge.style !== null ? edge.style : {}),
        stroke: '#111827',
        strokeWidth: 1.5,
      },
      data: {
        ...edge.data,
        connectionKind: 'flowchart',
        connectionType: edge.data.connectionType ?? 'flow',
      },
    };
  }

  const edgeType = getEdgeType(edge);
  const edgeStyleConfig = getEdgeStyleConfig(edgeType);
  const markerSize = edgeStyleConfig.markerSize ?? 18;

  return {
    ...edge,
    animated: isAnimated(edgeType),
    style: {
      ...getEdgeStyle(edgeType),
      ...(typeof edge.style === 'object' && edge.style !== null ? edge.style : {}),
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: edgeStyleConfig.stroke,
      width: markerSize,
      height: markerSize,
    },
    data: {
      ...edge.data,
      edgeType,
    },
  };
}

function isPortNode(node: CanvasNode | undefined): boolean {
  return node?.type === 'portNode';
}

function isFlowchartShapeNode(node: CanvasNode | undefined): boolean {
  return node?.type === 'flowchartShapeNode';
}

function isEdgeConnectedToNode(edge: CanvasEdge, nodeId: string): boolean {
  return (
    edge.source === nodeId ||
    edge.target === nodeId ||
    edge.source.startsWith(`${nodeId}:`) ||
    edge.target.startsWith(`${nodeId}:`)
  );
}

function isEdgeConnectedToAnyDeletedNode(
  edge: CanvasEdge,
  pendingChanges: PendingChange[],
): boolean {
  return pendingChanges.some(
    (pending) =>
      pending.type === 'delete-node' &&
      isEdgeConnectedToNode(edge, pending.nodeId),
  );
}

function getDefaultFlowchartConnectionLabel(
  sourceNode: CanvasNode | undefined,
  sourceHandle?: string | null,
): string | undefined {
  if (
    sourceNode?.type !== 'flowchartShapeNode' ||
    !('flowchartType' in sourceNode.data) ||
    sourceNode.data.flowchartType !== 'decision'
  ) {
    return undefined;
  }

  const anchor = sourceHandle?.split(':')[0];

  if (anchor === 'right') {
    return 'Yes';
  }

  if (anchor === 'left') {
    return 'No';
  }

  return undefined;
}

function getDeletedNodeFlowchartEndpoints(
  nodes: CanvasNode[],
  node: CanvasNode,
): Array<{ kind: CanvasEndpointKind; id: string }> {
  if (node.type === 'flowchartShapeNode' && 'elementId' in node.data) {
    return [{ kind: 'flowchart-element', id: node.data.elementId }];
  }

  if (node.type === 'blockNode') {
    const endpoints: Array<{ kind: CanvasEndpointKind; id: string }> = [
      { kind: 'node', id: node.id },
    ];

    nodes.forEach((candidate) => {
      if (
        candidate.type === 'portNode' &&
        'nodeId' in candidate.data &&
        'portId' in candidate.data &&
        candidate.data.nodeId === node.id
      ) {
        endpoints.push({
          kind: 'port',
          id: candidate.data.portId,
        });
      }
    });

    return endpoints;
  }

  return [];
}

export const useCanvasStore = create<CanvasStore>((set, get) => ({
  nodes: [],
  edges: [],
  pendingConnection: null,
  pendingChanges: [],
  isSaving: false,
  lastSavedAt: null,
  selectedNodeId: null,
  setSelectedNode: (nodeId) => set({ selectedNodeId: nodeId }),

  initCanvas: (nodes, edges) => set({
    nodes,
    edges: edges.map(applyEdgeVisuals),
    pendingChanges: [],
    pendingConnection: null,
    isSaving: false,
    lastSavedAt: null,
  }),

    isTraceEnabled: false,

  toggleTrace: () => set((state) => ({
    isTraceEnabled: !state.isTraceEnabled,
    selectedNodeId: null,
  })),

  onNodesChange: (changes) => set((state) => {
    const safeChanges = changes.filter((change) => {
      if (change.type !== 'remove') {
        return true;
      }

      const node = state.nodes.find((item) => item.id === change.id);

      return !isPortNode(node);
    });

    const nextNodes = applyNodeChanges(
      safeChanges as never,
      state.nodes as never,
    ) as CanvasNode[];

    safeChanges.forEach((change) => {
      if (change.type === 'position' && change.dragging === false && change.position) {
        const movedNode = nextNodes.find((node) => node.id === change.id);

        if (movedNode?.type === 'portNode') {
          get().addPendingChange({
            type: 'move-port',
            portId: change.id,
            x: change.position.x,
            y: change.position.y,
          });

          return;
        }

        if (movedNode?.type === 'flowchartShapeNode' && 'elementId' in movedNode.data) {
          get().addPendingChange({
            type: 'move-flowchart-element',
            elementId: movedNode.data.elementId,
            x: change.position.x,
            y: change.position.y,
          });

          return;
        }

        get().addPendingChange({
          type: 'move',
          nodeId: change.id,
          x: change.position.x,
          y: change.position.y,
        });
      }

      if (change.type === 'remove') {
        const removedNode = state.nodes.find((node) => node.id === change.id);

        if (removedNode?.type === 'flowchartShapeNode' && 'elementId' in removedNode.data) {
          get().addPendingChange({
            type: 'delete-flowchart-element',
            elementId: removedNode.data.elementId,
          });

          return;
        }

        get().addPendingChange({ type: 'delete-node', nodeId: change.id });
      }
    });

    const deletedFlowchartEndpoints = safeChanges
      .filter((change) => change.type === 'remove')
      .flatMap((change) => {
        const removedNode = state.nodes.find((node) => node.id === change.id);

        return removedNode
          ? getDeletedNodeFlowchartEndpoints(state.nodes, removedNode)
          : [];
      });

    const nextEdges =
      deletedFlowchartEndpoints.length > 0
        ? state.edges.filter(
            (edge) =>
              !deletedFlowchartEndpoints.some((endpoint) =>
                flowchartEdgeTouchesEndpoint(edge, endpoint),
              ),
          )
        : state.edges;

    return {
      nodes: nextNodes,
      edges: nextEdges,
    };
  }),

  onEdgesChange: (changes) => set((state) => {
    const nextEdges = applyEdgeChanges(
      changes as never,
      state.edges as never,
    ) as CanvasEdge[];

    changes.forEach((change) => {
      if (change.type !== 'remove') {
        return;
      }

      const edge = state.edges.find((item) => item.id === change.id);

      if (!edge) {
        return;
      }

      if (isEdgeConnectedToAnyDeletedNode(edge, state.pendingChanges)) {
        return;
      }

      if (
        edge.data &&
        'connectionKind' in edge.data &&
        edge.data.connectionKind === 'flowchart'
      ) {
        get().addPendingChange({
          type: 'delete-flowchart-connection',
          connectionId: change.id,
        });

        return;
      }

      get().addPendingChange({ type: 'delete-edge', edgeId: change.id });
    });

    return {
      edges: nextEdges,
    };
  }),



  onConnect: (connection) => {
    if (!connection.source || !connection.target) {
      return;
    }

    const { nodes } = get();

    const sourceNode = nodes.find((node) => node.id === connection.source);
    const targetNode = nodes.find((node) => node.id === connection.target);

    const sourceEndpoint = resolveCanvasEndpoint(
      nodes,
      connection.source,
      connection.sourceHandle,
    );

    const targetEndpoint = resolveCanvasEndpoint(
      nodes,
      connection.target,
      connection.targetHandle,
    );

    const isRegularArchitectureEdge = shouldUseRegularArchitectureEdge(
      sourceEndpoint,
      targetEndpoint,
    );

    if (isRegularArchitectureEdge) {
      set({
        pendingConnection: {
          source: connection.source,
          target: connection.target,
          sourceHandle: connection.sourceHandle,
          targetHandle: connection.targetHandle,
          sourceKind: sourceEndpoint.kind,
          targetKind: targetEndpoint.kind,
        },
      });

      return;
    }

    const tempConnectionId = `temp-flowchart-connection-${crypto.randomUUID()}`;
    const label = getDefaultFlowchartConnectionLabel(
      sourceNode,
      connection.sourceHandle,
    );

    const edge: CanvasEdge = applyEdgeVisuals({
      id: tempConnectionId,
      source: connection.source,
      target: connection.target,
      sourceHandle: connection.sourceHandle ?? undefined,
      targetHandle: connection.targetHandle ?? undefined,
      label,
      data: {
        connectionKind: 'flowchart',
        connectionType: 'flow',
        sourceKind: sourceEndpoint.kind,
        targetKind: targetEndpoint.kind,
      },
    });

    set((state) => ({
      edges: addFlowEdge(edge as never, state.edges as never) as CanvasEdge[],
    }));

    get().addPendingChange({
      type: 'connect-flowchart-connection',
      tempConnectionId,
      source: sourceEndpoint,
      target: targetEndpoint,
      connectionType: 'flow',
      label,
      scopeId: useScopeStore.getState().currentScopeId ?? undefined,
    });
  },

  addNode: (node) => set((state) => ({ nodes: [...state.nodes, node] })),

  removeNode: (nodeId) => set((state) => ({
    nodes: state.nodes.filter((node) => node.id !== nodeId),
    edges: state.edges.filter((edge) => edge.source !== nodeId && edge.target !== nodeId),
  })),

  addEdge: (edge) => set((state) => ({ edges: [...state.edges, edge] })),

  removeEdge: (edgeId) => set((state) => ({
    edges: state.edges.filter((edge) => edge.id !== edgeId),
  })),

  replaceEdgeId: (tempEdgeId, edgeId) => set((state) => ({
    edges: state.edges.map((edge) => (edge.id === tempEdgeId ? { ...edge, id: edgeId } : edge)),
    pendingChanges: state.pendingChanges.map((change) => {
      if (change.type === 'delete-edge' && change.edgeId === tempEdgeId) {
        return { ...change, edgeId };
      }

      return change;
    }),
  })),

  replaceFlowchartConnectionId: (tempConnectionId, connectionId) => set((state) => ({
    edges: state.edges.map((edge) =>
      edge.id === tempConnectionId ? { ...edge, id: connectionId } : edge,
    ),
    pendingChanges: state.pendingChanges.map((change) => {
      if (
        change.type === 'delete-flowchart-connection' &&
        change.connectionId === tempConnectionId
      ) {
        return { ...change, connectionId };
      }

      return change;
    }),
  })),
    
  updateNodePosition: (nodeId, x, y) => set((state) => ({
    nodes: state.nodes.map((node) =>
      node.id === nodeId
        ? {
            ...node,
            position: { x, y },
          }
        : node,
    ),
  })),

  updateNodeLabel: (nodeId, label) => set((state) => ({
      nodes: state.nodes.map((node) => {
        if (node.id !== nodeId || node.type === 'portNode') {
          return node;
        }

        return {
          ...node,
          data: {
            ...node.data,
            label,
          },
        };
      }),
    })),


    updateFlowchartElementLabel: (elementId, label) => set((state) => ({
      nodes: state.nodes.map((node) => {
        if (
          node.id !== elementId ||
          node.type !== 'flowchartShapeNode' ||
          !('elementId' in node.data)
        ) {
          return node;
        }

        return {
          ...node,
          data: {
            ...node.data,
            label,
          },
        };
      }),
    })),

    updateFlowchartConnectionLabel: (connectionId, label) => set((state) => ({
      edges: state.edges.map((edge) => {
        if (
          edge.id !== connectionId ||
          !edge.data ||
          !('connectionKind' in edge.data) ||
          edge.data.connectionKind !== 'flowchart'
        ) {
          return edge;
        }

        return {
          ...edge,
          label,
        };
      }),
    })),

    resizeFlowchartElement: (elementId, width, height) => set((state) => ({
      nodes: state.nodes.map((node) => {
        if (
          node.id !== elementId ||
          node.type !== 'flowchartShapeNode' ||
          !('elementId' in node.data)
        ) {
          return node;
        }

        return {
          ...node,
          data: {
            ...node.data,
            width,
            height,
          },
          style: {
            ...node.style,
            width,
            height,
            zIndex: 600,
          },
        };
      }),
    })),

    editFlowchartConnectionLabel: (connectionId) => {
      const edge = get().edges.find((item) => item.id === connectionId);

      if (
        !edge ||
        !edge.data ||
        !('connectionKind' in edge.data) ||
        edge.data.connectionKind !== 'flowchart'
      ) {
        return;
      }

      const currentLabel =
        typeof edge.label === 'string' ? edge.label : edge.label ? String(edge.label) : '';

      const nextLabel = window.prompt('Flowchart connection label', currentLabel);

      if (nextLabel === null) {
        return;
      }

      get().updateFlowchartConnectionLabel(connectionId, nextLabel);

      get().addPendingChange({
        type: 'relabel-flowchart-connection',
        connectionId,
        label: nextLabel,
      });
    },


  updateExternalHandleOffset: (portId, offset) => set((state) => ({
    nodes: state.nodes.map((node) => {
      if (node.id !== portId || node.type !== 'portNode' || !('externalHandleOffset' in node.data)) {
        return node;
      }

      return {
        ...node,
        data: {
          ...node.data,
          externalHandleOffset: offset,
        },
      };
    }),
  })),

  setPendingConnection: (pendingConnection) => set({ pendingConnection }),

  addTypedEdgeFromPending: (edgeType) => {
    const { pendingConnection, edges, nodes } = get();

    if (!pendingConnection) {
      return;
    }

    const sourceEndpoint = resolveEndpointForPersistence(
      nodes,
      pendingConnection.source,
      pendingConnection.sourceHandle,
    );

    const targetEndpoint = resolveEndpointForPersistence(
      nodes,
      pendingConnection.target,
      pendingConnection.targetHandle,
    );

    const edgeStyleConfig = getEdgeStyleConfig(edgeType);
    const markerSize = edgeStyleConfig.markerSize ?? 18;

    const typedEdge: CanvasEdge = {
      id: crypto.randomUUID(),
      source: pendingConnection.source,
      target: pendingConnection.target,
      sourceHandle: pendingConnection.sourceHandle ?? undefined,
      targetHandle: pendingConnection.targetHandle ?? undefined,
      animated: isAnimated(edgeType),
      style: getEdgeStyle(edgeType),
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: edgeStyleConfig.stroke,
        width: markerSize,
        height: markerSize,
      },
      data: { edgeType },
    };

    

    set({
      edges: addFlowEdge(typedEdge as never, edges as never) as CanvasEdge[],
      pendingConnection: null,
    });

    get().addPendingChange({
      type: 'connect-edge',
      tempEdgeId: typedEdge.id,
      sourceId: sourceEndpoint.nodeId,
      targetId: targetEndpoint.nodeId,
      edgeType,
      label: typeof typedEdge.label === 'string' ? typedEdge.label : undefined,
      sourceHandle: sourceEndpoint.handleId,
      targetHandle: targetEndpoint.handleId,
    });
  },
  
  addPendingChange: (change) => set((state) => {

      if (change.type === 'move-flowchart-element') {
        const filtered = state.pendingChanges.filter(
          (pending) =>
            !(
              pending.type === 'move-flowchart-element' &&
              pending.elementId === change.elementId
            ),
        );

        return {
          pendingChanges: [...filtered, change],
        };
      }

      if (change.type === 'rename-flowchart-element') {
        const filtered = state.pendingChanges.filter(
          (pending) =>
            !(
              pending.type === 'rename-flowchart-element' &&
              pending.elementId === change.elementId
            ),
        );

        return {
          pendingChanges: [...filtered, change],
        };
      }

      if (change.type === 'delete-flowchart-element') {
        const filtered = state.pendingChanges.filter((pending) => {
          if (
            pending.type === 'move-flowchart-element' &&
            pending.elementId === change.elementId
          ) {
            return false;
          }

          if (
            pending.type === 'rename-flowchart-element' &&
            pending.elementId === change.elementId
          ) {
            return false;
          }

          if (
            pending.type === 'resize-flowchart-element' &&
            pending.elementId === change.elementId
          ) {
            return false;
          }

          if (
            pending.type === 'connect-flowchart-connection' &&
            (
              (pending.source.kind === 'flowchart-element' &&
                pending.source.id === change.elementId) ||
              (pending.target.kind === 'flowchart-element' &&
                pending.target.id === change.elementId)
            )
          ) {
            return false;
          }

          return true;
        });

        return {
          pendingChanges: [...filtered, change],
        };
      }

      if (change.type === 'resize-flowchart-element') {
        const filtered = state.pendingChanges.filter(
          (pending) =>
            !(
              pending.type === 'resize-flowchart-element' &&
              pending.elementId === change.elementId
            ),
        );

        return {
          pendingChanges: [...filtered, change],
        };
      }

      if (change.type === 'delete-flowchart-connection') {
        const filtered = state.pendingChanges.filter(
          (pending) =>
            !(
              pending.type === 'connect-flowchart-connection' &&
              pending.tempConnectionId === change.connectionId
            ),
        );

        return {
          pendingChanges: [...filtered, change],
        };
      }

      if (change.type === 'relabel-flowchart-connection') {
        const filtered = state.pendingChanges.filter(
          (pending) =>
            !(
              pending.type === 'relabel-flowchart-connection' &&
              pending.connectionId === change.connectionId
            ),
        );

        return {
          pendingChanges: [...filtered, change],
        };
      }

      if (change.type === 'move') {
        const filtered = state.pendingChanges.filter(
          (pending) => !(pending.type === 'move' && pending.nodeId === change.nodeId),
        );

        return {
          pendingChanges: [...filtered, change],
        };
      }

      if (change.type === 'move-port') {
        const filtered = state.pendingChanges.filter(
          (pending) => !(pending.type === 'move-port' && pending.portId === change.portId),
        );

        return {
          pendingChanges: [...filtered, change],
        };
      }

      if (change.type === 'move-external-handle') {
        const filtered = state.pendingChanges.filter(
          (pending) =>
            !(
              pending.type === 'move-external-handle' &&
              pending.portId === change.portId
            ),
        );

        return {
          pendingChanges: [...filtered, change],
        };
      }

      if (change.type === 'rename') {
        const filtered = state.pendingChanges.filter(
          (pending) => !(pending.type === 'rename' && pending.nodeId === change.nodeId),
        );

        return {
          pendingChanges: [...filtered, change],
        };
      }

      if (change.type === 'delete-node') {
        const connectedEdgeIds = state.edges
          .filter((edge) => isEdgeConnectedToNode(edge, change.nodeId))
          .map((edge) => edge.id);

        const filtered = state.pendingChanges.filter((pending) => {
          if ('nodeId' in pending && pending.nodeId === change.nodeId) {
            return false;
          }

          if (
            pending.type === 'connect-edge' &&
            (pending.sourceId === change.nodeId || pending.targetId === change.nodeId)
          ) {
            return false;
          }

          if (
            pending.type === 'delete-edge' &&
            connectedEdgeIds.includes(pending.edgeId)
          ) {
            return false;
          }

          return true;
        });

        return {
          pendingChanges: [...filtered, change],
        };
      }
      

      if (change.type === 'delete-edge') {
        const pendingConnect = state.pendingChanges.find(
          (pending) => pending.type === 'connect-edge' && pending.tempEdgeId === change.edgeId,
        );

        if (pendingConnect) {
          return {
            pendingChanges: state.pendingChanges.filter((pending) => pending !== pendingConnect),
          };
        }
      }

      return {
        pendingChanges: [...state.pendingChanges, change],
      };
    }),

  clearPendingChanges: () => set({ pendingChanges: [] }),
  setSaving: (isSaving) => set({ isSaving }),
  markSaved: () => set({ isSaving: false, lastSavedAt: new Date() }),
}));
