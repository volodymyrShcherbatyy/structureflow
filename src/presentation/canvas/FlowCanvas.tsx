'use client';

import '@xyflow/react/dist/style.css';

import { Background, Controls, MiniMap, ReactFlow } from '@xyflow/react';

import { EdgeTypeSelector } from './edges/EdgeTypeSelector';
import { nodeTypes } from './nodeTypes';
import { NodePalette } from '../sidebar/NodePalette';
import { useCanvasStore } from '../stores/canvasStore';

export function FlowCanvas() {
  const {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onConnect,
    removeNode,
    removeEdge,
    pendingConnection,
    setPendingConnection,
    addTypedEdgeFromPending,
  } = useCanvasStore();

  return (
    <section style={{ display: 'flex', height: '100vh', width: '100%' }}>
      <NodePalette />

      <div style={{ flex: 1, position: 'relative' }}>
        {pendingConnection ? (
          <EdgeTypeSelector
            onSelect={(edgeType) => addTypedEdgeFromPending(edgeType)}
            onCancel={() => setPendingConnection(null)}
          />
        ) : null}

        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange as never}
          onEdgesChange={onEdgesChange as never}
          onConnect={onConnect}
          onNodesDelete={(deletedNodes) => {
            deletedNodes.forEach((node) => removeNode(node.id));
          }}
          onEdgesDelete={(deletedEdges) => {
            deletedEdges.forEach((edge) => removeEdge(edge.id));
          }}
          nodeTypes={nodeTypes}
          fitView
          deleteKeyCode={['Backspace', 'Delete']}
        >
          <MiniMap />
          <Controls />
          <Background gap={18} size={1} />
        </ReactFlow>
      </div>
    </section>
  );
}
