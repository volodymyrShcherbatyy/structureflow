import { NodeNotFoundError } from '../../../domain/errors/NodeNotFoundError';
import { NodeId } from '../../../domain/value-objects/NodeId';
import { IEdgeRepository } from '../../ports/IEdgeRepository';
import { INodeRepository } from '../../ports/INodeRepository';
import { IPortRepository } from '../../ports/IPortRepository';
import { IFlowchartConnectionRepository } from '../../ports/IFlowchartConnectionRepository';

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
    private readonly portRepository?: IPortRepository,
    private readonly flowchartConnectionRepository?: IFlowchartConnectionRepository,
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

    const endpointsToDelete: Array<{ kind: string; id: string }> = [
      { kind: 'node', id: nodeId.toString() },
    ];

    if (this.portRepository) {
      const ports = await this.portRepository.findByNode(nodeId);

      ports.forEach((port) => {
        endpointsToDelete.push({
          kind: 'port',
          id: port.id.toString(),
        });
      });
    }

    await this.flowchartConnectionRepository?.deleteByEndpoints(endpointsToDelete);

    await this.nodeRepository.delete(nodeId);

    return { deleted: true };
  }
}
