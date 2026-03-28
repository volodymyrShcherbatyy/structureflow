import { Node } from '../../domain/entities/Node';
import { NodeId } from '../../domain/value-objects/NodeId';
import { ProjectId } from '../../domain/value-objects/ProjectId';

export interface INodeRepository {
  findById(id: NodeId): Promise<Node | null>;
  findAllByProject(projectId: ProjectId): Promise<Node[]>;
  save(node: Node, projectId: ProjectId): Promise<void>;
  saveMany(nodes: Node[], projectId: ProjectId): Promise<void>;
  delete(id: NodeId): Promise<void>;
}
