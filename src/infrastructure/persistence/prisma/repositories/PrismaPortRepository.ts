import { PrismaDatabaseClient } from '../PrismaDatabaseClient';

import { IPortRepository } from '../../../../core/application/ports/IPortRepository';
import { Port } from '../../../../core/domain/entities/Port';
import { NodeId } from '../../../../core/domain/value-objects/NodeId';
import { PortId } from '../../../../core/domain/value-objects/PortId';
import { ProjectId } from '../../../../core/domain/value-objects/ProjectId';
import { PortMapper } from '../mappers/PortMapper';

export class PrismaPortRepository implements IPortRepository {
  constructor(private readonly prisma: PrismaDatabaseClient) {}

  async findById(id: PortId): Promise<Port | null> {
    const record = await this.prisma.port.findUnique({
      where: { id: id.toString() },
    });

    return record ? PortMapper.toDomain(record) : null;
  }

  async findByNode(nodeId: NodeId): Promise<Port[]> {
    const records = await this.prisma.port.findMany({
      where: { nodeId: nodeId.toString() },
      orderBy: { createdAt: 'asc' },
    });

    return records.map((record) => PortMapper.toDomain(record));
  }

  async findAllByProject(projectId: ProjectId): Promise<Port[]> {
    const records = await this.prisma.port.findMany({
      where: { projectId: projectId.toString() },
      orderBy: { createdAt: 'asc' },
    });

    return records.map((record) => PortMapper.toDomain(record));
  }

  async save(port: Port): Promise<void> {
    await this.prisma.port.upsert({
      where: { id: port.id.toString() },
      create: PortMapper.toPrismaCreate(port),
      update: PortMapper.toPrismaUpdate(port),
    });
  }

  async saveMany(ports: Port[]): Promise<void> {
    for (const port of ports) {
      await this.prisma.port.upsert({
        where: { id: port.id.toString() },
        create: PortMapper.toPrismaCreate(port),
        update: PortMapper.toPrismaUpdate(port),
      });
    }
  }

  async delete(id: PortId): Promise<void> {
    await this.prisma.port.delete({
      where: { id: id.toString() },
    });
  }

  async deleteByNode(nodeId: NodeId): Promise<void> {
    await this.prisma.port.deleteMany({
      where: { nodeId: nodeId.toString() },
    });
  }
}