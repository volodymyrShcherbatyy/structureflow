import {
  addEdge as addFlowEdge,
  applyEdgeChanges,
  applyNodeChanges,
  EdgeChange,
  NodeChange,
} from '@xyflow/react';
import { create } from 'zustand';

import { FlowEdgeData } from '../canvas/mappers/edgeMapper';
import { FlowNodeData } from '../canvas/mappers/nodeMapper';
import { Connection } from '@xyflow/react';

type CanvasNode = {
  id: string;
  position: { x: number; y: number };
  data: FlowNodeData;
  type?: string;
  parentId?: string;
};

type CanvasEdge = {
  id: string;
  source: string;
  target: string;
  label?: string;
  data?: FlowEdgeData;
  [key: string]: unknown;
};

type PendingConnection = {
  source: string;
  target: string;
  sourceHandle?: string | null;
  targetHandle?: string | null;
};

export type PendingChange =
  | { type: 'move'; nodeId: string; x: number; y: number }
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
  | { type: 'delete-edge'; edgeId: string };

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
  setPendingConnection: (pendingConnection: PendingConnection | null) => void;
  addTypedEdgeFromPending: (edgeType: string) => void;
  addPendingChange: (change: PendingChange) => void;
  clearPendingChanges: () => void;
  setSaving: (isSaving: boolean) => void;
  markSaved: () => void;
};

export const useCanvasStore = create<CanvasStore>((set, get) => ({
  nodes: [],
  edges: [],
  pendingConnection: null,
  pendingChanges: [],
  isSaving: false,
  lastSavedAt: null,
  initCanvas: (nodes, edges) =>
    set({
      nodes,
      edges,
      pendingChanges: [],
      pendingConnection: null,
      isSaving: false,
      lastSavedAt: null,
    }),
  onNodesChange: (changes) =>
    set((state) => {
      const nextNodes = applyNodeChanges(changes as never, state.nodes as never) as CanvasNode[];

      changes.forEach((change) => {
        if (change.type === 'position' && change.dragging === false && change.position) {
          get().addPendingChange({
            type: 'move',
            nodeId: change.id,
            x: change.position.x,
            y: change.position.y,
          });
        }

        if (change.type === 'remove') {
          get().addPendingChange({ type: 'delete-node', nodeId: change.id });
        }
      });

      return {
        nodes: nextNodes,
      };
    }),
  onEdgesChange: (changes) =>
    set((state) => {
      const nextEdges = applyEdgeChanges(changes as never, state.edges as never) as CanvasEdge[];

      changes.forEach((change) => {
        if (change.type === 'remove') {
          get().addPendingChange({ type: 'delete-edge', edgeId: change.id });
        }
      });

      return {
        edges: nextEdges,
      };
    }),
  onConnect: (connection) => {
  if (!connection.source || !connection.target) {
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
  removeNode: (nodeId) =>
    set((state) => ({
      nodes: state.nodes.filter((node) => node.id !== nodeId),
      edges: state.edges.filter((edge) => edge.source !== nodeId && edge.target !== nodeId),
    })),
  addEdge: (edge) => set((state) => ({ edges: [...state.edges, edge] })),
  removeEdge: (edgeId) =>
    set((state) => ({
      edges: state.edges.filter((edge) => edge.id !== edgeId),
    })),
  replaceEdgeId: (tempEdgeId, edgeId) =>
    set((state) => ({
      edges: state.edges.map((edge) => (edge.id === tempEdgeId ? { ...edge, id: edgeId } : edge)),
      pendingChanges: state.pendingChanges.map((change) => {
        if (change.type === 'delete-edge' && change.edgeId === tempEdgeId) {
          return { ...change, edgeId };
        }

        return change;
      }),
    })),
  updateNodePosition: (nodeId, x, y) =>
    set((state) => ({
      nodes: state.nodes.map((node) =>
        node.id === nodeId
          ? {
              ...node,
              position: { x, y },
            }
          : node,
      ),
    })),
  updateNodeLabel: (nodeId, label) =>
    set((state) => ({
      nodes: state.nodes.map((node) =>
        node.id === nodeId
          ? {
              ...node,
              data: {
                ...node.data,
                label,
              },
            }
          : node,
      ),
    })),
  setPendingConnection: (pendingConnection) => set({ pendingConnection }),
  addTypedEdgeFromPending: (edgeType) => {
    const { pendingConnection, edges } = get();

    if (!pendingConnection) {
      return;
    }

    const typedEdge: CanvasEdge = {
      id: crypto.randomUUID(),
      source: pendingConnection.source,
      target: pendingConnection.target,
      sourceHandle: pendingConnection.sourceHandle,
      targetHandle: pendingConnection.targetHandle,
      animated: edgeType === 'data-flow',
      style:
        edgeType === 'data-flow'
          ? { stroke: '#2563eb', strokeDasharray: '6 4' }
          : edgeType === 'navigation'
            ? { stroke: '#7c3aed' }
            : edgeType === 'api'
              ? { stroke: '#dc2626' }
              : { stroke: '#6b7280' },
      data: { edgeType },
    };

    set({
      edges: addFlowEdge(typedEdge as never, edges as never) as CanvasEdge[],
      pendingConnection: null,
    });

    get().addPendingChange({
      type: 'connect-edge',
      tempEdgeId: typedEdge.id,
      sourceId: typedEdge.source,
      targetId: typedEdge.target,
      edgeType,
      label: typedEdge.label,
      sourceHandle: typedEdge.sourceHandle ?? null,
      targetHandle: typedEdge.targetHandle ?? null,
    });
  },
  
  addPendingChange: (change) =>
    set((state) => {
      if (change.type === 'move') {
        const filtered = state.pendingChanges.filter(
          (pending) => !(pending.type === 'move' && pending.nodeId === change.nodeId),
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
        const filtered = state.pendingChanges.filter((pending) => {
          if ('nodeId' in pending && pending.nodeId === change.nodeId) {
            return false;
          }

          if (pending.type === 'connect-edge') {
            return pending.sourceId !== change.nodeId && pending.targetId !== change.nodeId;
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
