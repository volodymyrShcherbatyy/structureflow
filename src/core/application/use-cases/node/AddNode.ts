import { Node } from '../../../domain/entities/Node';
import { Port } from '../../../domain/entities/Port';
import { ProjectNotFoundError } from '../../../domain/errors/ProjectNotFoundError';
import { NodeId } from '../../../domain/value-objects/NodeId';
import { NodeType } from '../../../domain/value-objects/NodeType';
import { PortSide } from '../../../domain/value-objects/PortSide';
import { Position } from '../../../domain/value-objects/Position';
import { ProjectId } from '../../../domain/value-objects/ProjectId';
import { INodeRepository } from '../../ports/INodeRepository';
import { IPortRepository } from '../../ports/IPortRepository';
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
  ports: Port[];
};

export class AddNode {
  constructor(
    private readonly projectRepository: IProjectRepository,
    private readonly nodeRepository: INodeRepository,
    private readonly portRepository: IPortRepository,
  ) {}

  public async execute(input: AddNodeInput): Promise<AddNodeOutput> {
    const projectId = ProjectId.from(input.projectId);
    const project = await this.projectRepository.findById(projectId);

    if (!project) {
      throw new ProjectNotFoundError(projectId.toString());
    }

    const node = new Node({
      projectId,
      id: NodeId.create(),
      type: NodeType.from(input.type),
      label: input.label,
      description: input.description,
      position: Position.from(input.x ?? 0, input.y ?? 0),
    });

    const defaultPortPositions: Record<string, Position> = {
      top: Position.from(400, 40),
      right: Position.from(960, 300),
      bottom: Position.from(400, 560),
      left: Position.from(-160, 300),
    };

    const ports = PortSide.all().map((side) =>
      Port.createDefaultForNode({
        nodeId: node.id,
        projectId,
        side,
        position: defaultPortPositions[side.toString()] ?? Position.origin(),
      }),
    );

    await this.nodeRepository.save(node);
    await this.portRepository.saveMany(ports);

    return { node, ports };
  }
}