import { NodeNotFoundError } from '../../../domain/errors/NodeNotFoundError';
import { NodeId } from '../../../domain/value-objects/NodeId';
import { INodeRepository } from '../../ports/INodeRepository';

export const NODE_LABEL_MAX_LENGTH = 30;
export const NODE_DESCRIPTION_MAX_LENGTH = 120;

export type UpdateNodeDetailsInput = {
  nodeId: string;
  label?: string;
  description?: string;
};

export type UpdateNodeDetailsOutput = {
  nodeId: string;
  label: string;
  description?: string;
};

function assertMaxLength(value: string | undefined, maxLength: number, fieldName: string): void {
  if (value !== undefined && value.length > maxLength) {
    throw new Error(`${fieldName} cannot be longer than ${maxLength} characters`);
  }
}

export class UpdateNodeDetails {
  constructor(private readonly nodeRepository: INodeRepository) {}

  public async execute(
    input: UpdateNodeDetailsInput,
  ): Promise<UpdateNodeDetailsOutput> {
    assertMaxLength(input.label, NODE_LABEL_MAX_LENGTH, 'Node label');
    assertMaxLength(
      input.description,
      NODE_DESCRIPTION_MAX_LENGTH,
      'Node description',
    );

    const nodeId = NodeId.from(input.nodeId);
    const node = await this.nodeRepository.findById(nodeId);

    if (!node) {
      throw new NodeNotFoundError(nodeId.toString());
    }

    const updated = node.updateDetails({
      label: input.label,
      description: input.description,
    });

    await this.nodeRepository.save(updated);

    return {
      nodeId: updated.id.toString(),
      label: updated.label,
      description: updated.description,
    };
  }
}