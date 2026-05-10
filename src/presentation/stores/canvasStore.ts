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

type PendingConnection = {
  source: string;
  target: string;
  sourceHandle?: string | null;
  targetHandle?: string | null;
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
      markerEnd: edge.markerEnd ?? {
        type: MarkerType.ArrowClosed,
        color: '#111827',
        width: 18,
        height: 18,
      },
      style: {
        stroke: '#111827',
        strokeWidth: 1.5,
        ...(typeof edge.style === 'object' && edge.style !== null ? edge.style : {}),
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

    return {
      nodes: nextNodes,
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

    if (isFlowchartShapeNode(sourceNode) || isFlowchartShapeNode(targetNode)) {
      console.warn(
        'Flowchart connections are not persisted yet. This will be enabled in the FlowchartConnection step.',
      );
      return;
    }

    set({
      pendingConnection: {
        source: connection.source,
        target: connection.target,
        sourceHandle: connection.sourceHandle,
        targetHandle: connection.targetHandle,
      },
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
        const filtered = state.pendingChanges.filter(
          (pending) =>
            !(
              pending.type === 'move-flowchart-element' &&
              pending.elementId === change.elementId
            ) &&
            !(
              pending.type === 'rename-flowchart-element' &&
              pending.elementId === change.elementId
            ) &&
            !(
              pending.type === 'resize-flowchart-element' &&
              pending.elementId === change.elementId
            ),
        );

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
