import { PrismaDatabaseClient } from '../PrismaDatabaseClient';

import { IFlowchartConnectionRepository } from '../../../../core/application/ports/IFlowchartConnectionRepository';
import { FlowchartConnection } from '../../../../core/domain/entities/FlowchartConnection';
import { FlowchartConnectionId } from '../../../../core/domain/value-objects/FlowchartConnectionId';
import { ProjectId } from '../../../../core/domain/value-objects/ProjectId';
import { FlowchartConnectionMapper } from '../mappers/FlowchartConnectionMapper';

export class PrismaFlowchartConnectionRepository
  implements IFlowchartConnectionRepository
{
  constructor(private readonly prisma: PrismaDatabaseClient) {}

  async findById(
    id: FlowchartConnectionId,
  ): Promise<FlowchartConnection | null> {
    const record = await this.prisma.flowchartConnection.findUnique({
      where: { id: id.toString() },
    });

    return record ? FlowchartConnectionMapper.toDomain(record) : null;
  }

  async findAllByProject(projectId: ProjectId): Promise<FlowchartConnection[]> {
    const records = await this.prisma.flowchartConnection.findMany({
      where: { projectId: projectId.toString() },
      orderBy: { createdAt: 'asc' },
    });

    return records.map((record) => FlowchartConnectionMapper.toDomain(record));
  }

  async save(connection: FlowchartConnection): Promise<void> {
    await this.prisma.flowchartConnection.upsert({
      where: { id: connection.id.toString() },
      create: FlowchartConnectionMapper.toPrismaCreate(connection),
      update: FlowchartConnectionMapper.toPrismaUpdate(connection),
    });
  }

  async delete(id: FlowchartConnectionId): Promise<void> {
    await this.prisma.flowchartConnection.delete({
      where: { id: id.toString() },
    });
  }

  async deleteByEndpoint(kind: string, id: string): Promise<void> {
    await this.prisma.flowchartConnection.deleteMany({
      where: {
        OR: [
          {
            sourceKind: kind,
            sourceId: id,
          },
          {
            targetKind: kind,
            targetId: id,
          },
        ],
      },
    });
  }

  async deleteByEndpoints(
    endpoints: Array<{ kind: string; id: string }>,
  ): Promise<void> {
    if (endpoints.length === 0) {
      return;
    }

    await this.prisma.flowchartConnection.deleteMany({
      where: {
        OR: endpoints.flatMap((endpoint) => [
          {
            sourceKind: endpoint.kind,
            sourceId: endpoint.id,
          },
          {
            targetKind: endpoint.kind,
            targetId: endpoint.id,
          },
        ]),
      },
    });
  }
}