import { DomainError } from './DomainError';

export class EdgeNotFoundError extends DomainError {
  constructor(edgeId: string) {
    super(`Edge not found: ${edgeId}`, 'EDGE_NOT_FOUND');
  }
}
