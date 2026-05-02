'use client';

import { Handle, Position } from '@xyflow/react';

import { FlowPortData } from '../mappers/portMapper';

type PortNodeProps = {
  id: string;
  data: FlowPortData;
  selected: boolean;
};

type VisualMarkerConfig = {
  position: Position;
  color: string;
};

type ActiveHandleConfig = {
  type: 'source' | 'target';
  position: Position;
  color: string;
};

const SOURCE_COLOR = '#dc2626';
const TARGET_COLOR = '#16a34a';

const MUTED_SOURCE_COLOR = '#fca5a5';
const MUTED_TARGET_COLOR = '#86efac';

const SIDE_LABELS: Record<string, string> = {
  top: 'Top',
  right: 'Right',
  bottom: 'Bottom',
  left: 'Left',
};

function isIncomingSide(side: string): boolean {
  return side === 'top' || side === 'left';
}

function getExternalPosition(side: string): Position {
  switch (side) {
    case 'top':
      return Position.Top;
    case 'right':
      return Position.Right;
    case 'bottom':
      return Position.Bottom;
    case 'left':
      return Position.Left;
    default:
      return Position.Left;
  }
}

function getInternalPosition(side: string): Position {
  switch (side) {
    case 'top':
      return Position.Bottom;
    case 'right':
      return Position.Left;
    case 'bottom':
      return Position.Top;
    case 'left':
      return Position.Right;
    default:
      return Position.Right;
  }
}

function getExternalMarker(side: string): VisualMarkerConfig {
  const incoming = isIncomingSide(side);

  return {
    position: getExternalPosition(side),
    color: incoming ? MUTED_TARGET_COLOR : MUTED_SOURCE_COLOR,
  };
}

function getInternalHandle(side: string): ActiveHandleConfig {
  const incoming = isIncomingSide(side);

  return {
    type: incoming ? 'source' : 'target',
    position: getInternalPosition(side),
    color: incoming ? SOURCE_COLOR : TARGET_COLOR,
  };
}

function getMarkerStyle(position: Position, color: string): React.CSSProperties {
  const base: React.CSSProperties = {
    position: 'absolute',
    width: 12,
    height: 12,
    borderRadius: 999,
    background: color,
    border: '2px solid #ffffff',
    opacity: 0.45,
    pointerEvents: 'none',
  };

  switch (position) {
    case Position.Top:
      return {
        ...base,
        top: -7,
        left: '50%',
        transform: 'translateX(-50%)',
      };
    case Position.Right:
      return {
        ...base,
        right: -7,
        top: '50%',
        transform: 'translateY(-50%)',
      };
    case Position.Bottom:
      return {
        ...base,
        bottom: -7,
        left: '50%',
        transform: 'translateX(-50%)',
      };
    case Position.Left:
    default:
      return {
        ...base,
        left: -7,
        top: '50%',
        transform: 'translateY(-50%)',
      };
  }
}

export function PortNode({ data, selected }: PortNodeProps) {
  const label = SIDE_LABELS[data.side] ?? data.side;
  const externalMarker = getExternalMarker(data.side);
  const internalHandle = getInternalHandle(data.side);

  return (
    <div
      style={{
        minWidth: 74,
        border: selected ? '2px solid #f97316' : '1px solid #fdba74',
        borderRadius: 8,
        background: '#fff7ed',
        color: '#9a3412',
        padding: '22px 8px',
        fontSize: 10,
        fontWeight: 600,
        textAlign: 'center',
        boxShadow: selected
          ? '0 4px 12px rgba(249,115,22,0.25)'
          : '0 1px 3px rgba(0,0,0,0.08)',
        cursor: 'grab',
        userSelect: 'none',
        position: 'relative',
      }}
      title={`Port: ${label}`}
    >
      <div
        title={`${label} External visual marker`}
        style={getMarkerStyle(externalMarker.position, externalMarker.color)}
      />

      <Handle
        id={`${data.side}:internal`}
        type={internalHandle.type}
        position={internalHandle.position}
        title={`${label} Internal (${internalHandle.type})`}
        style={{
          width: 12,
          height: 12,
          background: internalHandle.color,
          border: '2px solid #ffffff',
          pointerEvents: 'all',
        }}
      />

      <span>{label} Port</span>
    </div>
  );
}