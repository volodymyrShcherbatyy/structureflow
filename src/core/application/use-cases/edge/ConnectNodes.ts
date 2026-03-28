import { Edge } from '../../../domain/entities/Edge';
import { NodeNotFoundError } from '../../../domain/errors/NodeNotFoundError';
import { EdgeId } from '../../../domain/value-objects/EdgeId';
import { EdgeType } from '../../../domain/value-objects/EdgeType';
import { NodeId } from '../../../domain/value-objects/NodeId';
import { IEdgeRepository } from '../../ports/IEdgeRepository';
import { INodeRepository } from '../../ports/INodeRepository';

export type ConnectNodesInput = {
  sourceId: string;
  targetId: string;
  type: string;
  label?: string;
};

export type ConnectNodesOutput = {
  edge: Edge;
};

export class ConnectNodes {
  constructor(
    private readonly nodeRepository: INodeRepository,
    private readonly edgeRepository: IEdgeRepository,
  ) {}

  public async execute(input: ConnectNodesInput): Promise<ConnectNodesOutput> {
    const sourceId = NodeId.from(input.sourceId);
    const targetId = NodeId.from(input.targetId);

    const source = await this.nodeRepository.findById(sourceId);
    if (!source) {
      throw new NodeNotFoundError(sourceId.toString());
    }

    const target = await this.nodeRepository.findById(targetId);
    if (!target) {
      throw new NodeNotFoundError(targetId.toString());
    }

    const edge = new Edge({
      id: EdgeId.create(),
      type: EdgeType.from(input.type),
      sourceId,
      targetId,
      projectId: source.projectId, // 🔥 КЛЮЧОВЕ
      label: input.label,
    });

    await this.edgeRepository.save(edge);

    return { edge };
  }
}
