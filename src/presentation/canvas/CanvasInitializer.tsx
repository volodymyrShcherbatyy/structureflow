'use client';

import { Edge, Node, ReactFlowProvider } from '@xyflow/react';
import { useEffect } from 'react';

import { FlowEdgeData } from './mappers/edgeMapper';
import { FlowNodeData } from './mappers/nodeMapper';
import { FlowCanvas } from './FlowCanvas';
import { Breadcrumb } from '../navigation/Breadcrumb';
import { useCanvasStore } from '../stores/canvasStore';
import { useScopeStore } from '../stores/scopeStore';

type CanvasInitializerProps = {
  projectId: string;
  projectName: string;
  initialNodes: Node<FlowNodeData>[];
  initialEdges: Edge<FlowEdgeData>[];
};

export function CanvasInitializer({
  projectId,
  projectName,
  initialNodes,
  initialEdges,
}: CanvasInitializerProps) {
  const initCanvas = useCanvasStore((state) => state.initCanvas);
  const setProjectId = useScopeStore((state) => state.setProjectId);
  const setProjectName = useScopeStore((state) => state.setProjectName);

  useEffect(() => {
    useScopeStore.getState().resetScope();
    setProjectId(projectId);
    setProjectName(projectName);
    initCanvas(initialNodes, initialEdges);
  }, [projectId, projectName, initialNodes, initialEdges, initCanvas, setProjectId, setProjectName]);

  return (
    <ReactFlowProvider>
      <div style={{ display: 'grid', gridTemplateRows: 'auto 1fr', minHeight: '100vh' }}>
        <Breadcrumb />
        <FlowCanvas />
      </div>
    </ReactFlowProvider>
  );
}
