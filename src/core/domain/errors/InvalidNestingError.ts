import { DomainError } from './DomainError';

export class InvalidNestingError extends DomainError {
  constructor(parentType: string, childType: string) {
    super(`Invalid nesting: ${parentType} cannot contain ${childType}`, 'INVALID_NESTING');
  }
}
