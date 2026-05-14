import { FlowchartElementNotFoundError } from '../../../domain/errors/FlowchartElementNotFoundError';
import { FlowchartElementId } from '../../../domain/value-objects/FlowchartElementId';
import { IFlowchartElementRepository } from '../../ports/IFlowchartElementRepository';
import { IFlowchartConnectionRepository } from '../../ports/IFlowchartConnectionRepository';

export type DeleteFlowchartElementInput = {
  elementId: string;
};

export type DeleteFlowchartElementOutput = {
  deleted: true;
};

export class DeleteFlowchartElement {
  constructor(
    private readonly repository: IFlowchartElementRepository,
    private readonly connectionRepository?: IFlowchartConnectionRepository,
  ) {}

  public async execute(input: DeleteFlowchartElementInput): Promise<DeleteFlowchartElementOutput> {
    const elementId = FlowchartElementId.from(input.elementId);
    const element = await this.repository.findById(elementId);

    if (!element) {
      throw new FlowchartElementNotFoundError(elementId.toString());
    }

    await this.connectionRepository?.deleteByEndpoint(
      'flowchart-element',
      elementId.toString(),
    );

    await this.repository.delete(elementId);

    return { deleted: true };
  }
}