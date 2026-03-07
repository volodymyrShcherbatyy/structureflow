import { IProjectRepository } from '../../application/ports/IProjectRepository';
import { Project } from '../../domain/entities/Project';
import { ProjectId } from '../../domain/value-objects/ProjectId';

export class InMemoryProjectRepository implements IProjectRepository {
  private readonly projects = new Map<string, Project>();

  public async findById(id: ProjectId): Promise<Project | null> {
    return this.projects.get(id.toString()) ?? null;
  }

  public async save(project: Project): Promise<void> {
    this.projects.set(project.id.toString(), project);
  }

  public async delete(id: ProjectId): Promise<void> {
    this.projects.delete(id.toString());
  }
}
