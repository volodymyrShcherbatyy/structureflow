import { FlowchartConnection } from '../../domain/entities/FlowchartConnection';
import { FlowchartConnectionId } from '../../domain/value-objects/FlowchartConnectionId';
import { ProjectId } from '../../domain/value-objects/ProjectId';

export interface IFlowchartConnectionRepository {
  findById(id: FlowchartConnectionId): Promise<FlowchartConnection | null>;
  findAllByProject(projectId: ProjectId): Promise<FlowchartConnection[]>;
  save(connection: FlowchartConnection): Promise<void>;
  delete(id: FlowchartConnectionId): Promise<void>;

  deleteByEndpoint(kind: string, id: string): Promise<void>;
  deleteByEndpoints(endpoints: Array<{ kind: string; id: string }>): Promise<void>;
}