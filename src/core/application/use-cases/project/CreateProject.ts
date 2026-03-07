import { Project } from '../../../domain/entities/Project';
import { ProjectId } from '../../../domain/value-objects/ProjectId';
import { IProjectRepository } from '../../ports/IProjectRepository';

export type CreateProjectInput = {
  name: string;
  ownerId: string;
};

export type CreateProjectOutput = {
  project: Project;
};

export class CreateProject {
  constructor(private readonly projectRepository: IProjectRepository) {}

  public async execute(input: CreateProjectInput): Promise<CreateProjectOutput> {
    const now = new Date();
    const project = new Project({
      id: ProjectId.create(),
      name: input.name,
      ownerId: input.ownerId,
      createdAt: now,
      updatedAt: now,
    });

    await this.projectRepository.save(project);

    return { project };
  }
}
