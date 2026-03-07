import { NodeNotFoundError } from '../../../domain/errors/NodeNotFoundError';
import { NodeId } from '../../../domain/value-objects/NodeId';
import { INodeRepository } from '../../ports/INodeRepository';

export type NestNodeInput = {
  nodeId: string;
  parentId: string;
};

export type NestNodeOutput = {
  nodeId: string;
  parentId: string;
};

export class NestNode {
  constructor(private readonly nodeRepository: INodeRepository) {}

  public async execute(input: NestNodeInput): Promise<NestNodeOutput> {
    const nodeId = NodeId.from(input.nodeId);
    const parentId = NodeId.from(input.parentId);

    const node = await this.nodeRepository.findById(nodeId);
    if (!node) {
      throw new NodeNotFoundError(nodeId.toString());
    }

    const parent = await this.nodeRepository.findById(parentId);
    if (!parent) {
      throw new NodeNotFoundError(parentId.toString());
    }

    const nested = node.nestUnder(parent);
    await this.nodeRepository.save(nested);

    return {
      nodeId: nested.id.toString(),
      parentId: parent.id.toString(),
    };
  }
}
