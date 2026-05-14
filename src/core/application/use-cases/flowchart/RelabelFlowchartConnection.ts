import { FlowchartConnectionNotFoundError } from '../../../domain/errors/FlowchartConnectionNotFoundError';
import { FlowchartConnectionId } from '../../../domain/value-objects/FlowchartConnectionId';
import { IFlowchartConnectionRepository } from '../../ports/IFlowchartConnectionRepository';

export type RelabelFlowchartConnectionInput = {
  connectionId: string;
  label?: string;
};

export type RelabelFlowchartConnectionOutput = {
  connectionId: string;
  label?: string;
};

export class RelabelFlowchartConnection {
  constructor(
    private readonly repository: IFlowchartConnectionRepository,
  ) {}

  public async execute(
    input: RelabelFlowchartConnectionInput,
  ): Promise<RelabelFlowchartConnectionOutput> {
    const connectionId = FlowchartConnectionId.from(input.connectionId);
    const connection = await this.repository.findById(connectionId);

    if (!connection) {
      throw new FlowchartConnectionNotFoundError(connectionId.toString());
    }

    const relabeled = connection.relabel(input.label);

    await this.repository.save(relabeled);

    return {
      connectionId: relabeled.id.toString(),
      label: relabeled.label,
    };
  }
}