import { WorkspaceId } from '../value-objects/WorkspaceId';

export type WorkspaceProps = {
  id: WorkspaceId;
  name: string;
  ownerId: string;
};

export class Workspace {
  public readonly id: WorkspaceId;
  public readonly name: string;
  public readonly ownerId: string;

  constructor(props: WorkspaceProps) {
    const name = props.name.trim();
    if (!name) {
      throw new Error('Workspace name cannot be empty');
    }

    this.id = props.id;
    this.name = name;
    this.ownerId = props.ownerId;
  }

  public rename(name: string): Workspace {
    const nextName = name.trim();
    if (!nextName) {
      throw new Error('Workspace name cannot be empty');
    }

    return new Workspace({ ...this, name: nextName });
  }
}
