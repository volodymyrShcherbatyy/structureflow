import { Port } from '../../domain/entities/Port';
import { NodeId } from '../../domain/value-objects/NodeId';
import { PortId } from '../../domain/value-objects/PortId';
import { ProjectId } from '../../domain/value-objects/ProjectId';

export interface IPortRepository {
  findById(id: PortId): Promise<Port | null>;
  findByNode(nodeId: NodeId): Promise<Port[]>;
  findAllByProject(projectId: ProjectId): Promise<Port[]>;
  save(port: Port): Promise<void>;
  saveMany(ports: Port[]): Promise<void>;
  delete(id: PortId): Promise<void>;
  deleteByNode(nodeId: NodeId): Promise<void>;
}