import { EdgeId } from '../value-objects/EdgeId';
import { EdgeType } from '../value-objects/EdgeType';
import { NodeId } from '../value-objects/NodeId';
import { ProjectId } from '../value-objects/ProjectId';

export type EdgeProps = {
  id: EdgeId;
  type: EdgeType;
  sourceId: NodeId;
  targetId: NodeId;
  projectId: ProjectId; // 🔥 NEW
  label?: string;
};

export class Edge {
  public readonly id: EdgeId;
  public readonly type: EdgeType;
  public readonly sourceId: NodeId;
  public readonly targetId: NodeId;
  public readonly projectId: ProjectId; // 🔥 NEW
  public readonly label?: string;

  constructor(props: EdgeProps) {
    if (props.sourceId.equals(props.targetId)) {
      throw new Error('Edge cannot connect node to itself');
    }

    this.id = props.id;
    this.type = props.type;
    this.sourceId = props.sourceId;
    this.targetId = props.targetId;
    this.projectId = props.projectId; // 🔥 NEW
    this.label = props.label;
  }

  public relabel(label?: string): Edge {
    return new Edge({ ...this, label: label?.trim() || undefined });
  }

  public connectsNode(nodeId: NodeId): boolean {
    return this.sourceId.equals(nodeId) || this.targetId.equals(nodeId);
  }
}