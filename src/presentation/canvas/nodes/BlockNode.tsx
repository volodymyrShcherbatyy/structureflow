'use client';

import { KeyboardEvent, MouseEvent, useMemo, useState } from 'react';

import { FlowNodeData } from '../mappers/nodeMapper';
import { MovableBoundaryHandle } from './MovableBoundaryHandle';
import { useCanvasStore } from '../../stores/canvasStore';
import { useScopeStore } from '../../stores/scopeStore';

const TYPE_COLORS: Record<string, { header: string; border: string; background: string }> = {
  system: { header: '#1d4ed8', border: '#93c5fd', background: '#eff6ff' },
  container: { header: '#0f766e', border: '#99f6e4', background: '#f0fdfa' },
  component: { header: '#6d28d9', border: '#ddd6fe', background: '#f5f3ff' },
  page: { header: '#b45309', border: '#fde68a', background: '#fffbeb' },
  external: { header: '#374151', border: '#d1d5db', background: '#f9fafb' },
};

type BoundarySide = 'top' | 'right' | 'bottom' | 'left';

type BoundaryHandleConfig = {
  side: BoundarySide;
  type: 'source' | 'target';
  color: string;
};

type BlockNodeProps = {
  id: string;
  data: FlowNodeData;
  selected: boolean;
};

const BOUNDARY_HANDLES: BoundaryHandleConfig[] = [
  {
    side: 'top',
    type: 'target',
    color: '#16a34a',
  },
  {
    side: 'left',
    type: 'target',
    color: '#16a34a',
  },
  {
    side: 'bottom',
    type: 'source',
    color: '#dc2626',
  },
  {
    side: 'right',
    type: 'source',
    color: '#dc2626',
  },
];

const NODE_LABEL_MAX_LENGTH = 30;
const NODE_DESCRIPTION_MAX_LENGTH = 120;
const NODE_MAX_WIDTH = 200;

function getPortForSide(
  nodes: ReturnType<typeof useCanvasStore.getState>['nodes'],
  nodeId: string,
  side: BoundarySide,
) {
  return nodes.find(
    (node) =>
      node.type === 'portNode' &&
      'nodeId' in node.data &&
      'side' in node.data &&
      node.data.nodeId === nodeId &&
      node.data.side === side,
  );
}

