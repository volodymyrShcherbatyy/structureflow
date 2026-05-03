'use client';

import '@xyflow/react/dist/style.css';

import { Background, Controls, MiniMap, ReactFlow, useReactFlow, ViewportPortal } from '@xyflow/react';
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


function getPortSideFromHandle(handleId?: string | null): string | null {
  if (!handleId) {
    return null;
  }

  return handleId.split(':')[0] || null;
}


type ScopeBoundaryPortNode = {
  id: string;
  type?: string;
  position: {
    x: number;
    y: number;
  };
  data: unknown;
};

type ScopeBoundaryFrameProps = {
  currentScopeId: string | null;
  visibleNodes: ScopeBoundaryPortNode[];
};

type PortSide = 'top' | 'right' | 'bottom' | 'left';

const PORT_NODE_WIDTH = 74;
const PORT_NODE_HEIGHT = 62;

function isPortSide(value: string | undefined): value is PortSide {
  return value === 'top' || value === 'right' || value === 'bottom' || value === 'left';
}

function getScopePorts(
  currentScopeId: string | null,
  visibleNodes: ScopeBoundaryPortNode[],
): Map<PortSide, ScopeBoundaryPortNode> {
  const portsBySide = new Map<PortSide, ScopeBoundaryPortNode>();

  if (!currentScopeId) {
    return portsBySide;
  }

  visibleNodes.forEach((node) => {
    if (node.type !== 'portNode') {
      return;
    }

    if (!node.data || typeof node.data !== 'object') {
      return;
    }

    const data = node.data as {
      nodeId?: unknown;
      side?: unknown;
    };

    if (
      data.nodeId !== currentScopeId ||
      typeof data.side !== 'string' ||
      !isPortSide(data.side)
    ) {
      return;
    }

    portsBySide.set(data.side, node);
  });

  return portsBySide;
}

function getNodeCenter(node: ScopeBoundaryPortNode): { x: number; y: number } {
  return {
    x: node.position.x + PORT_NODE_WIDTH / 2,
    y: node.position.y + PORT_NODE_HEIGHT / 2,
  };
}

function ScopeBoundaryFrame({ currentScopeId, visibleNodes }: ScopeBoundaryFrameProps) {
  const portsBySide = getScopePorts(currentScopeId, visibleNodes);

  const top = portsBySide.get('top');
  const right = portsBySide.get('right');
  const bottom = portsBySide.get('bottom');
  const left = portsBySide.get('left');

  if (!top || !right || !bottom || !left) {
    return null;
  }

  const topCenter = getNodeCenter(top);
  const rightCenter = getNodeCenter(right);
  const bottomCenter = getNodeCenter(bottom);
  const leftCenter = getNodeCenter(left);

  const leftX = leftCenter.x;
  const rightX = rightCenter.x;
  const topY = topCenter.y;
  const bottomY = bottomCenter.y;

  const x = Math.min(leftX, rightX);
  const y = Math.min(topY, bottomY);
  const width = Math.abs(rightX - leftX);
  const height = Math.abs(bottomY - topY);

  if (width < 40 || height < 40) {
    return null;
  }

  return (
    <ViewportPortal>
      <svg
        style={{
          position: 'absolute',
          left: x,
          top: y,
          width,
          height,
          overflow: 'visible',
          pointerEvents: 'none',
          zIndex: -999,
        }}
      >
        <rect
          x={0}
          y={0}
          width={width}
          height={height}
          fill="none"
          stroke="rgba(18, 17, 17, 0.75)"
          strokeWidth={1}
          strokeDasharray="8 6"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </ViewportPortal>
  );
}


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
    () =>
      nodes.filter((node) => {
        if (node.type === 'portNode') {
          return currentScopeId && 'nodeId' in node.data
            ? node.data.nodeId === currentScopeId
            : false;
        }

        return currentScopeId ? node.parentId === currentScopeId : !node.parentId;
      }),
    [currentScopeId, nodes],
  );

  const visibleNodeIds = useMemo(() => new Set(visibleNodes.map((node) => node.id)), [visibleNodes]);

  const visibleEdges = useMemo(
  () =>
    edges
      .map((edge) => {
        const sourceVisible = visibleNodeIds.has(edge.source);
        const targetVisible = visibleNodeIds.has(edge.target);

        const sourcePortSide = getPortSideFromHandle(edge.sourceHandle);
        const targetPortSide = getPortSideFromHandle(edge.targetHandle);

        const sourcePortId =
          !sourceVisible && sourcePortSide
            ? `${edge.source}:${sourcePortSide}`
            : edge.source;

        const targetPortId =
          !targetVisible && targetPortSide
            ? `${edge.target}:${targetPortSide}`
            : edge.target;

        const source = sourceVisible
          ? edge.source
          : visibleNodeIds.has(sourcePortId)
            ? sourcePortId
            : edge.source;

        const target = targetVisible
          ? edge.target
          : visibleNodeIds.has(targetPortId)
            ? targetPortId
            : edge.target;

        return {
          ...edge,
          source,
          target,
        };
      })
      .filter((edge) => visibleNodeIds.has(edge.source) && visibleNodeIds.has(edge.target)),
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
            <ScopeBoundaryFrame
              currentScopeId={currentScopeId}
              visibleNodes={visibleNodes}
            />
        
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
