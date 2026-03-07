import { ProjectNotFoundError } from '../../../domain/errors/ProjectNotFoundError';
import { ProjectId } from '../../../domain/value-objects/ProjectId';
import { IProjectRepository } from '../../ports/IProjectRepository';

export type RenameProjectInput = {
  projectId: string;
  name: string;
};

export type RenameProjectOutput = {
  projectId: string;
  name: string;
};

export class RenameProject {
  constructor(private readonly projectRepository: IProjectRepository) {}

  public async execute(input: RenameProjectInput): Promise<RenameProjectOutput> {
    const projectId = ProjectId.from(input.projectId);
    const project = await this.projectRepository.findById(projectId);

    if (!project) {
      throw new ProjectNotFoundError(projectId.toString());
    }

    const renamed = project.rename(input.name);
    await this.projectRepository.save(renamed);

    return {
      projectId: renamed.id.toString(),
      name: renamed.name,
    };
  }
}
