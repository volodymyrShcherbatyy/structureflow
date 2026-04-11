'use client';

import { useState } from 'react';
import { getEdgeLegendItems } from './edgeStyles';

export function EdgeLegend() {
  const [isOpen, setIsOpen] = useState(false);

  const items = getEdgeLegendItems();

  return (
    <div
      style={{
        position: 'absolute',
        top: 50,
        left: 16,
        zIndex: 50,
        pointerEvents: 'auto',
        background: '#ffffff78',
        border: '1px solid #e5e7eb',
        borderRadius: 14,
        padding: 5,
        fontSize: 12,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.06)',
        minWidth: 110,
      }}
    >
      {/* HEADER */}
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
          userSelect: 'none',
        }}
      >
        <strong>Legend</strong>
        <span>{isOpen ? '▼' : '▶'}</span>
      </div>

      {/* CONTENT */}
      {isOpen && (
        <div style={{ marginTop: 8, display: 'grid', gap: 6 }}>
          {items.map((item) => (
            <div
              key={item.type}
              style={{ display: 'flex', alignItems: 'center', gap: 8 }}
            >
              <div
                style={{
                  width: 15,
                  height: 10,
                  background: item.color,
                  borderTop: item.dash ? `2px dashed ${item.color}` : undefined,
                }}
              />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}