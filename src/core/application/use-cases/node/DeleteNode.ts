import { NodeNotFoundError } from '../../../domain/errors/NodeNotFoundError';
import { NodeId } from '../../../domain/value-objects/NodeId';
import { IEdgeRepository } from '../../ports/IEdgeRepository';
import { INodeRepository } from '../../ports/INodeRepository';

export type DeleteNodeInput = {
  nodeId: string;
};

export type DeleteNodeOutput = {
  deleted: true;
};

export class DeleteNode {
  constructor(
    private readonly nodeRepository: INodeRepository,
    private readonly edgeRepository?: IEdgeRepository,
  ) {}

  public async execute(input: DeleteNodeInput): Promise<DeleteNodeOutput> {
    const nodeId = NodeId.from(input.nodeId);
    const existing = await this.nodeRepository.findById(nodeId);

    if (!existing) {
      throw new NodeNotFoundError(nodeId.toString());
    }

    if (this.edgeRepository) {
      const connectedEdges = await this.edgeRepository.findByNode(nodeId);
      await Promise.all(connectedEdges.map((edge) => this.edgeRepository!.delete(edge.id)));
    }

    await this.nodeRepository.delete(nodeId);

    return { deleted: true };
  }
}
