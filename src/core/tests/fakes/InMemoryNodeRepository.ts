import { INodeRepository } from '../../application/ports/INodeRepository';
import { Node } from '../../domain/entities/Node';
import { NodeId } from '../../domain/value-objects/NodeId';
import { ProjectId } from '../../domain/value-objects/ProjectId';

export class InMemoryNodeRepository implements INodeRepository {
  private readonly nodes = new Map<string, Node>();

  public async findById(id: NodeId): Promise<Node | null> {
    return this.nodes.get(id.toString()) ?? null;
  }

  public async findAllByProject(_projectId: ProjectId): Promise<Node[]> {
    return [...this.nodes.values()];
  }

  public async save(node: Node): Promise<void> {
    this.nodes.set(node.id.toString(), node);
  }

  public async saveMany(nodes: Node[]): Promise<void> {
    for (const node of nodes) {
      this.nodes.set(node.id.toString(), node);
    }
  }

  public async delete(id: NodeId): Promise<void> {
    this.nodes.delete(id.toString());
  }
}
