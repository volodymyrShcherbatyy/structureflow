'use client';

import { Handle, Position } from '@xyflow/react';
import { MouseEvent, useRef } from 'react';

type BoundarySide = 'top' | 'right' | 'bottom' | 'left';
type BoundaryHandleType = 'source' | 'target';

type MovableBoundaryHandleProps = {
  nodeId: string;
  portId: string;
  side: BoundarySide;
  type: BoundaryHandleType;
  offset: number;
  color: string;
  onOffsetChange: (portId: string, offset: number) => void;
  onOffsetCommit: (portId: string, offset: number) => void;
};

const HANDLE_LONG_SIZE = 16;
const HANDLE_SHORT_SIZE = 8;

function clampOffset(offset: number): number {
  return Math.min(1, Math.max(0, offset));
}

function getReactFlowPosition(side: BoundarySide): Position {
  switch (side) {
    case 'top':
      return Position.Top;
    case 'right':
      return Position.Right;
    case 'bottom':
      return Position.Bottom;
    case 'left':
      return Position.Left;
  }
}

function getContainerStyle(side: BoundarySide, offset: number): React.CSSProperties {
  const percentage = `${offset * 100}%`;

  const base: React.CSSProperties = {
    position: 'absolute',
    zIndex: 20,
  };

  switch (side) {
    case 'top':
      return {
        ...base,
        left: percentage,
        top: 0,
        transform: 'translate(-25%, -25%)',
        width: HANDLE_LONG_SIZE,
        height: HANDLE_SHORT_SIZE,
      };
    case 'bottom':
      return {
        ...base,
        left: percentage,
        bottom: 0,
        transform: 'translate(-25%, 25%)',
        width: HANDLE_LONG_SIZE,
        height: HANDLE_SHORT_SIZE,
      };
    case 'left':
      return {
        ...base,
        left: 0,
        top: percentage,
        transform: 'translate(-25%, -25%)',
        width: HANDLE_SHORT_SIZE,
        height: HANDLE_LONG_SIZE,
      };
    case 'right':
      return {
        ...base,
        right: 0,
        top: percentage,
        transform: 'translate(25%, -25%)',
        width: HANDLE_SHORT_SIZE,
        height: HANDLE_LONG_SIZE,
      };
  }
}

function getHandleStyle(side: BoundarySide, color: string): React.CSSProperties {
  const isHorizontal = side === 'top' || side === 'bottom';

  

  return {
    width: isHorizontal ? HANDLE_LONG_SIZE : HANDLE_SHORT_SIZE,
    height: isHorizontal ? HANDLE_SHORT_SIZE : HANDLE_LONG_SIZE,
    borderRadius: 3,
    background: color,
    border: '1px solid #ffffff',
    pointerEvents: 'all',
    zIndex: 21,
  };
}

function getOffsetFromPointer(
  side: BoundarySide,
  event: MouseEvent<HTMLDivElement>,
  element: HTMLDivElement,
): number {
  const nodeElement = element.closest('.react-flow__node') as HTMLElement | null;

  if (!nodeElement) {
    return 0.5;
  }

  const rect = nodeElement.getBoundingClientRect();

  if (side === 'top' || side === 'bottom') {
    return clampOffset((event.clientX - rect.left) / rect.width);
  }

  return clampOffset((event.clientY - rect.top) / rect.height);
}

export function MovableBoundaryHandle({
  portId,
  side,
  type,
  offset,
  color,
  onOffsetChange,
  onOffsetCommit,
}: MovableBoundaryHandleProps) {
  const lastOffsetRef = useRef(offset);

  const handleMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    if (!event.altKey) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    const element = event.currentTarget;

    const handleMouseMove = (moveEvent: globalThis.MouseEvent) => {
      const syntheticLikeEvent = {
        clientX: moveEvent.clientX,
        clientY: moveEvent.clientY,
      } as MouseEvent<HTMLDivElement>;

      const nextOffset = getOffsetFromPointer(side, syntheticLikeEvent, element);
      lastOffsetRef.current = nextOffset;
      onOffsetChange(portId, nextOffset);
    };

    const handleMouseUp = () => {
      onOffsetCommit(portId, lastOffsetRef.current);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      style={getContainerStyle(side, offset)}
      title="Drag to connect. Alt + drag to move along this side."
    >
      <Handle
        id={side}
        type={type}
        position={getReactFlowPosition(side)}
        style={getHandleStyle(side, color)}
      />
    </div>
  );
}