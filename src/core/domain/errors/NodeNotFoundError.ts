import { DomainError } from './DomainError';

export class NodeNotFoundError extends DomainError {
  constructor(nodeId: string) {
    super(`Node not found: ${nodeId}`, 'NODE_NOT_FOUND');
  }
}
