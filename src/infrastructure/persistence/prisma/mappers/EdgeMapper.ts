import { Edge as PrismaEdge, Prisma } from '@prisma/client';
import { Edge } from '../../../../core/domain/entities/Edge';
import { EdgeId } from '../../../../core/domain/value-objects/EdgeId';
import { EdgeType } from '../../../../core/domain/value-objects/EdgeType';
import { NodeId } from '../../../../core/domain/value-objects/NodeId';

export class EdgeMapper {
  static toDomain(record: PrismaEdge): Edge {
    return new Edge({
      id: EdgeId.from(record.id),
      type: EdgeType.from(record.type),
      sourceId: NodeId.from(record.sourceId),
      targetId: NodeId.from(record.targetId),
      label: record.label ?? undefined,
    });
  }

  static toPrismaCreate(edge: Edge, projectId: string): Prisma.EdgeUncheckedCreateInput {
    return {
      id: edge.id.value,
      type: edge.type.value,
      label: edge.label ?? null,

      projectId: projectId,
      sourceId: edge.sourceId.value,
      targetId: edge.targetId.value,
    };
  }

  static toPrismaUpdate(edge: Edge): Prisma.EdgeUncheckedUpdateInput {
    return {
      type: edge.type.value,
      label: edge.label ?? null,

      sourceId: edge.sourceId.value,
      targetId: edge.targetId.value,
    };
  }
}