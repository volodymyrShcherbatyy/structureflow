import { Port as PrismaPort, Prisma } from '@prisma/client';

import { Port } from '../../../../core/domain/entities/Port';
import { NodeId } from '../../../../core/domain/value-objects/NodeId';
import { PortId } from '../../../../core/domain/value-objects/PortId';
import { PortSide } from '../../../../core/domain/value-objects/PortSide';
import { Position } from '../../../../core/domain/value-objects/Position';
import { ProjectId } from '../../../../core/domain/value-objects/ProjectId';

export class PortMapper {
  static toDomain(record: PrismaPort): Port {
    return new Port({
      id: PortId.from(record.id),
      nodeId: NodeId.from(record.nodeId),
      projectId: ProjectId.from(record.projectId),
      side: PortSide.from(record.side),
      position: Position.from(record.positionX, record.positionY),
      externalHandleOffset: record.externalHandleOffset,
    });
  }

  static toPrismaCreate(port: Port): Prisma.PortUncheckedCreateInput {
    return {
      id: port.id.toString(),
      side: port.side.toString(),
      positionX: port.position.x,
      positionY: port.position.y,
      externalHandleOffset: port.externalHandleOffset,
      nodeId: port.nodeId.toString(),
      projectId: port.projectId.toString(),
    };
  }

  static toPrismaUpdate(port: Port): Prisma.PortUncheckedUpdateInput {
    return {
      side: port.side.toString(),
      positionX: port.position.x,
      positionY: port.position.y,
      externalHandleOffset: port.externalHandleOffset,
      nodeId: port.nodeId.toString(),
      projectId: port.projectId.toString(),
    };
  }
}