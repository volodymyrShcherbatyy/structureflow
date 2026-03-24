'use client';

import { addNodeAction } from '../../app/(protected)/project/[id]/actions';
import { useCanvasStore } from '../stores/canvasStore';
import { useScopeStore } from '../stores/scopeStore';

const NODE_TYPES = ['system', 'container', 'component', 'page', 'external'] as const;

export function NodePalette() {
  const addNode = useCanvasStore((state) => state.addNode);
  const projectId = useScopeStore((state) => state.projectId);
  const currentScopeId = useScopeStore((state) => state.currentScopeId);

  const handleCreateNode = async (type: (typeof NODE_TYPES)[number]) => {
    if (!projectId) {
      return;
    }

    const { node } = await addNodeAction({
      projectId,
      type,
      label: `${type} node`,
      description: '',
      x: Math.floor(Math.random() * 260),
      y: Math.floor(Math.random() * 260),
      parentId: currentScopeId ?? undefined,
    });

    addNode(node);
  };

  return (
    <aside
      style={{
        width: 220,
        borderRight: '1px solid #e5e7eb',
        padding: 12,
        display: 'grid',
        gap: 8,
      }}
    >
      <strong style={{ fontSize: 12, textTransform: 'uppercase' }}>Node palette</strong>
      {NODE_TYPES.map((type) => (
        <button
          key={type}
          type="button"
          onClick={() => void handleCreateNode(type)}
          style={{
            border: '1px solid #d1d5db',
            background: '#fff',
            borderRadius: 8,
            padding: '8px 10px',
            textAlign: 'left',
          }}
        >
          {type[0].toUpperCase() + type.slice(1)}
        </button>
      ))}
    </aside>
  );
}
