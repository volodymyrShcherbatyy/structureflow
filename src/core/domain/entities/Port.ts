import { NodeId } from '../value-objects/NodeId';
import { PortId } from '../value-objects/PortId';
import { PortSide } from '../value-objects/PortSide';
import { Position } from '../value-objects/Position';
import { ProjectId } from '../value-objects/ProjectId';

export type PortProps = {
  id: PortId;
  nodeId: NodeId;
  projectId: ProjectId;
  side: PortSide;
  position: Position;
  externalHandleOffset?: number;
};

export class Port {
  public readonly id: PortId;
  public readonly nodeId: NodeId;
  public readonly projectId: ProjectId;
  public readonly side: PortSide;
  public readonly position: Position;
  public readonly externalHandleOffset: number;

  constructor(props: PortProps) {
    this.id = props.id;
    this.nodeId = props.nodeId;
    this.projectId = props.projectId;
    this.side = props.side;
    this.position = props.position;
    this.externalHandleOffset = Port.normalizeExternalHandleOffset(
      props.externalHandleOffset ?? 0.5,
    );
  }

  static createDefaultForNode(input: {
    nodeId: NodeId;
    projectId: ProjectId;
    side: PortSide;
    position: Position;
    externalHandleOffset?: number;
  }): Port {
    return new Port({
      id: PortId.fromNodeAndSide(input.nodeId.toString(), input.side.toString()),
      nodeId: input.nodeId,
      projectId: input.projectId,
      side: input.side,
      position: input.position,
      externalHandleOffset: input.externalHandleOffset ?? 0.5,
    });
  }

  moveTo(position: Position): Port {
    return new Port({
      ...this,
      position,
    });
  }

  moveExternalHandleTo(offset: number): Port {
    return new Port({
      ...this,
      externalHandleOffset: offset,
    });
  }

  private static normalizeExternalHandleOffset(offset: number): number {
    if (!Number.isFinite(offset)) {
      throw new Error('External handle offset must be a finite number');
    }

    if (offset < 0 || offset > 1) {
      throw new Error('External handle offset must be between 0 and 1');
    }

    return offset;
  }
}