import { FlowchartElementNotFoundError } from '../../../domain/errors/FlowchartElementNotFoundError';
import { FlowchartElementId } from '../../../domain/value-objects/FlowchartElementId';
import { IFlowchartElementRepository } from '../../ports/IFlowchartElementRepository';

export type RenameFlowchartElementInput = {
  elementId: string;
  label: string;
};

export type RenameFlowchartElementOutput = {
  elementId: string;
  label: string;
};

export class RenameFlowchartElement {
  constructor(private readonly repository: IFlowchartElementRepository) {}

  public async execute(input: RenameFlowchartElementInput): Promise<RenameFlowchartElementOutput> {
    const elementId = FlowchartElementId.from(input.elementId);
    const element = await this.repository.findById(elementId);

    if (!element) {
      throw new FlowchartElementNotFoundError(elementId.toString());
    }

    const renamed = element.rename(input.label);
    await this.repository.save(renamed);

    return {
      elementId: renamed.id.toString(),
      label: renamed.label,
    };
  }
}