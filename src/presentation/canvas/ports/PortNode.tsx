'use client';

import { Handle, Position } from '@xyflow/react';

import { FlowPortData } from '../mappers/portMapper';

type PortNodeProps = {
  id: string;
  data: FlowPortData;
  selected: boolean;
};

const SIDE_LABELS: Record<string, string> = {
  top: 'Top',
  right: 'Right',
  bottom: 'Bottom',
  left: 'Left',
};

export function PortNode({ data, selected }: PortNodeProps) {
  const label = SIDE_LABELS[data.side] ?? data.side;

  return (
    <div
      style={{
        minWidth: 96,
        border: selected ? '2px solid #f97316' : '1px solid #fdba74',
        borderRadius: 999,
        background: '#fff7ed',
        color: '#9a3412',
        padding: '8px 12px',
        fontSize: 12,
        fontWeight: 600,
        textAlign: 'center',
        boxShadow: selected
          ? '0 4px 12px rgba(249,115,22,0.25)'
          : '0 1px 3px rgba(0,0,0,0.08)',
        cursor: 'grab',
        userSelect: 'none',
      }}
      title={`Port: ${label}`}
    >
      <Handle
        id="target"
        type="target"
        position={Position.Left}
        style={{
          width: 8,
          height: 8,
          background: '#f97316',
          pointerEvents: 'all',
        }}
      />

      <span>{label} Port</span>

      <Handle
        id="source"
        type="source"
        position={Position.Right}
        style={{
          width: 8,
          height: 8,
          background: '#f97316',
          pointerEvents: 'all',
        }}
      />
    </div>
  );
}