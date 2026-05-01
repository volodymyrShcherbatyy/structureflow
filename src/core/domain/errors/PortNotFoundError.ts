import { DomainError } from './DomainError';

export class PortNotFoundError extends DomainError {
  constructor(portId: string) {
    super(`Port not found: ${portId}`);
  }
}