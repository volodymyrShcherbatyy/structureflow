import { FlowchartConnectionNotFoundError } from '../../../domain/errors/FlowchartConnectionNotFoundError';
import { FlowchartConnectionId } from '../../../domain/value-objects/FlowchartConnectionId';
import { IFlowchartConnectionRepository } from '../../ports/IFlowchartConnectionRepository';

export type DeleteFlowchartConnectionInput = {
  connectionId: string;
};

export type DeleteFlowchartConnectionOutput = {
  deleted: true;
};

export class DeleteFlowchartConnection {
  constructor(
    private readonly repository: IFlowchartConnectionRepository,
  ) {}

  public async execute(
    input: DeleteFlowchartConnectionInput,
  ): Promise<DeleteFlowchartConnectionOutput> {
    const connectionId = FlowchartConnectionId.from(input.connectionId);
    const connection = await this.repository.findById(connectionId);

    if (!connection) {
      throw new FlowchartConnectionNotFoundError(connectionId.toString());
    }

    await this.repository.delete(connectionId);

    return { deleted: true };
  }
}