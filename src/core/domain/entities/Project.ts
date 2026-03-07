import { ProjectId } from '../value-objects/ProjectId';

export type ProjectProps = {
  id: ProjectId;
  name: string;
  ownerId: string;
  createdAt: Date;
  updatedAt: Date;
};

export class Project {
  public readonly id: ProjectId;
  public readonly name: string;
  public readonly ownerId: string;
  public readonly createdAt: Date;
  public readonly updatedAt: Date;

  constructor(props: ProjectProps) {
    const name = props.name.trim();
    if (!name) {
      throw new Error('Project name cannot be empty');
    }

    this.id = props.id;
    this.name = name;
    this.ownerId = props.ownerId;
    this.createdAt = new Date(props.createdAt);
    this.updatedAt = new Date(props.updatedAt);
  }

  public rename(name: string): Project {
    const nextName = name.trim();
    if (!nextName) {
      throw new Error('Project name cannot be empty');
    }

    return new Project({
      ...this,
      name: nextName,
      updatedAt: new Date(),
    });
  }
}
