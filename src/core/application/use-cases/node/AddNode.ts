import { Node } from '../../../domain/entities/Node';
import { ProjectNotFoundError } from '../../../domain/errors/ProjectNotFoundError';
import { NodeId } from '../../../domain/value-objects/NodeId';
import { NodeType } from '../../../domain/value-objects/NodeType';
import { Position } from '../../../domain/value-objects/Position';
import { ProjectId } from '../../../domain/value-objects/ProjectId';
import { INodeRepository } from '../../ports/INodeRepository';
import { IProjectRepository } from '../../ports/IProjectRepository';

export type AddNodeInput = {
  projectId: string;
  type: string;
  label: string;
  description?: string;
  x?: number;
  y?: number;
};

export type AddNodeOutput = {
  node: Node;
};

export class AddNode {
  constructor(
    private readonly projectRepository: IProjectRepository,
    private readonly nodeRepository: INodeRepository,
  ) {}

  public async execute(input: AddNodeInput): Promise<AddNodeOutput> {
    const projectId = ProjectId.from(input.projectId);
    const project = await this.projectRepository.findById(projectId);

    if (!project) {
      throw new ProjectNotFoundError(projectId.toString());
    }

    const node = new Node({
      id: NodeId.create(),
      type: NodeType.from(input.type),
      label: input.label,
      description: input.description,
      position: Position.from(input.x ?? 0, input.y ?? 0),
    });

    await this.nodeRepository.save(node);

    return { node };
  }
}
