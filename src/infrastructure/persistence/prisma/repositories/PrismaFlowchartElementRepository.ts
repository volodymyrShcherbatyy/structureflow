import { PrismaClient } from '@prisma/client';

import { IFlowchartElementRepository } from '../../../../core/application/ports/IFlowchartElementRepository';
import { FlowchartElement } from '../../../../core/domain/entities/FlowchartElement';
import { FlowchartElementId } from '../../../../core/domain/value-objects/FlowchartElementId';
import { ProjectId } from '../../../../core/domain/value-objects/ProjectId';
import { FlowchartElementMapper } from '../mappers/FlowchartElementMapper';

export class PrismaFlowchartElementRepository implements IFlowchartElementRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async findById(id: FlowchartElementId): Promise<FlowchartElement | null> {
    const record = await this.prisma.flowchartElement.findUnique({
      where: { id: id.toString() },
    });

    return record ? FlowchartElementMapper.toDomain(record) : null;
  }

  async findAllByProject(projectId: ProjectId): Promise<FlowchartElement[]> {
    const records = await this.prisma.flowchartElement.findMany({
      where: { projectId: projectId.toString() },
      orderBy: { createdAt: 'asc' },
    });

    return records.map((record) => FlowchartElementMapper.toDomain(record));
  }

  async save(element: FlowchartElement): Promise<void> {
    await this.prisma.flowchartElement.upsert({
      where: { id: element.id.toString() },
      create: FlowchartElementMapper.toPrismaCreate(element),
      update: FlowchartElementMapper.toPrismaUpdate(element),
    });
  }

  async delete(id: FlowchartElementId): Promise<void> {
    await this.prisma.flowchartElement.delete({
      where: { id: id.toString() },
    });
  }
}