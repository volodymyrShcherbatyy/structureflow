import { describe, expect, it } from 'vitest';
import { ConnectNodes } from '../../../application/use-cases/edge/ConnectNodes';
import { Node } from '../../../domain/entities/Node';
import { NodeId } from '../../../domain/value-objects/NodeId';
import { NodeType } from '../../../domain/value-objects/NodeType';
import { Position } from '../../../domain/value-objects/Position';
import { InMemoryEdgeRepository } from '../../fakes/InMemoryEdgeRepository';
import { InMemoryNodeRepository } from '../../fakes/InMemoryNodeRepository';

describe('ConnectNodes', () => {
  it('connects two existing nodes', async () => {
    const nodeRepository = new InMemoryNodeRepository();
    const edgeRepository = new InMemoryEdgeRepository();

    const source = new Node({
      id: NodeId.create(),
      type: NodeType.from('container'),
      label: 'A',
      position: Position.origin(),
    });
    const target = new Node({
      id: NodeId.create(),
      type: NodeType.from('component'),
      label: 'B',
      position: Position.origin(),
    });

    await nodeRepository.saveMany([source, target]);

    const useCase = new ConnectNodes(nodeRepository, edgeRepository);
    const output = await useCase.execute({
      sourceId: source.id.toString(),
      targetId: target.id.toString(),
      type: 'dependency',
    });

    expect(output.edge.sourceId.toString()).toBe(source.id.toString());
    expect(output.edge.targetId.toString()).toBe(target.id.toString());
  });

  it('fails when connecting node to itself', async () => {
    const nodeRepository = new InMemoryNodeRepository();
    const edgeRepository = new InMemoryEdgeRepository();

    const node = new Node({
      id: NodeId.create(),
      type: NodeType.from('container'),
      label: 'A',
      position: Position.origin(),
    });
    await nodeRepository.save(node);

    const useCase = new ConnectNodes(nodeRepository, edgeRepository);

    await expect(
      useCase.execute({
        sourceId: node.id.toString(),
        targetId: node.id.toString(),
        type: 'dependency',
      }),
    ).rejects.toThrow('cannot connect node to itself');
  });
});
