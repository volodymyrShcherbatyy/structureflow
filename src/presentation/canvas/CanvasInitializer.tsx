'use client';

import { Edge, Node, ReactFlowProvider } from '@xyflow/react';
import { useEffect } from 'react';

import { FlowCanvas } from './FlowCanvas';
import { useAutosave } from './hooks/useAutosave';
import { FlowEdgeData } from './mappers/edgeMapper';
import { FlowNodeData } from './mappers/nodeMapper';
import { Breadcrumb } from '../navigation/Breadcrumb';
import { useCanvasStore } from '../stores/canvasStore';
import { useScopeStore } from '../stores/scopeStore';
import { FlowPortData } from './mappers/portMapper';
import { FlowchartElementData } from './mappers/flowchartElementMapper';
import { FlowchartConnectionEdgeData } from './mappers/flowchartConnectionMapper';

type CanvasInitializerProps = {
  projectId: string;
  projectName: string;
  initialNodes: Node<FlowNodeData>[];
  initialEdges: Edge<FlowEdgeData>[];
  initialPorts: Node<FlowPortData>[];
  initialFlowchartElements: Node<FlowchartElementData>[];
  initialFlowchartConnections: Edge<FlowchartConnectionEdgeData>[];
};

function CanvasContent() {
  useAutosave();

  return (
    <div style={{ display: 'grid', gridTemplateRows: 'auto 1fr', minHeight: '100vh' }}>
      <Breadcrumb />
      <FlowCanvas />
    </div>
  );
}

export function CanvasInitializer({
  projectId,
  projectName,
  initialNodes,
  initialEdges,
  initialPorts,
  initialFlowchartElements,
  initialFlowchartConnections,
}: CanvasInitializerProps) {
  const initCanvas = useCanvasStore((state) => state.initCanvas);
  const setProjectId = useScopeStore((state) => state.setProjectId);
  const setProjectName = useScopeStore((state) => state.setProjectName);

  useEffect(() => {
    useScopeStore.getState().resetScope();
    setProjectId(projectId);
    setProjectName(projectName);
    
    initCanvas([...initialNodes, ...initialPorts, ...initialFlowchartElements], [...initialEdges, ...initialFlowchartConnections]);
  }, [projectId, projectName, initialNodes, initialEdges, initialPorts, initialFlowchartElements, ...initialFlowchartConnections, initCanvas, setProjectId, setProjectName]);
  
  return (
    <ReactFlowProvider>
      <CanvasContent />
    </ReactFlowProvider>
  );
}
