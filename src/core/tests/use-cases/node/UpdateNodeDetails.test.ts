import { describe, expect, it } from 'vitest';

import {
  NODE_DESCRIPTION_MAX_LENGTH,
  NODE_LABEL_MAX_LENGTH,
  UpdateNodeDetails,
} from '../../../application/use-cases/node/UpdateNodeDetails';
import { Node } from '../../../domain/entities/Node';
import { NodeId } from '../../../domain/value-objects/NodeId';
import { NodeType } from '../../../domain/value-objects/NodeType';
import { Position } from '../../../domain/value-objects/Position';
import { ProjectId } from '../../../domain/value-objects/ProjectId';
import { InMemoryNodeRepository } from '../../fakes/InMemoryNodeRepository';

const PROJECT_ID = ProjectId.from('11111111-1111-4111-8111-111111111111');

describe('UpdateNodeDetails', () => {
  it('updates node label and description', async () => {
    const nodeRepository = new InMemoryNodeRepository();
    const node = new Node({
      id: NodeId.create(),
      type: NodeType.from('component'),
      label: 'Old label',
      description: 'Old description',
      position: Position.origin(),
      projectId: PROJECT_ID,
    });

    await nodeRepository.save(node);

    const useCase = new UpdateNodeDetails(nodeRepository);

    const result = await useCase.execute({
      nodeId: node.id.toString(),
      label: 'New label',
      description: 'New description',
    });

    expect(result.label).toBe('New label');
    expect(result.description).toBe('New description');

    const saved = await nodeRepository.findById(node.id);
    expect(saved?.label).toBe('New label');
    expect(saved?.description).toBe('New description');
  });

  it('rejects too long label', async () => {
    const nodeRepository = new InMemoryNodeRepository();
    const node = new Node({
      id: NodeId.create(),
      type: NodeType.from('component'),
      label: 'Label',
      position: Position.origin(),
      projectId: PROJECT_ID,
    });

    await nodeRepository.save(node);

    const useCase = new UpdateNodeDetails(nodeRepository);

    await expect(
      useCase.execute({
        nodeId: node.id.toString(),
        label: 'x'.repeat(NODE_LABEL_MAX_LENGTH + 1),
      }),
    ).rejects.toThrow('Node label cannot be longer than 80 characters');
  });

  it('rejects too long description', async () => {
    const nodeRepository = new InMemoryNodeRepository();
    const node = new Node({
      id: NodeId.create(),
      type: NodeType.from('component'),
      label: 'Label',
      position: Position.origin(),
      projectId: PROJECT_ID,
    });

    await nodeRepository.save(node);

    const useCase = new UpdateNodeDetails(nodeRepository);

    await expect(
      useCase.execute({
        nodeId: node.id.toString(),
        description: 'x'.repeat(NODE_DESCRIPTION_MAX_LENGTH + 1),
      }),
    ).rejects.toThrow('Node description cannot be longer than 500 characters');
  });

  it('fails when node does not exist', async () => {
    const nodeRepository = new InMemoryNodeRepository();
    const useCase = new UpdateNodeDetails(nodeRepository);

    await expect(
      useCase.execute({
        nodeId: NodeId.create().toString(),
        label: 'Missing',
      }),
    ).rejects.toThrow('Node not found');
  });
});