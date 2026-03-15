import { addEdge as addFlowEdge, applyEdgeChanges, applyNodeChanges } from '@xyflow/react';
import { create } from 'zustand';

import { FlowEdgeData } from '../canvas/mappers/edgeMapper';
import { FlowNodeData } from '../canvas/mappers/nodeMapper';

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
};

type CanvasStore = {
  nodes: CanvasNode[];
  edges: CanvasEdge[];
  pendingConnection: PendingConnection | null;
  initCanvas: (nodes: CanvasNode[], edges: CanvasEdge[]) => void;
  onNodesChange: (changes: unknown[]) => void;
  onEdgesChange: (changes: unknown[]) => void;
  onConnect: (connection: { source: string | null; target: string | null }) => void;
  addNode: (node: CanvasNode) => void;
  removeNode: (nodeId: string) => void;
  addEdge: (edge: CanvasEdge) => void;
  removeEdge: (edgeId: string) => void;
  updateNodePosition: (nodeId: string, x: number, y: number) => void;
  updateNodeLabel: (nodeId: string, label: string) => void;
  setPendingConnection: (pendingConnection: PendingConnection | null) => void;
  addTypedEdgeFromPending: (edgeType: string) => void;
};

export const useCanvasStore = create<CanvasStore>((set, get) => ({
  nodes: [],
  edges: [],
  pendingConnection: null,
  initCanvas: (nodes, edges) => set({ nodes, edges }),
  onNodesChange: (changes) =>
    set((state) => ({
      nodes: applyNodeChanges(changes as never, state.nodes as never) as CanvasNode[],
    })),
  onEdgesChange: (changes) =>
    set((state) => ({
      edges: applyEdgeChanges(changes as never, state.edges as never) as CanvasEdge[],
    })),
  onConnect: (connection) => {
    if (!connection.source || !connection.target) {
      return;
    }

    set({
      pendingConnection: {
        source: connection.source,
        target: connection.target,
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
  },
}));
