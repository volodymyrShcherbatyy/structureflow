import { ProjectNotFoundError } from '../../../domain/errors/ProjectNotFoundError';
import { ProjectId } from '../../../domain/value-objects/ProjectId';
import { IProjectRepository } from '../../ports/IProjectRepository';

export type DeleteProjectInput = {
  projectId: string;
};

export type DeleteProjectOutput = {
  deleted: true;
};

export class DeleteProject {
  constructor(private readonly projectRepository: IProjectRepository) {}

  public async execute(input: DeleteProjectInput): Promise<DeleteProjectOutput> {
    const projectId = ProjectId.from(input.projectId);
    const project = await this.projectRepository.findById(projectId);

    if (!project) {
      throw new ProjectNotFoundError(projectId.toString());
    }

    await this.projectRepository.delete(projectId);

    return { deleted: true };
  }
}
