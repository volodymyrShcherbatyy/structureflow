import { Project } from '../../domain/entities/Project';
import { ProjectId } from '../../domain/value-objects/ProjectId';

export interface IProjectRepository {
  findById(id: ProjectId): Promise<Project | null>;
  save(project: Project): Promise<void>;
  delete(id: ProjectId): Promise<void>;
}
