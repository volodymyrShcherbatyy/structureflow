'use client';

import { Handle, NodeProps, Position } from '@xyflow/react';
import { KeyboardEvent, MouseEvent, useMemo, useState } from 'react';

import { FlowNodeData } from '../mappers/nodeMapper';
import { useCanvasStore } from '../../stores/canvasStore';
import { useScopeStore } from '../../stores/scopeStore';

const TYPE_COLORS: Record<string, { header: string; border: string; background: string }> = {
  system: { header: '#1d4ed8', border: '#93c5fd', background: '#eff6ff' },
  container: { header: '#0f766e', border: '#99f6e4', background: '#f0fdfa' },
  component: { header: '#6d28d9', border: '#ddd6fe', background: '#f5f3ff' },
  page: { header: '#b45309', border: '#fde68a', background: '#fffbeb' },
  external: { header: '#374151', border: '#d1d5db', background: '#f9fafb' },
};

type BlockNodeProps = {
  id: string;
  data: FlowNodeData;
  selected: boolean;
};

export function BlockNode({ id, data, selected }: BlockNodeProps) {
  const nodes = useCanvasStore((state) => state.nodes);
  const updateNodeLabel = useCanvasStore((state) => state.updateNodeLabel);
  const addPendingChange = useCanvasStore((state) => state.addPendingChange);
  const drillInto = useScopeStore((state) => state.drillInto);
  const [editing, setEditing] = useState(false);
  const [draftLabel, setDraftLabel] = useState(data.label);

  const color = TYPE_COLORS[data.nodeType] ?? TYPE_COLORS.external;
  const hasChildren = useMemo(() => nodes.some((node) => node.parentId === id), [id, nodes]);

  const commitLabel = () => {
    const trimmed = draftLabel.trim();

    if (!trimmed) {
      setDraftLabel(data.label);
      setEditing(false);
      return;
    }

    if (trimmed !== data.label) {
      updateNodeLabel(id, trimmed);
      addPendingChange({ type: 'rename', nodeId: id, label: trimmed });
    }

    setEditing(false);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      commitLabel();
    }

    if (event.key === 'Escape') {
      setDraftLabel(data.label);
      setEditing(false);
    }
  };

  const handleLabelDoubleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setEditing(true);
  };

  const handleNodeDoubleClick = () => {
    if (editing) {
      return;
    }

    drillInto(id, data.label);
  };

  return (
    <div
      onDoubleClick={handleNodeDoubleClick}
      style={{
        minWidth: 180,
        border: selected ? '2px solid #6366f1' : `1px solid ${color.border}`,
        borderRadius: 10,
        overflow: 'visible', // ← одразу підготуємо для handles
        background: color.background,
        boxShadow: selected ? '0 4px 12px rgba(99,102,241,0.25)' : '0 1px 3px rgba(0,0,0,0.08)',
        cursor: 'zoom-in',
        transform: selected ? 'scale(1.02)' : 'scale(1)',
        transition: 'all 0.15s ease',
      }}
    >
      <Handle id="top" type="target" position={Position.Top} 
        style={{ width: 8, height: 8, background: '#555', pointerEvents: 'all', zIndex: 10,}} />
      <Handle id="left" type="target" position={Position.Left} 
        style={{ width: 8, height: 8, background: '#555', pointerEvents: 'all', zIndex: 10,}} />
      <Handle id="bottom" type="source" position={Position.Bottom} 
        style={{ width: 8, height: 8, background: '#555', pointerEvents: 'all', zIndex: 10,}} />
      <Handle id="right" type="source" position={Position.Right} 
        style={{ width: 8, height: 8, background: '#555', pointerEvents: 'all', zIndex: 10,}} />
        
      <header
        style={{
          background: color.header,
          color: '#fff',
          padding: '6px 10px',
          fontSize: 10,
          textTransform: 'uppercase',
          letterSpacing: '0.04em',
          fontWeight: 400,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      >
        {data.nodeType}
      </header>

      <div style={{ padding: 10, display: 'grid', gap: 8 }}>
        {editing ? (
          <input
            value={draftLabel}
            onChange={(event) => setDraftLabel(event.target.value)}
            onBlur={commitLabel}
            onKeyDown={handleKeyDown}
            autoFocus
            style={{
              border: '1px solid #d1d5db',
              borderRadius: 6,
              padding: '6px 8px',
              fontWeight: 400,
            }}
          />
        ) : (
          <button
            type="button"
            onDoubleClick={handleLabelDoubleClick}
            style={{
              border: 'none',
              background: 'transparent',
              padding: 0,
              textAlign: 'left',
              fontWeight: 600,
              cursor: 'text',
            }}
            title="Double click to rename"
          >
            {data.label}
          </button>
        )}

        {data.description ? <p style={{ margin: 0, fontSize: 12 }}>{data.description}</p> : null}
        <p style={{ margin: 0, fontSize: 11, color: '#4b5563' }}>
          {hasChildren ? 'Double click to open' : 'Empty scope. Double click to open'}
        </p>
      </div>
    </div>
  );
}
