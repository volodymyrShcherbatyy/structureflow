import { FlowchartElement as PrismaFlowchartElement, Prisma } from '@prisma/client';

import { FlowchartElement } from '../../../../core/domain/entities/FlowchartElement';
import { FlowchartElementId } from '../../../../core/domain/value-objects/FlowchartElementId';
import { FlowchartElementType } from '../../../../core/domain/value-objects/FlowchartElementType';
import { NodeId } from '../../../../core/domain/value-objects/NodeId';
import { Position } from '../../../../core/domain/value-objects/Position';
import { ProjectId } from '../../../../core/domain/value-objects/ProjectId';
import { Size } from '../../../../core/domain/value-objects/Size';

export class FlowchartElementMapper {
  static toDomain(record: PrismaFlowchartElement): FlowchartElement {
    return new FlowchartElement({
      id: FlowchartElementId.from(record.id),
      projectId: ProjectId.from(record.projectId),
      type: FlowchartElementType.from(record.type),
      label: record.label,
      position: Position.from(record.positionX, record.positionY),
      size: Size.from(record.width, record.height),
      scopeId: record.scopeId ? NodeId.from(record.scopeId) : undefined,
    });
  }

  static toPrismaCreate(
    element: FlowchartElement,
  ): Prisma.FlowchartElementUncheckedCreateInput {
    return {
      id: element.id.toString(),
      type: element.type.toString(),
      label: element.label,
      positionX: element.position.x,
      positionY: element.position.y,
      width: element.size.width,
      height: element.size.height,
      scopeId: element.scopeId?.toString() ?? null,
      projectId: element.projectId.toString(),
    };
  }

  static toPrismaUpdate(
    element: FlowchartElement,
  ): Prisma.FlowchartElementUncheckedUpdateInput {
    return {
      type: element.type.toString(),
      label: element.label,
      positionX: element.position.x,
      positionY: element.position.y,
      width: element.size.width,
      height: element.size.height,
      scopeId: element.scopeId?.toString() ?? null,
    };
  }
}