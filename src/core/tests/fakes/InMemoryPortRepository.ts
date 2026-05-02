import { IPortRepository } from '../../application/ports/IPortRepository';
import { Port } from '../../domain/entities/Port';
import { NodeId } from '../../domain/value-objects/NodeId';
import { PortId } from '../../domain/value-objects/PortId';
import { ProjectId } from '../../domain/value-objects/ProjectId';

export class InMemoryPortRepository implements IPortRepository {
  public readonly ports = new Map<string, Port>();

  async findById(id: PortId): Promise<Port | null> {
    return this.ports.get(id.toString()) ?? null;
  }

  async findByNode(nodeId: NodeId): Promise<Port[]> {
    return [...this.ports.values()].filter((port) => port.nodeId.equals(nodeId));
  }

  async findAllByProject(projectId: ProjectId): Promise<Port[]> {
    return [...this.ports.values()].filter((port) => port.projectId.equals(projectId));
  }

  async save(port: Port): Promise<void> {
    this.ports.set(port.id.toString(), port);
  }

  async saveMany(ports: Port[]): Promise<void> {
    ports.forEach((port) => {
      this.ports.set(port.id.toString(), port);
    });
  }

  async delete(id: PortId): Promise<void> {
    this.ports.delete(id.toString());
  }

  async deleteByNode(nodeId: NodeId): Promise<void> {
    [...this.ports.values()].forEach((port) => {
      if (port.nodeId.equals(nodeId)) {
        this.ports.delete(port.id.toString());
      }
    });
  }
}