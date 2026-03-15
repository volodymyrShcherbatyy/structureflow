'use client';

import { Edge, Node, ReactFlowProvider } from '@xyflow/react';
import { useEffect } from 'react';

import { FlowEdgeData } from './mappers/edgeMapper';
import { FlowNodeData } from './mappers/nodeMapper';
import { FlowCanvas } from './FlowCanvas';
import { useCanvasStore } from '../stores/canvasStore';
import { useScopeStore } from '../stores/scopeStore';

type CanvasInitializerProps = {
  projectId: string;
  initialNodes: Node<FlowNodeData>[];
  initialEdges: Edge<FlowEdgeData>[];
};

export function CanvasInitializer({ projectId, initialNodes, initialEdges }: CanvasInitializerProps) {
  const initCanvas = useCanvasStore((state) => state.initCanvas);
  const setProjectId = useScopeStore((state) => state.setProjectId);

  useEffect(() => {
    setProjectId(projectId);
    initCanvas(initialNodes, initialEdges);
  }, [projectId, initialNodes, initialEdges, initCanvas, setProjectId]);

  return (
    <ReactFlowProvider>
      <FlowCanvas />
    </ReactFlowProvider>
  );
}
