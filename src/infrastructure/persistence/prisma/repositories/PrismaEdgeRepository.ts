import { PrismaClient } from '@prisma/client';
import { IEdgeRepository } from '../../../../core/application/ports/IEdgeRepository';
import { Edge } from '../../../../core/domain/entities/Edge';
import { EdgeId } from '../../../../core/domain/value-objects/EdgeId';
import { NodeId } from '../../../../core/domain/value-objects/NodeId';
import { ProjectId } from '../../../../core/domain/value-objects/ProjectId';
import { EdgeMapper } from '../mappers/EdgeMapper';

export class PrismaEdgeRepository implements IEdgeRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async findById(id: EdgeId): Promise<Edge | null> {
    const record = await this.prisma.edge.findUnique({
      where: { id: id.value },
    });

    return record ? EdgeMapper.toDomain(record) : null;
  }

  async findAllByProject(projectId: ProjectId): Promise<Edge[]> {
    const records = await this.prisma.edge.findMany({
      where: { projectId: projectId.value },
      orderBy: { createdAt: 'asc' },
    });

    return records.map((record) => EdgeMapper.toDomain(record));
  }

  async findByNode(nodeId: NodeId): Promise<Edge[]> {
    const records = await this.prisma.edge.findMany({
      where: {
        OR: [{ sourceId: nodeId.value }, { targetId: nodeId.value }],
      },
      orderBy: { createdAt: 'asc' },
    });

    return records.map((record) => EdgeMapper.toDomain(record));
  }

  async save(edge: Edge): Promise<void> {
    await this.prisma.edge.create({
      data: EdgeMapper.toPrismaCreate(edge),
    });
  }

  async delete(id: EdgeId): Promise<void> {
    await this.prisma.edge.delete({
      where: { id: id.value },
    });
  }
}