import { PrismaClient } from '@prisma/client';
import { INodeRepository } from '../../../../core/application/ports/INodeRepository';
import { Node } from '../../../../core/domain/entities/Node';
import { NodeId } from '../../../../core/domain/value-objects/NodeId';
import { ProjectId } from '../../../../core/domain/value-objects/ProjectId';
import { NodeMapper } from '../mappers/NodeMapper';

export class PrismaNodeRepository implements INodeRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async findById(id: NodeId): Promise<Node | null> {
    const record = await this.prisma.node.findUnique({
      where: { id: id.value },
    });

    return record ? NodeMapper.toDomain(record) : null;
  }

  async findAllByProject(projectId: ProjectId): Promise<Node[]> {
    const records = await this.prisma.node.findMany({
      where: { projectId: projectId.value },
      orderBy: { createdAt: 'asc' },
    });

    return records.map((record) => NodeMapper.toDomain(record));
  }

  async save(node: Node, projectId: ProjectId): Promise<void> {
    await this.prisma.node.upsert({
      where: { id: node.id.value },
      create: NodeMapper.toPrismaCreate(node, projectId.value),
      update: NodeMapper.toPrismaUpdate(node),
    });
  }

  async saveMany(nodes: Node[], projectId: ProjectId): Promise<void> {
    await this.prisma.$transaction(
      nodes.map((node) =>
        this.prisma.node.upsert({
          where: { id: node.id.value },
          create: NodeMapper.toPrismaCreate(node, projectId.value),
          update: NodeMapper.toPrismaUpdate(node),
        }),
      ),
    );
  }

  async delete(id: NodeId): Promise<void> {
    await this.prisma.node.delete({
      where: { id: id.value },
    });
  }
}