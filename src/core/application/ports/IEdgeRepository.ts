import { Edge } from '../../domain/entities/Edge';
import { EdgeId } from '../../domain/value-objects/EdgeId';
import { NodeId } from '../../domain/value-objects/NodeId';
import { ProjectId } from '../../domain/value-objects/ProjectId';

export interface IEdgeRepository {
  findById(id: EdgeId): Promise<Edge | null>;
  findByNode(nodeId: NodeId): Promise<Edge[]>;
  findAllByProject(projectId: ProjectId): Promise<Edge[]>;
  save(edge: Edge): Promise<void>;
  delete(id: EdgeId): Promise<void>;
}