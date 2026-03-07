import { IEdgeRepository } from '../../application/ports/IEdgeRepository';
import { Edge } from '../../domain/entities/Edge';
import { EdgeId } from '../../domain/value-objects/EdgeId';
import { NodeId } from '../../domain/value-objects/NodeId';

export class InMemoryEdgeRepository implements IEdgeRepository {
  private readonly edges = new Map<string, Edge>();

  public async findById(id: EdgeId): Promise<Edge | null> {
    return this.edges.get(id.toString()) ?? null;
  }

  public async findByNode(nodeId: NodeId): Promise<Edge[]> {
    return [...this.edges.values()].filter((edge) => edge.connectsNode(nodeId));
  }

  public async save(edge: Edge): Promise<void> {
    this.edges.set(edge.id.toString(), edge);
  }

  public async delete(id: EdgeId): Promise<void> {
    this.edges.delete(id.toString());
  }
}
