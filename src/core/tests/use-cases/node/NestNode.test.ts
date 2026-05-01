import { describe, expect, it } from 'vitest';
import { NestNode } from '../../../application/use-cases/node/NestNode';
import { Node } from '../../../domain/entities/Node';
import { NodeId } from '../../../domain/value-objects/NodeId';
import { NodeType } from '../../../domain/value-objects/NodeType';
import { Position } from '../../../domain/value-objects/Position';
import { InMemoryNodeRepository } from '../../fakes/InMemoryNodeRepository';
import { ProjectId } from '../../../domain/value-objects/ProjectId';

const PROJECT_ID = ProjectId.from('11111111-1111-4111-8111-111111111111');

describe('NestNode', () => {
  it('nests child under parent when hierarchy is valid', async () => {
    const repository = new InMemoryNodeRepository();

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

    await repository.save(parent);
    await repository.save(child);

    const useCase = new NestNode(repository);
    const output = await useCase.execute({
      nodeId: child.id.toString(),
      parentId: parent.id.toString(),
    });

    expect(output.parentId).toBe(parent.id.toString());
  });

  it('fails on invalid nesting', async () => {
    const repository = new InMemoryNodeRepository();

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

    await repository.save(parent);
    await repository.save(child);

    const useCase = new NestNode(repository);

    await expect(
      useCase.execute({
        nodeId: child.id.toString(),
        parentId: parent.id.toString(),
      }),
    ).rejects.toThrow('Invalid nesting');
  });
});
