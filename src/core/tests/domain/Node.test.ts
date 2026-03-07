import { describe, expect, it } from 'vitest';
import { Node } from '../../domain/entities/Node';
import { NodeId } from '../../domain/value-objects/NodeId';
import { NodeType } from '../../domain/value-objects/NodeType';
import { Position } from '../../domain/value-objects/Position';

describe('Node', () => {
  it('nests under valid parent', () => {
    const parent = new Node({
      id: NodeId.create(),
      type: NodeType.from('system'),
      label: 'System',
      position: Position.origin(),
    });

    const child = new Node({
      id: NodeId.create(),
      type: NodeType.from('container'),
      label: 'Frontend',
      position: Position.origin(),
    });

    const nested = child.nestUnder(parent);

    expect(nested.parentId?.toString()).toBe(parent.id.toString());
  });

  it('throws when nesting is invalid', () => {
    const parent = new Node({
      id: NodeId.create(),
      type: NodeType.from('component'),
      label: 'Component',
      position: Position.origin(),
    });

    const child = new Node({
      id: NodeId.create(),
      type: NodeType.from('container'),
      label: 'Container',
      position: Position.origin(),
    });

    expect(() => child.nestUnder(parent)).toThrow('Invalid nesting');
  });
});
