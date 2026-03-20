'use client';

import '@xyflow/react/dist/style.css';

import { Background, Controls, MiniMap, ReactFlow, useReactFlow } from '@xyflow/react';
import { useEffect, useMemo } from 'react';

import { EdgeTypeSelector } from './edges/EdgeTypeSelector';
import { nodeTypes } from './nodeTypes';
import { NodePalette } from '../sidebar/NodePalette';
import { useCanvasStore } from '../stores/canvasStore';
import { useScopeStore } from '../stores/scopeStore';

function FlowCanvasContent() {
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
  const currentScopeId = useScopeStore((state) => state.currentScopeId);
  const scopeStackLength = useScopeStore((state) => state.scopeStack.length);
  const drillOut = useScopeStore((state) => state.drillOut);
  const { fitView } = useReactFlow();

  const visibleNodes = useMemo(
    () => nodes.filter((node) => (currentScopeId ? node.parentId === currentScopeId : !node.parentId)),
    [currentScopeId, nodes],
  );

  const visibleNodeIds = useMemo(() => new Set(visibleNodes.map((node) => node.id)), [visibleNodes]);

  const visibleEdges = useMemo(
    () => edges.filter((edge) => visibleNodeIds.has(edge.source) && visibleNodeIds.has(edge.target)),
    [edges, visibleNodeIds],
  );

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      fitView({ duration: 300, padding: 0.2 });
    }, 50);

    return () => window.clearTimeout(timeoutId);
  }, [currentScopeId, fitView]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape' || scopeStackLength === 0) {
        return;
      }

      const activeElement = document.activeElement;

      if (
        activeElement instanceof HTMLInputElement ||
        activeElement instanceof HTMLTextAreaElement ||
        activeElement instanceof HTMLSelectElement ||
        activeElement?.getAttribute('contenteditable') === 'true'
      ) {
        return;
      }

      event.preventDefault();
      drillOut();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [drillOut, scopeStackLength]);

  return (
    <section style={{ display: 'flex', height: '100%', width: '100%' }}>
      <NodePalette />

      <div style={{ flex: 1, position: 'relative' }}>
        {pendingConnection ? (
          <EdgeTypeSelector
            onSelect={(edgeType) => addTypedEdgeFromPending(edgeType)}
            onCancel={() => setPendingConnection(null)}
          />
        ) : null}

        <ReactFlow
          nodes={visibleNodes}
          edges={visibleEdges}
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

export function FlowCanvas() {
  return <FlowCanvasContent />;
}
