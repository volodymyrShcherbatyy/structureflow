import { EdgeNotFoundError } from '../../../domain/errors/EdgeNotFoundError';
import { EdgeId } from '../../../domain/value-objects/EdgeId';
import { IEdgeRepository } from '../../ports/IEdgeRepository';

export type DeleteEdgeInput = {
  edgeId: string;
};

export type DeleteEdgeOutput = {
  deleted: true;
};

export class DeleteEdge {
  constructor(private readonly edgeRepository: IEdgeRepository) {}

  public async execute(input: DeleteEdgeInput): Promise<DeleteEdgeOutput> {
    const edgeId = EdgeId.from(input.edgeId);
    const edge = await this.edgeRepository.findById(edgeId);

    if (!edge) {
      throw new EdgeNotFoundError(edgeId.toString());
    }

    await this.edgeRepository.delete(edgeId);

    return { deleted: true };
  }
}
