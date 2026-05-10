import { IFlowchartConnectionRepository } from '../../application/ports/IFlowchartConnectionRepository';
import { FlowchartConnection } from '../../domain/entities/FlowchartConnection';
import { FlowchartConnectionId } from '../../domain/value-objects/FlowchartConnectionId';
import { ProjectId } from '../../domain/value-objects/ProjectId';

export class InMemoryFlowchartConnectionRepository
  implements IFlowchartConnectionRepository
{
  public readonly connections = new Map<string, FlowchartConnection>();

  async findById(
    id: FlowchartConnectionId,
  ): Promise<FlowchartConnection | null> {
    return this.connections.get(id.toString()) ?? null;
  }

  async findAllByProject(projectId: ProjectId): Promise<FlowchartConnection[]> {
    return [...this.connections.values()].filter((connection) =>
      connection.projectId.equals(projectId),
    );
  }

  async save(connection: FlowchartConnection): Promise<void> {
    this.connections.set(connection.id.toString(), connection);
  }

  async delete(id: FlowchartConnectionId): Promise<void> {
    this.connections.delete(id.toString());
  }
}