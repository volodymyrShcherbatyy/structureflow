import { FlowchartConnection as PrismaFlowchartConnection, Prisma } from '@prisma/client';

import { FlowchartConnection } from '../../../../core/domain/entities/FlowchartConnection';
import { FlowchartConnectionId } from '../../../../core/domain/value-objects/FlowchartConnectionId';
import { FlowchartConnectionType } from '../../../../core/domain/value-objects/FlowchartConnectionType';
import { FlowchartEndpoint } from '../../../../core/domain/value-objects/FlowchartEndpoint';
import { NodeId } from '../../../../core/domain/value-objects/NodeId';
import { ProjectId } from '../../../../core/domain/value-objects/ProjectId';

export class FlowchartConnectionMapper {
  static toDomain(record: PrismaFlowchartConnection): FlowchartConnection {
    return new FlowchartConnection({
      id: FlowchartConnectionId.from(record.id),
      projectId: ProjectId.from(record.projectId),
      scopeId: record.scopeId ? NodeId.from(record.scopeId) : undefined,
      source: FlowchartEndpoint.from({
        kind: record.sourceKind as never,
        id: record.sourceId,
        anchor: record.sourceAnchor ?? undefined,
      }),
      target: FlowchartEndpoint.from({
        kind: record.targetKind as never,
        id: record.targetId,
        anchor: record.targetAnchor ?? undefined,
      }),
      type: FlowchartConnectionType.from(record.type),
      label: record.label ?? undefined,
    });
  }

  static toPrismaCreate(
    connection: FlowchartConnection,
  ): Prisma.FlowchartConnectionUncheckedCreateInput {
    return {
      id: connection.id.toString(),
      projectId: connection.projectId.toString(),
      scopeId: connection.scopeId?.toString() ?? null,

      sourceKind: connection.source.kind,
      sourceId: connection.source.id,
      sourceAnchor: connection.source.anchor ?? null,

      targetKind: connection.target.kind,
      targetId: connection.target.id,
      targetAnchor: connection.target.anchor ?? null,

      type: connection.type.toString(),
      label: connection.label ?? null,
    };
  }

  static toPrismaUpdate(
    connection: FlowchartConnection,
  ): Prisma.FlowchartConnectionUncheckedUpdateInput {
    return {
      scopeId: connection.scopeId?.toString() ?? null,

      sourceKind: connection.source.kind,
      sourceId: connection.source.id,
      sourceAnchor: connection.source.anchor ?? null,

      targetKind: connection.target.kind,
      targetId: connection.target.id,
      targetAnchor: connection.target.anchor ?? null,

      type: connection.type.toString(),
      label: connection.label ?? null,
    };
  }
}