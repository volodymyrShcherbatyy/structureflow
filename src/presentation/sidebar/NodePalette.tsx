'use client';

import { addNodeAction } from '../../app/(protected)/project/[id]/actions';
import { useCanvasStore } from '../stores/canvasStore';
import { useScopeStore } from '../stores/scopeStore';

const NODE_TYPES = ['system', 'container', 'component', 'page', 'external'] as const;

export function NodePalette() {
  const addNode = useCanvasStore((state) => state.addNode);
  const projectId = useScopeStore((state) => state.projectId);
  const currentScopeId = useScopeStore((state) => state.currentScopeId);

  const nodes = useCanvasStore((state) => state.nodes);

  const parentNode = currentScopeId
    ? nodes.find((n) => n.id === currentScopeId)
    : null;

  const parentType = parentNode?.data.nodeType ?? null;

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

  const ALLOWED_CHILDREN: Record<string, string[]> = {
  system: ['container', 'component', 'page', 'external'],
  container: ['component', 'page', 'external'],
  component: ['page', 'external'],
  page: ['external'],
  external: [],
};

  const allowedTypes = parentType ? ALLOWED_CHILDREN[parentType] ?? [] : ['system']; // root level

  return (
    <aside
      style={{
        padding: 12,
        display: 'grid',
        gap: 8,
      }}
    >
      <strong style={{ fontSize: 12, textTransform: 'uppercase' }}>Node palette</strong>
      {allowedTypes.map((type) => {
        const typed = type as (typeof NODE_TYPES)[number];

        return (
          <button
            key={type}
            type="button"
            onClick={() => void handleCreateNode(typed)}
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
        );
      })}

      {allowedTypes.length === 0 && (
        <p style={{ fontSize: 12, color: '#9ca3af' }}>
          This node cannot contain children
        </p>
      )}

    </aside>
  );
}
