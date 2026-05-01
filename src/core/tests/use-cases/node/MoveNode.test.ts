import { describe, expect, it } from 'vitest';
import { MoveNode } from '../../../application/use-cases/node/MoveNode';
import { Node } from '../../../domain/entities/Node';
import { NodeId } from '../../../domain/value-objects/NodeId';
import { NodeType } from '../../../domain/value-objects/NodeType';
import { Position } from '../../../domain/value-objects/Position';
import { InMemoryNodeRepository } from '../../fakes/InMemoryNodeRepository';
import { ProjectId } from '../../../domain/value-objects/ProjectId';

const PROJECT_ID = ProjectId.from('11111111-1111-4111-8111-111111111111');

describe('MoveNode', () => {
  it('moves an existing node', async () => {
    const repository = new InMemoryNodeRepository();
    const node = new Node({
      id: NodeId.create(),
      type: NodeType.from('system'),
      label: 'System',
      position: Position.origin(),
      projectId: PROJECT_ID,
    });
    await repository.save(node);

    const useCase = new MoveNode(repository);
    const output = await useCase.execute({
      nodeId: node.id.toString(),
      x: 100,
      y: 200,
    });

    expect(output.x).toBe(100);
    expect(output.y).toBe(200);
  });

  it('fails when node is not found', async () => {
    const useCase = new MoveNode(new InMemoryNodeRepository());

    await expect(
      useCase.execute({
        nodeId: NodeId.create().toString(),
        x: 10,
        y: 20,
      }),
    ).rejects.toThrow('Node not found');
  });
});
