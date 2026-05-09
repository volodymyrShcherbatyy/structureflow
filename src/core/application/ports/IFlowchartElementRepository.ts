import { FlowchartElement } from '../../domain/entities/FlowchartElement';
import { FlowchartElementId } from '../../domain/value-objects/FlowchartElementId';
import { ProjectId } from '../../domain/value-objects/ProjectId';

export interface IFlowchartElementRepository {
  findById(id: FlowchartElementId): Promise<FlowchartElement | null>;
  findAllByProject(projectId: ProjectId): Promise<FlowchartElement[]>;
  save(element: FlowchartElement): Promise<void>;
  delete(id: FlowchartElementId): Promise<void>;
}