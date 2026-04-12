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
import { useState, useRef } from 'react';
import { EdgeLegend } from './EdgeLegend';
import './edgeStyles.css'

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
  const [sidebarWidth, setSidebarWidth] = useState(260);
  const isResizing = useRef(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const setSelectedNode = useCanvasStore(state => state.setSelectedNode);
  const selectedNodeId = useCanvasStore(state => state.selectedNodeId);
  const isTraceEnabled = useCanvasStore(state => state.isTraceEnabled);
  const toggleTrace = useCanvasStore(state => state.toggleTrace);

  const visibleNodes = useMemo(
    () => nodes.filter((node) => (currentScopeId ? node.parentId === currentScopeId : !node.parentId)),
    [currentScopeId, nodes],
  );

  const visibleNodeIds = useMemo(() => new Set(visibleNodes.map((node) => node.id)), [visibleNodes]);

  const visibleEdges = useMemo(
    () => edges.filter((edge) => visibleNodeIds.has(edge.source) && visibleNodeIds.has(edge.target)),
    [edges, visibleNodeIds],
  );

  const tracedEdges = useMemo(() => {
    if (!isTraceEnabled || !selectedNodeId) return visibleEdges;

    return visibleEdges.map(edge => {
      const isConnected =
        edge.source === selectedNodeId ||
        edge.target === selectedNodeId;

      return {
        ...edge,
        style: {
          ...(typeof edge.style === 'object' && edge.style !== null ? edge.style : {}),
          opacity: isConnected ? 1 : 0.2,
        },
      };
    });
  }, [visibleEdges, selectedNodeId]);

  const tracedNodes = useMemo(() => {
  if (!isTraceEnabled || !selectedNodeId) return visibleNodes;

  return visibleNodes.map(node => {
    const isConnected =
      node.id === selectedNodeId ||
      visibleEdges.some(
        e =>
          (e.source === selectedNodeId && e.target === node.id) ||
          (e.target === selectedNodeId && e.source === node.id)
      );

    return {
      ...node,
      style: {
        opacity: isConnected ? 1 : 0.2,
      },
    };
  });
}, [visibleNodes, visibleEdges, selectedNodeId]);

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

  const handleMouseDown = () => {
    isResizing.current = true;
  };

  useEffect(() => {
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing.current) return;

      const newWidth = e.clientX;

      // обмеження
      if (newWidth < 180 || newWidth > 400) return;

      setSidebarWidth(newWidth);
    };

    const handleMouseUp = () => {
      isResizing.current = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);



  return (
    <section style={{ display: 'flex', height: '100%', width: '100%', minHeight: 0, position: 'relative',}}>

      

      <div style={{ display: 'flex', flexDirection: 'column', width: isCollapsed ? 0 : sidebarWidth, overflow: 'hidden', position: 'relative',
                    transition: 'width 0.2s ease', minWidth: 180, maxWidth: 400, borderRight: '1px solid #e5e7eb', minHeight: 0,}}>

        <button
          onClick={() => setIsCollapsed((prev) => !prev)}
          style={{  position: 'absolute', right: 0,  top: 10,zIndex: 10,background: '#fff',
                    border: '1px solid #d1d5db',borderRadius: 6,padding: '4px 6px',cursor: 'pointer',}}>
          {isCollapsed ? '▶' : '◀'}
        </button>
        <NodePalette />
        <TreeView />
      </div>

      {!isCollapsed && (
        <div
          onMouseDown={handleMouseDown}
          style={{ width: 4, cursor: 'col-resize', background: '#e5e7eb', }} 
        /> 
      )}

      <div style={{ flex: 1, position: 'relative', minHeight: 0, display: 'flex', flexDirection: 'column', }}>
        <SaveStatusIndicator />
        <EdgeLegend />

        <div
          style={{
            position: 'absolute',
            top: 50,
            left: 16, // щоб не перекривало legend
            zIndex: 50,
            background: '#ffffff78',
            border: '1px solid #e5e7eb',
            borderRadius: 14,
            padding: '6px 10px',
            fontSize: 12,
            cursor: 'pointer',
            userSelect: 'none',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.06)',
          }}
          onClick={toggleTrace}
        >
          {isTraceEnabled ? '🟢 Trace: ON' : '⚪ Trace: OFF'}
          
        </div>

        {pendingConnection ? (
          <EdgeTypeSelector
            onSelect={(edgeType) => {addTypedEdgeFromPending(edgeType);}}
            onCancel={() => setPendingConnection(null)}
          />
        ) : null}

        {currentScopeId && visibleNodes.length === 0 ? (
          <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', zIndex: 5, pointerEvents: 'none', }}>
            <p style={{ margin: 0, padding: '10px 14px', borderRadius: 10, border: '1px solid #d1d5db', background: '#ffffffd9', color: '#4b5563', }}>
              This scope is empty. Add a node from the palette to start nesting.
            </p>
          </div>
        ) : null}

        <div style={{ flex: 1, minHeight: 0 }}>
          <ReactFlow
            nodes={tracedNodes}
            edges={tracedEdges}
            onNodesChange={onNodesChange as never}
            onEdgesChange={onEdgesChange as never}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            fitView
            deleteKeyCode={['Backspace', 'Delete']}
            selectionOnDrag={true}
            selectionMode={SelectionMode.Partial}
            multiSelectionKeyCode="Shift"
            onNodeClick={(_, node) => {
              setSelectedNode(node.id);
            }}
            onPaneClick={() => setSelectedNode(null)}
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
