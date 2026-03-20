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

export function BlockNode({ id, data }: NodeProps<FlowNodeData>) {
  const nodes = useCanvasStore((state) => state.nodes);
  const updateNodeLabel = useCanvasStore((state) => state.updateNodeLabel);
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

    updateNodeLabel(id, trimmed);
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
    if (!hasChildren || editing) {
      return;
    }

    drillInto(id, data.label);
  };

  return (
    <div
      onDoubleClick={handleNodeDoubleClick}
      style={{
        minWidth: 180,
        border: `1px solid ${color.border}`,
        borderRadius: 10,
        overflow: 'hidden',
        background: color.background,
        boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
        cursor: hasChildren ? 'zoom-in' : 'default',
      }}
    >
      <Handle type="target" position={Position.Top} />
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Bottom} />
      <Handle type="source" position={Position.Right} />

      <header
        style={{
          background: color.header,
          color: '#fff',
          padding: '6px 10px',
          fontSize: 12,
          textTransform: 'uppercase',
          letterSpacing: '0.04em',
          fontWeight: 600,
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
              fontWeight: 600,
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
        {hasChildren ? (
          <p style={{ margin: 0, fontSize: 11, color: '#4b5563' }}>⊕ double click to open</p>
        ) : null}
      </div>
    </div>
  );
}
