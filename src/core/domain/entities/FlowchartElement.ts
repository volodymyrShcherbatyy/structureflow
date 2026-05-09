import { FlowchartElementId } from '../value-objects/FlowchartElementId';
import { FlowchartElementType } from '../value-objects/FlowchartElementType';
import { NodeId } from '../value-objects/NodeId';
import { Position } from '../value-objects/Position';
import { ProjectId } from '../value-objects/ProjectId';
import { Size } from '../value-objects/Size';

export type FlowchartElementProps = {
  id: FlowchartElementId;
  projectId: ProjectId;
  type: FlowchartElementType;
  label: string;
  position: Position;
  size: Size;
  scopeId?: NodeId;
};

export class FlowchartElement {
  public readonly id: FlowchartElementId;
  public readonly projectId: ProjectId;
  public readonly type: FlowchartElementType;
  public readonly label: string;
  public readonly position: Position;
  public readonly size: Size;
  public readonly scopeId?: NodeId;

  constructor(props: FlowchartElementProps) {
    this.id = props.id;
    this.projectId = props.projectId;
    this.type = props.type;
    this.label = props.label;
    this.position = props.position;
    this.size = props.size;
    this.scopeId = props.scopeId;
  }

  public rename(label: string): FlowchartElement {
    return new FlowchartElement({
      ...this,
      label,
    });
  }

  public moveTo(position: Position): FlowchartElement {
    return new FlowchartElement({
      ...this,
      position,
    });
  }

  public resize(size: Size): FlowchartElement {
    return new FlowchartElement({
      ...this,
      size,
    });
  }
}