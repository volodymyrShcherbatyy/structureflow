import { FlowchartConnectionId } from '../value-objects/FlowchartConnectionId';
import { FlowchartConnectionType } from '../value-objects/FlowchartConnectionType';
import { FlowchartEndpoint } from '../value-objects/FlowchartEndpoint';
import { NodeId } from '../value-objects/NodeId';
import { ProjectId } from '../value-objects/ProjectId';

export type FlowchartConnectionProps = {
  id: FlowchartConnectionId;
  projectId: ProjectId;
  source: FlowchartEndpoint;
  target: FlowchartEndpoint;
  type: FlowchartConnectionType;
  label?: string;
  scopeId?: NodeId;
};

export class FlowchartConnection {
  public readonly id: FlowchartConnectionId;
  public readonly projectId: ProjectId;
  public readonly source: FlowchartEndpoint;
  public readonly target: FlowchartEndpoint;
  public readonly type: FlowchartConnectionType;
  public readonly label?: string;
  public readonly scopeId?: NodeId;

  constructor(props: FlowchartConnectionProps) {
    if (props.source.equals(props.target)) {
      throw new Error('FlowchartConnection cannot connect endpoint to itself');
    }

    this.id = props.id;
    this.projectId = props.projectId;
    this.source = props.source;
    this.target = props.target;
    this.type = props.type;
    this.label = props.label;
    this.scopeId = props.scopeId;
  }

  public relabel(label?: string): FlowchartConnection {
    return new FlowchartConnection({
      ...this,
      label,
    });
  }

  public connectsEndpoint(endpoint: FlowchartEndpoint): boolean {
    return this.source.equals(endpoint) || this.target.equals(endpoint);
  }

  public connectsEndpointId(kind: string, id: string): boolean {
    return (
      (this.source.kind === kind && this.source.id === id) ||
      (this.target.kind === kind && this.target.id === id)
    );
  }
}