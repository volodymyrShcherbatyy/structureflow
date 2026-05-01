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
};

export class Port {
  public readonly id: PortId;
  public readonly nodeId: NodeId;
  public readonly projectId: ProjectId;
  public readonly side: PortSide;
  public readonly position: Position;

  constructor(props: PortProps) {
    this.id = props.id;
    this.nodeId = props.nodeId;
    this.projectId = props.projectId;
    this.side = props.side;
    this.position = props.position;
  }

  static createDefaultForNode(input: {
    nodeId: NodeId;
    projectId: ProjectId;
    side: PortSide;
    position: Position;
  }): Port {
    return new Port({
      id: PortId.fromNodeAndSide(input.nodeId.toString(), input.side.toString()),
      nodeId: input.nodeId,
      projectId: input.projectId,
      side: input.side,
      position: input.position,
    });
  }

  moveTo(position: Position): Port {
    return new Port({
      ...this,
      position,
    });
  }
}