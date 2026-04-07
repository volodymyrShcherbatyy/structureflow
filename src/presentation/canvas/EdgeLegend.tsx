'use client';

import { useState } from 'react';

export function EdgeLegend() {
  const [isOpen, setIsOpen] = useState(false);

  const items = [
    { type: 'dependency', color: '#6b7280', label: 'Dependency' },
    { type: 'data-flow', color: '#2563eb', label: 'Data Flow' },
    { type: 'navigation', color: '#7c3aed', label: 'Navigation' },
    { type: 'api', color: '#dc2626', label: 'API' },

    { type: 'call', color: '#059669', label: 'Call' },
    { type: 'state', color: '#f59e0b', label: 'State / Reactive' },
    { type: 'persist', color: '#0ea5e9', label: 'Persistence' },
    { type: 'transform', color: '#9333ea', label: 'Transform' },
  ];

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