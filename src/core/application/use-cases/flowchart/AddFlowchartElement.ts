import { FlowchartElement } from '../../../domain/entities/FlowchartElement';
import { ProjectNotFoundError } from '../../../domain/errors/ProjectNotFoundError';
import { FlowchartElementId } from '../../../domain/value-objects/FlowchartElementId';
import { FlowchartElementType } from '../../../domain/value-objects/FlowchartElementType';
import { NodeId } from '../../../domain/value-objects/NodeId';
import { Position } from '../../../domain/value-objects/Position';
import { ProjectId } from '../../../domain/value-objects/ProjectId';
import { Size } from '../../../domain/value-objects/Size';
import { IFlowchartElementRepository } from '../../ports/IFlowchartElementRepository';
import { IProjectRepository } from '../../ports/IProjectRepository';

export type AddFlowchartElementInput = {
  projectId: string;
  type: string;
  label?: string;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  scopeId?: string;
};

export type AddFlowchartElementOutput = {
  element: FlowchartElement;
};

export class AddFlowchartElement {
  constructor(
    private readonly projectRepository: IProjectRepository,
    private readonly flowchartElementRepository: IFlowchartElementRepository,
  ) {}

  public async execute(input: AddFlowchartElementInput): Promise<AddFlowchartElementOutput> {
    const projectId = ProjectId.from(input.projectId);
    const project = await this.projectRepository.findById(projectId);

    if (!project) {
      throw new ProjectNotFoundError(projectId.toString());
    }

    const type = FlowchartElementType.from(input.type);
    const size =
      input.width !== undefined && input.height !== undefined
        ? Size.from(input.width, input.height)
        : Size.defaultForFlowchartElement();

    const element = new FlowchartElement({
      id: FlowchartElementId.create(),
      projectId,
      type,
      label: input.label ?? FlowchartElementType.getDefaultLabel(type),
      position: Position.from(input.x ?? 0, input.y ?? 0),
      size,
      scopeId: input.scopeId ? NodeId.from(input.scopeId) : undefined,
    });

    await this.flowchartElementRepository.save(element);

    return { element };
  }
}