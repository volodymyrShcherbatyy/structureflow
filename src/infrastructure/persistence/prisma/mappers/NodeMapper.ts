import { Node as PrismaNode, Prisma } from '@prisma/client';

import { Node } from '../../../../core/domain/entities/Node';
import { NodeId } from '../../../../core/domain/value-objects/NodeId';
import { NodeType } from '../../../../core/domain/value-objects/NodeType';
import { Position } from '../../../../core/domain/value-objects/Position';
import { ProjectId } from '../../../../core/domain/value-objects/ProjectId';

export class NodeMapper {
  static toDomain(record: PrismaNode): Node {
    return new Node({
      id: NodeId.from(record.id),
      type: NodeType.from(record.type),
      label: record.label,
      description: record.description ?? undefined,
      position: Position.from(record.positionX, record.positionY),
      projectId: ProjectId.from(record.projectId),
      parentId: record.parentId ? NodeId.from(record.parentId) : undefined,
    });
  }

  static toPrismaCreate(node: Node): Prisma.NodeUncheckedCreateInput {
    return {
      id: node.id.toString(),
      type: node.type.toString(),
      label: node.label,
      description: node.description ?? null,
      positionX: node.position.x,
      positionY: node.position.y,
      parentId: node.parentId?.toString() ?? null,
      projectId: node.projectId.toString(),
    };
  }

  static toPrismaUpdate(node: Node): Prisma.NodeUncheckedUpdateInput {
    return {
      type: node.type.toString(),
      label: node.label,
      description: node.description ?? null,
      positionX: node.position.x,
      positionY: node.position.y,
      parentId: node.parentId?.toString() ?? null,
    };
  }
}