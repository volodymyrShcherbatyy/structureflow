'use client';

import { addFlowchartElementAction } from '../../app/(protected)/project/[id]/actions';
import { useCanvasStore } from '../stores/canvasStore';
import { useScopeStore } from '../stores/scopeStore';

const FLOWCHART_TYPES = [
  { type: 'terminator', label: 'Terminator' },
  { type: 'process', label: 'Process' },
  { type: 'decision', label: 'Decision' },
  { type: 'data', label: 'Data' },
] as const;

export function FlowchartPalette() {
  const addNode = useCanvasStore((state) => state.addNode);
  const projectId = useScopeStore((state) => state.projectId);
  const currentScopeId = useScopeStore((state) => state.currentScopeId);

  const handleCreateElement = async (
    type: (typeof FLOWCHART_TYPES)[number]['type'],
  ) => {
    if (!projectId) {
      return;
    }

    const { element } = await addFlowchartElementAction({
      projectId,
      type,
      x: Math.floor(Math.random() * 260),
      y: Math.floor(Math.random() * 260),
      scopeId: currentScopeId ?? undefined,
    });

    addNode(element);
  };

  return (
    <aside
      style={{
        padding: 12,
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        height: 190,
        minHeight: 190,
        maxHeight: 190,
        borderBottom: '1px solid #e5e7eb',
      }}
    >
      <strong style={{ fontSize: 12, textTransform: 'uppercase' }}>
        Flowchart palette
      </strong>

      <div
        style={{
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          flex: 1,
        }}
      >
        {FLOWCHART_TYPES.map((item) => (
          <button
            key={item.type}
            type="button"
            onClick={() => void handleCreateElement(item.type)}
            style={{
              border: '1px solid #d1d5db',
              background: '#fff',
              borderRadius: 8,
              padding: '8px 10px',
              textAlign: 'left',
              height: 36,
              flexShrink: 0,
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
    </aside>
  );
}