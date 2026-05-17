import { PrismaDatabaseClient } from '../PrismaDatabaseClient';

import { INodeRepository } from '../../../../core/application/ports/INodeRepository';
import { Node } from '../../../../core/domain/entities/Node';
import { NodeId } from '../../../../core/domain/value-objects/NodeId';
import { ProjectId } from '../../../../core/domain/value-objects/ProjectId';
import { NodeMapper } from '../mappers/NodeMapper';

export class PrismaNodeRepository implements INodeRepository {
  constructor(private readonly prisma: PrismaDatabaseClient) {}

  async findById(id: NodeId): Promise<Node | null> {
    const record = await this.prisma.node.findUnique({
      where: { id: id.toString() },
    });

    return record ? NodeMapper.toDomain(record) : null;
  }

  async findAllByProject(projectId: ProjectId): Promise<Node[]> {
    const records = await this.prisma.node.findMany({
      where: { projectId: projectId.toString() },
      orderBy: { createdAt: 'asc' },
    });

    return records.map((record) => NodeMapper.toDomain(record));
  }

  async save(node: Node): Promise<void> {
    await this.prisma.node.upsert({
      where: { id: node.id.toString() },
      create: NodeMapper.toPrismaCreate(node),
      update: NodeMapper.toPrismaUpdate(node),
    });
  }

  async saveMany(nodes: Node[]): Promise<void> {
    for (const node of nodes) {
      await this.prisma.node.upsert({
        where: { id: node.id.toString() },
        create: NodeMapper.toPrismaCreate(node),
        update: NodeMapper.toPrismaUpdate(node),
      });
    }
  }

  async delete(id: NodeId): Promise<void> {
    await this.prisma.node.delete({
      where: { id: id.toString() },
    });
  }
}