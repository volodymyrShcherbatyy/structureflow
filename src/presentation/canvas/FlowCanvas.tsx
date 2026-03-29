'use client';

import '@xyflow/react/dist/style.css';

import { Background, Controls, MiniMap, ReactFlow, useReactFlow } from '@xyflow/react';
import { useEffect, useMemo } from 'react';

import { EdgeTypeSelector } from './edges/EdgeTypeSelector';
import { SaveStatusIndicator } from './SaveStatusIndicator';
import { nodeTypes } from './nodeTypes';
import { NodePalette } from '../sidebar/NodePalette';
import { useCanvasStore } from '../stores/canvasStore';
import { useScopeStore } from '../stores/scopeStore';
import { SelectionMode } from '@xyflow/react';
import { TreeView } from '../sidebar/TreeView';

function FlowCanvasContent() {
  const {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onConnect,
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
    <section style={{ display: 'flex', height: '100%', width: '100%', minHeight: 0, }}>
      <TreeView />
      <NodePalette />

      <div
        style={{
          flex: 1,
          position: 'relative',
          minHeight: 0,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <SaveStatusIndicator />

        {pendingConnection ? (
          <EdgeTypeSelector
            onSelect={(edgeType) => addTypedEdgeFromPending(edgeType)}
            onCancel={() => setPendingConnection(null)}
          />
        ) : null}

        {currentScopeId && visibleNodes.length === 0 ? (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'grid',
              placeItems: 'center',
              zIndex: 5,
              pointerEvents: 'none',
            }}
          >
            <p
              style={{
                margin: 0,
                padding: '10px 14px',
                borderRadius: 10,
                border: '1px solid #d1d5db',
                background: '#ffffffd9',
                color: '#4b5563',
              }}
            >
              This scope is empty. Add a node from the palette to start nesting.
            </p>
          </div>
        ) : null}

        <div style={{ flex: 1, minHeight: 0 }}>
          <ReactFlow
            nodes={visibleNodes}
            edges={visibleEdges}
            onNodesChange={onNodesChange as never}
            onEdgesChange={onEdgesChange as never}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            fitView
            deleteKeyCode={['Backspace', 'Delete']}
            selectionOnDrag={true}
            selectionMode={SelectionMode.Partial}
            multiSelectionKeyCode="Shift"
          >
        
            <MiniMap />
            <Controls />
            <Background gap={18} size={1} />
          </ReactFlow>
        </div>
      </div>
    </section>
  );
}

export function FlowCanvas() {
  return <FlowCanvasContent />;
}
