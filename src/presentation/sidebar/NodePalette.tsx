'use client';

import { Node as CoreNode } from '../../core/domain/entities/Node';
import { NodeId } from '../../core/domain/value-objects/NodeId';
import { NodeType } from '../../core/domain/value-objects/NodeType';
import { Position } from '../../core/domain/value-objects/Position';
import { coreNodeToFlow } from '../canvas/mappers/nodeMapper';
import { useCanvasStore } from '../stores/canvasStore';
import { useScopeStore } from '../stores/scopeStore';

const NODE_TYPES = ['system', 'container', 'component', 'page', 'external'] as const;

export function NodePalette() {
  const addNode = useCanvasStore((state) => state.addNode);
  const projectId = useScopeStore((state) => state.projectId);
  const currentScopeId = useScopeStore((state) => state.currentScopeId);

  const handleCreateNode = (type: (typeof NODE_TYPES)[number]) => {
    if (!projectId) {
      return;
    }

    const coreNode = new CoreNode({
      id: NodeId.create(),
      type: NodeType.from(type),
      label: `${type} node`,
      description: '',
      position: Position.from(Math.floor(Math.random() * 260), Math.floor(Math.random() * 260)),
      parentId: currentScopeId ? NodeId.from(currentScopeId) : undefined,
    });

    addNode(coreNodeToFlow(coreNode, projectId));
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
          onClick={() => handleCreateNode(type)}
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
