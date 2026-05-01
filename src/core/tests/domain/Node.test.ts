import { describe, expect, it } from 'vitest';
import { Node } from '../../domain/entities/Node';
import { NodeId } from '../../domain/value-objects/NodeId';
import { NodeType } from '../../domain/value-objects/NodeType';
import { Position } from '../../domain/value-objects/Position';
import { ProjectId } from '../../domain/value-objects/ProjectId';

const PROJECT_ID = ProjectId.from('11111111-1111-4111-8111-111111111111');

describe('Node', () => {
  it('nests under valid parent', () => {
    const parent = new Node({
      id: NodeId.create(),
      type: NodeType.from('system'),
      label: 'System',
      position: Position.origin(),
      projectId: PROJECT_ID,
    });

    const child = new Node({
      id: NodeId.create(),
      type: NodeType.from('container'),
      label: 'Container',
      position: Position.origin(),
      projectId: PROJECT_ID,
    });

    const nested = child.nestUnder(parent);

    expect(nested.parentId?.toString()).toBe(parent.id.toString());
  });

  it('throws when nesting is invalid', () => {
    const parent = new Node({
      id: NodeId.create(),
      type: NodeType.from('external'),
      label: 'External',
      position: Position.origin(),
      projectId: PROJECT_ID,
    });

    const child = new Node({
      id: NodeId.create(),
      type: NodeType.from('system'),
      label: 'System',
      position: Position.origin(),
      projectId: PROJECT_ID,
    });

    expect(() => child.nestUnder(parent)).toThrow('Invalid nesting');
  });
});
