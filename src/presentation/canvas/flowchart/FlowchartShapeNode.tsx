'use client';

import { KeyboardEvent, MouseEvent, useEffect, useState } from 'react';

import { FlowchartElementData } from '../mappers/flowchartElementMapper';
import { useCanvasStore } from '../../stores/canvasStore';

type FlowchartShapeNodeProps = {
  id: string;
  data: FlowchartElementData;
  selected: boolean;
};

function FlowchartShapeFrame({
  type,
  selected,
  children,
}: {
  type: FlowchartElementData['flowchartType'];
  selected: boolean;
  children: React.ReactNode;
}) {
  const strokeWidth = selected ? 2 : 1;
  const stroke = '#111827';
  const fill = selected ? '#f9fafb' : '#ffffff';

  if (type === 'decision') {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          style={{
            position: 'absolute',
            inset: 0,
            overflow: 'visible',
          }}
        >
          <polygon
            points="50,1 99,50 50,99 1,50"
            fill={fill}
            stroke={stroke}
            strokeWidth={strokeWidth}
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <div
          style={{
            position: 'relative',
            zIndex: 1,
            width: '62%',
            height: '62%',
            display: 'grid',
            placeItems: 'center',
            padding: 4,
          }}
        >
          {children}
        </div>
      </div>
    );
  }

  if (type === 'data') {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          style={{
            position: 'absolute',
            inset: 0,
            overflow: 'visible',
          }}
        >
          <polygon
            points="15,1 99,1 85,99 1,99"
            fill={fill}
            stroke={stroke}
            strokeWidth={strokeWidth}
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <div
          style={{
            position: 'relative',
            zIndex: 1,
            width: '78%',
            height: '78%',
            display: 'grid',
            placeItems: 'center',
            padding: 4,
          }}
        >
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        minWidth: 120,
        minHeight: 60,
        background: fill,
        border: `${strokeWidth}px solid ${stroke}`,
        borderRadius: type === 'terminator' ? 999 : 0,
        display: 'grid',
        placeItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: 8,
      }}
    >
      {children}
    </div>
  );
}

export function FlowchartShapeNode({ id, data, selected }: FlowchartShapeNodeProps) {
  const updateFlowchartElementLabel = useCanvasStore(
    (state) => state.updateFlowchartElementLabel,
  );
  const addPendingChange = useCanvasStore((state) => state.addPendingChange);

  const [editing, setEditing] = useState(false);
  const [draftLabel, setDraftLabel] = useState(data.label);

  useEffect(() => {
    setDraftLabel(data.label);
  }, [data.label]);

  const commitLabel = () => {
    if (draftLabel !== data.label) {
      updateFlowchartElementLabel(id, draftLabel);
      addPendingChange({
        type: 'rename-flowchart-element',
        elementId: data.elementId,
        label: draftLabel,
      });
    }

    setEditing(false);
  };

  const handleDoubleClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setEditing(true);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
      commitLabel();
    }

    if (event.key === 'Escape') {
      setDraftLabel(data.label);
      setEditing(false);
    }
  };

  return (
    <div
      onDoubleClick={handleDoubleClick}
      style={{
        width: data.width,
        height: data.height,
        position: 'relative',
        filter: selected
          ? 'drop-shadow(0 4px 10px rgba(17, 24, 39, 0.18))'
          : 'none',
      }}
      title="Double click to edit"
    >
      <FlowchartShapeFrame type={data.flowchartType} selected={selected}>
        {editing ? (
          <textarea
            value={draftLabel}
            onChange={(event) => setDraftLabel(event.target.value)}
            onBlur={commitLabel}
            onKeyDown={handleKeyDown}
            autoFocus
            style={{
              width: '100%',
              minHeight: 36,
              resize: 'none',
              border: 'none',
              outline: 'none',
              background: 'transparent',
              textAlign: 'center',
              font: 'inherit',
              fontSize: 13,
              lineHeight: 1.25,
              color: '#111827',
            }}
          />
        ) : (
          <div
            style={{
              width: '100%',
              whiteSpace: 'pre-wrap',
              textAlign: 'center',
              fontSize: 13,
              lineHeight: 1.25,
              color: '#111827',
              padding: 4,
              userSelect: 'none',
            }}
          >
            {data.label}
          </div>
        )}
      </FlowchartShapeFrame>
    </div>
  );
}