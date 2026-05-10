import { DomainError } from './DomainError';

export class FlowchartConnectionNotFoundError extends DomainError {
  constructor(connectionId: string) {
    super(`Flowchart connection not found: ${connectionId}`);
  }
}