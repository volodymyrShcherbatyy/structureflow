import { NodeNotFoundError } from '../../../domain/errors/NodeNotFoundError';
import { NodeId } from '../../../domain/value-objects/NodeId';
import { INodeRepository } from '../../ports/INodeRepository';

export type RenameNodeInput = {
  nodeId: string;
  label: string;
};

export type RenameNodeOutput = {
  nodeId: string;
  label: string;
};

export class RenameNode {
  constructor(private readonly nodeRepository: INodeRepository) {}

  public async execute(input: RenameNodeInput): Promise<RenameNodeOutput> {
    const nodeId = NodeId.from(input.nodeId);
    const node = await this.nodeRepository.findById(nodeId);

    if (!node) {
      throw new NodeNotFoundError(nodeId.toString());
    }

    const renamed = node.rename(input.label);
    await this.nodeRepository.save(renamed);

    return {
      nodeId: renamed.id.toString(),
      label: renamed.label,
    };
  }
}
