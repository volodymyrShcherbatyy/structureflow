import { DomainError } from './DomainError';

export class ProjectNotFoundError extends DomainError {
  constructor(projectId: string) {
    super(`Project not found: ${projectId}`, 'PROJECT_NOT_FOUND');
  }
}
