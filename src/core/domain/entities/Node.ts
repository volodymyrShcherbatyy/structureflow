import { InvalidNestingError } from '../errors/InvalidNestingError';
import { NodeId } from '../value-objects/NodeId';
import { NodeType } from '../value-objects/NodeType';
import { Position } from '../value-objects/Position';

export type NodeProps = {
  id: NodeId;
  type: NodeType;
  label: string;
  description?: string;
  position: Position;
  parentId?: NodeId;
};

export class Node {
  public readonly id: NodeId;
  public readonly type: NodeType;
  public readonly label: string;
  public readonly description?: string;
  public readonly position: Position;
  public readonly parentId?: NodeId;

  constructor(props: NodeProps) {
    this.id = props.id;
    this.type = props.type;
    this.label = props.label;
    this.description = props.description;
    this.position = props.position;
    this.parentId = props.parentId;
  }

  public rename(newLabel: string): Node {
    const label = newLabel.trim();
    if (!label) {
      throw new Error('Node label cannot be empty');
    }

    return new Node({ ...this, label });
  }

  public moveTo(position: Position): Node {
    return new Node({ ...this, position });
  }

  public nestUnder(parentNode: Node): Node {
    if (!parentNode.type.canContain(this.type)) {
      throw new InvalidNestingError(parentNode.type.toString(), this.type.toString());
    }

    return new Node({ ...this, parentId: parentNode.id });
  }

  public detach(): Node {
    return new Node({ ...this, parentId: undefined });
  }
}
