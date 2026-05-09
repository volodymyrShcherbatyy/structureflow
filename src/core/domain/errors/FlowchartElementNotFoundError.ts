import { DomainError } from './DomainError';

export class FlowchartElementNotFoundError extends DomainError {
  constructor(elementId: string) {
    super(`Flowchart element not found: ${elementId}`);
  }
}