import { NodeNotFoundError } from '../../../domain/errors/NodeNotFoundError';
import { NodeId } from '../../../domain/value-objects/NodeId';
import { Position } from '../../../domain/value-objects/Position';
import { INodeRepository } from '../../ports/INodeRepository';

export type MoveNodeInput = {
  nodeId: string;
  x: number;
  y: number;
};

export type MoveNodeOutput = {
  nodeId: string;
  x: number;
  y: number;
};

export class MoveNode {
  constructor(private readonly nodeRepository: INodeRepository) {}

  public async execute(input: MoveNodeInput): Promise<MoveNodeOutput> {
    const nodeId = NodeId.from(input.nodeId);
    const node = await this.nodeRepository.findById(nodeId);

    if (!node) {
      throw new NodeNotFoundError(nodeId.toString());
    }

    const moved = node.moveTo(Position.from(input.x, input.y));
    await this.nodeRepository.save(moved, node.projectId);

    return {
      nodeId: moved.id.toString(),
      x: moved.position.x,
      y: moved.position.y,
    };
  }
}
