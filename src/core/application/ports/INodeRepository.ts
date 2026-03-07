import { Node } from '../../domain/entities/Node';
import { NodeId } from '../../domain/value-objects/NodeId';
import { ProjectId } from '../../domain/value-objects/ProjectId';

export interface INodeRepository {
  findById(id: NodeId): Promise<Node | null>;
  findAllByProject(projectId: ProjectId): Promise<Node[]>;
  save(node: Node): Promise<void>;
  saveMany(nodes: Node[]): Promise<void>;
  delete(id: NodeId): Promise<void>;
}