export function BlockNode({ id, data, selected }: BlockNodeProps) {
  const nodes = useCanvasStore((state) => state.nodes);
  const updateNodeDetails = useCanvasStore((state) => state.updateNodeDetails);
  const updateExternalHandleOffset = useCanvasStore(
    (state) => state.updateExternalHandleOffset,
  );
  const addPendingChange = useCanvasStore((state) => state.addPendingChange);
  const drillInto = useScopeStore((state) => state.drillInto);

  const [editingField, setEditingField] = useState<'label' | 'description' | null>(
    null,
  );
  const [draftLabel, setDraftLabel] = useState(data.label);
  const [draftDescription, setDraftDescription] = useState(data.description ?? '');

  const color = TYPE_COLORS[data.nodeType] ?? TYPE_COLORS.external;
  const hasChildren = useMemo(() => nodes.some((node) => node.parentId === id), [id, nodes]);

  const commitDetails = () => {
    const label = draftLabel.trim();
    const description = draftDescription.trim();

    if (!label) {
      setDraftLabel(data.label);
      setDraftDescription(data.description ?? '');
      setEditingField(null);
      return;
    }

    const normalizedDescription = description || undefined;

    const labelChanged = label !== data.label;
    const descriptionChanged = normalizedDescription !== data.description;

    if (labelChanged || descriptionChanged) {
      updateNodeDetails(id, {
        label,
        description: normalizedDescription,
      });

      addPendingChange({
        type: 'update-node-details',
        nodeId: id,
        label,
        description: normalizedDescription,
      });
    }

    setEditingField(null);
  };

  const handleLabelKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      commitDetails();
    }

    if (event.key === 'Escape') {
      setDraftLabel(data.label);
      setDraftDescription(data.description ?? '');
      setEditingField(null);
    }
  };

  const handleDescriptionKeyDown = (
    event: KeyboardEvent<HTMLTextAreaElement>,
  ) => {
    if (event.key === 'Escape') {
      setDraftLabel(data.label);
      setDraftDescription(data.description ?? '');
      setEditingField(null);
    }
  };

  const handleLabelDoubleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setDraftLabel(data.label);
    setDraftDescription(data.description ?? '');
    setEditingField('label');
  };

  const handleDescriptionDoubleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setDraftLabel(data.label);
    setDraftDescription(data.description ?? '');
    setEditingField('description');
  };

  const handleNodeDoubleClick = () => {
    if (editingField) {
      return;
    }

    drillInto(id, data.label);
  };

  return (
    <div
      onDoubleClick={handleNodeDoubleClick}
      style={{
        width: NODE_MAX_WIDTH,
        minWidth: 180,
        maxWidth: NODE_MAX_WIDTH,
        border: selected ? '2px solid #6366f1' : `1px solid ${color.border}`,
        borderRadius: 10,
        overflow: 'visible',
        background: color.background,
        boxShadow: selected ? '0 4px 12px rgba(99,102,241,0.25)' : '0 1px 3px rgba(0,0,0,0.08)',
        cursor: 'zoom-in',
        transform: selected ? 'scale(1.02)' : 'scale(1)',
        transition: 'all 0.15s ease',
        position: 'relative',
      }}
    >
      {BOUNDARY_HANDLES.map((handle) => {
        const port = getPortForSide(nodes, id, handle.side);

        const portId =
          port && 'portId' in port.data ? port.data.portId : `${id}:${handle.side}`;

        const offset =
          port && 'externalHandleOffset' in port.data
            ? port.data.externalHandleOffset
            : 0.5;

        return (
          <MovableBoundaryHandle
            key={handle.side}
            nodeId={id}
            portId={portId}
            side={handle.side}
            type={handle.type}
            offset={offset}
            color={handle.color}
            onOffsetChange={(nextPortId, nextOffset) => {
              updateExternalHandleOffset(nextPortId, nextOffset);
            }}
            onOffsetCommit={(nextPortId, nextOffset) => {
              updateExternalHandleOffset(nextPortId, nextOffset);
              addPendingChange({
                type: 'move-external-handle',
                portId: nextPortId,
                offset: nextOffset,
              });
            }}
          />
        );
      })}

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
        {editingField === 'label' ? (
          <textarea
            value={draftLabel}
            maxLength={NODE_LABEL_MAX_LENGTH}
            onChange={(event) => setDraftLabel(event.target.value)}
            onBlur={commitDetails}
            onKeyDown={handleLabelKeyDown}
            autoFocus
            rows={2}
            style={{
              border: '1px solid #d1d5db',
              borderRadius: 6,
              padding: '6px 8px',
              fontWeight: 600,
              resize: 'none',
              width: '100%',
              boxSizing: 'border-box',
              fontFamily: 'inherit',
              fontSize: 13,
              lineHeight: 1.3,
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
              width: '100%',
              maxWidth: '100%',
              whiteSpace: 'normal',
              overflowWrap: 'anywhere',
              lineHeight: 1.3,
            }}
            title="Double click to edit label"
          >
            {data.label}
          </button>
        )}

        {editingField === 'description' ? (
          <textarea
            value={draftDescription}
            maxLength={NODE_DESCRIPTION_MAX_LENGTH}
            onChange={(event) => setDraftDescription(event.target.value)}
            onBlur={commitDetails}
            onKeyDown={handleDescriptionKeyDown}
            autoFocus
            rows={4}
            placeholder="Add description..."
            style={{
              border: '1px solid #d1d5db',
              borderRadius: 6,
              padding: '6px 8px',
              resize: 'vertical',
              width: '100%',
              boxSizing: 'border-box',
              fontFamily: 'inherit',
              fontSize: 12,
              lineHeight: 1.35,
            }}
          />
        ) : (
          <button
            type="button"
            onDoubleClick={handleDescriptionDoubleClick}
            style={{
              border: 'none',
              background: 'transparent',
              padding: 0,
              textAlign: 'left',
              cursor: 'text',
              width: '100%',
              maxWidth: '100%',
              minHeight: 18,
              color: data.description ? '#374151' : '#9ca3af',
              fontSize: 12,
              lineHeight: 1.35,
              whiteSpace: 'pre-wrap',
              overflowWrap: 'anywhere',
              display: '-webkit-box',
              WebkitLineClamp: 5,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
            title="Double click to edit description"
          >
            {data.description || 'Double click to add description'}
          </button>
        )}

        <p style={{ margin: 0, fontSize: 11, color: '#4b5563' }}>
          {hasChildren ? 'Double click to open' : 'Empty scope. Double click to open'}
        </p>
      </div>
    </div>
  );
}