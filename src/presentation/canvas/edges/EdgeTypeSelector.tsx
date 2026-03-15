'use client';

const EDGE_TYPES = ['dependency', 'data-flow', 'navigation', 'api'] as const;

type EdgeTypeSelectorProps = {
  onSelect: (edgeType: string) => void;
  onCancel: () => void;
};

export function EdgeTypeSelector({ onSelect, onCancel }: EdgeTypeSelectorProps) {
  return (
    <div
      style={{
        position: 'absolute',
        top: 16,
        right: 16,
        zIndex: 30,
        border: '1px solid #e5e7eb',
        background: '#ffffff',
        borderRadius: 10,
        padding: 12,
        minWidth: 180,
        display: 'grid',
        gap: 8,
        boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
      }}
    >
      <strong style={{ fontSize: 12, textTransform: 'uppercase' }}>Select edge type</strong>
      {EDGE_TYPES.map((edgeType) => (
        <button
          key={edgeType}
          type="button"
          onClick={() => onSelect(edgeType)}
          style={{
            padding: '6px 10px',
            borderRadius: 8,
            border: '1px solid #d1d5db',
            background: '#fff',
            textAlign: 'left',
          }}
        >
          {edgeType}
        </button>
      ))}
      <button
        type="button"
        onClick={onCancel}
        style={{
          marginTop: 6,
          padding: '6px 10px',
          borderRadius: 8,
          border: '1px solid #e5e7eb',
          background: '#f9fafb',
        }}
      >
        Cancel
      </button>
    </div>
  );
}
