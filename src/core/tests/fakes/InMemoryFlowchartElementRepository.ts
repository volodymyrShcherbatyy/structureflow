import { IFlowchartElementRepository } from '../../application/ports/IFlowchartElementRepository';
import { FlowchartElement } from '../../domain/entities/FlowchartElement';
import { FlowchartElementId } from '../../domain/value-objects/FlowchartElementId';
import { ProjectId } from '../../domain/value-objects/ProjectId';

export class InMemoryFlowchartElementRepository implements IFlowchartElementRepository {
  public readonly elements = new Map<string, FlowchartElement>();

  async findById(id: FlowchartElementId): Promise<FlowchartElement | null> {
    return this.elements.get(id.toString()) ?? null;
  }

  async findAllByProject(projectId: ProjectId): Promise<FlowchartElement[]> {
    return [...this.elements.values()].filter((element) =>
      element.projectId.equals(projectId),
    );
  }

  async save(element: FlowchartElement): Promise<void> {
    this.elements.set(element.id.toString(), element);
  }

  async delete(id: FlowchartElementId): Promise<void> {
    this.elements.delete(id.toString());
  }
}