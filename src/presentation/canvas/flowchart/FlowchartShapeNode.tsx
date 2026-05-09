'use client';

import { KeyboardEvent, MouseEvent, PointerEvent, useEffect, useRef, useState,} from 'react';
import { Handle } from '@xyflow/react';
import {
  FLOWCHART_ANCHORS,
  getFlowchartAnchorHandleId,
} from './flowchartAnchors';

import { FlowchartElementData } from '../mappers/flowchartElementMapper';
import { useCanvasStore } from '../../stores/canvasStore';

type FlowchartShapeNodeProps = {
  id: string;
  data: FlowchartElementData;
  selected: boolean;
};

const MIN_WIDTH = 120;
const MIN_HEIGHT = 60;

type ResizeHandlePosition = 'bottom-right';

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

    if (type === 'terminator') {
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
          <rect
            x={1}
            y={1}
            width={98}
            height={98}
            rx={50}
            ry={50}
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
            height: '72%',
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

  if (type === 'process') {
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
          <rect
            x={1}
            y={1}
            width={98}
            height={98}
            rx={0}
            ry={0}
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
            width: '88%',
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
}

function ResizeHandle({
  position,
  onPointerDown,
}: {
  position: ResizeHandlePosition;
  onPointerDown: (
    position: ResizeHandlePosition,
    event: PointerEvent<HTMLDivElement>,
  ) => void;
}) {
  const base: React.CSSProperties = {
    position: 'absolute',
    width: 10,
    height: 10,
    background: '#ffffff',
    border: '1px solid #111827',
    borderRadius: 2,
    zIndex: 20,
    pointerEvents: 'all',
  };

  const styleByPosition: Record<ResizeHandlePosition, React.CSSProperties> = {
    'bottom-right': {
      right: -5,
      bottom: -5,
      cursor: 'nwse-resize',
    },
  };

  return (
    <div
      onPointerDown={(event) => onPointerDown(position, event)}
      style={{
        ...base,
        ...styleByPosition[position],
      }}
    />
  );
}

function FlowchartAnchorHandles({
  data,
}: {
  data: FlowchartElementData;
}) {
  const anchors = FLOWCHART_ANCHORS[data.flowchartType];

  return (
    <>
      {anchors.flatMap((anchor) => {
        const handleId = getFlowchartAnchorHandleId(data.elementId, anchor.id);

        const baseStyle: React.CSSProperties = {
          width: 8,
          height: 8,
          borderRadius: 999,
          border: '1px solid #111827',
          background: '#ffffff',
          opacity: 1,
          pointerEvents: 'all',
          zIndex: 30,
        };

        const handles = [];

        if (anchor.role === 'source' || anchor.role === 'both') {
          handles.push(
            <Handle
              key={`${handleId}:source`}
              id={`${anchor.id}:source`}
              type="source"
              position={anchor.position}
              style={baseStyle}
            />,
          );
        }

        if (anchor.role === 'target' || anchor.role === 'both') {
          handles.push(
            <Handle
              key={`${handleId}:target`}
              id={`${anchor.id}:target`}
              type="target"
              position={anchor.position}
              style={baseStyle}
            />,
          );
        }

        return handles;
      })}
    </>
  );
}

export function FlowchartShapeNode({ id, data, selected }: FlowchartShapeNodeProps) {
  const updateFlowchartElementLabel = useCanvasStore(
    (state) => state.updateFlowchartElementLabel,
  );

  const resizeFlowchartElement = useCanvasStore(
    (state) => state.resizeFlowchartElement,
  );

  const addPendingChange = useCanvasStore((state) => state.addPendingChange);

  const [editing, setEditing] = useState(false);
  const [draftLabel, setDraftLabel] = useState(data.label);
  const resizeStateRef = useRef<{
    position: ResizeHandlePosition;
    startX: number;
    startY: number;
    startWidth: number;
    startHeight: number;
  } | null>(null);

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

  const commitResize = (width: number, height: number) => {
    resizeFlowchartElement(id, width, height);
    addPendingChange({
      type: 'resize-flowchart-element',
      elementId: data.elementId,
      width,
      height,
    });
  };

  const handleResizePointerDown = (
    position: ResizeHandlePosition,
    event: PointerEvent<HTMLDivElement>,
  ) => {
    event.stopPropagation();
    event.preventDefault();

    resizeStateRef.current = {
      position,
      startX: event.clientX,
      startY: event.clientY,
      startWidth: data.width,
      startHeight: data.height,
    };

    const handlePointerMove = (moveEvent: globalThis.PointerEvent) => {
      const resizeState = resizeStateRef.current;

      if (!resizeState) {
        return;
      }

      const deltaX = moveEvent.clientX - resizeState.startX;
      const deltaY = moveEvent.clientY - resizeState.startY;

      const nextWidth = Math.max(
        MIN_WIDTH,
        Math.round(resizeState.startWidth + deltaX),
      );

      const nextHeight = Math.max(
        MIN_HEIGHT,
        Math.round(resizeState.startHeight + deltaY),
      );

      resizeFlowchartElement(id, nextWidth, nextHeight);
    };

    const handlePointerUp = () => {
      const resizeState = resizeStateRef.current;
      resizeStateRef.current = null;

      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);

      if (!resizeState) {
        return;
      }

      const latestNode = useCanvasStore
        .getState()
        .nodes.find((node) => node.id === id);

      if (
        !latestNode ||
        latestNode.type !== 'flowchartShapeNode' ||
        !('width' in latestNode.data) ||
        !('height' in latestNode.data)
      ) {
        return;
      }

      commitResize(latestNode.data.width, latestNode.data.height);
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
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

      <FlowchartAnchorHandles data={data} />

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
        {selected ? (
          <ResizeHandle
            position="bottom-right"
            onPointerDown={handleResizePointerDown}
          />
        ) : null}

    </div>
  );
}