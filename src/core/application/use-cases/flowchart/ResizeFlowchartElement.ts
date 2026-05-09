import { FlowchartElementNotFoundError } from '../../../domain/errors/FlowchartElementNotFoundError';
import { FlowchartElementId } from '../../../domain/value-objects/FlowchartElementId';
import { Size } from '../../../domain/value-objects/Size';
import { IFlowchartElementRepository } from '../../ports/IFlowchartElementRepository';

export type ResizeFlowchartElementInput = {
  elementId: string;
  width: number;
  height: number;
};

export type ResizeFlowchartElementOutput = {
  elementId: string;
  width: number;
  height: number;
};

export class ResizeFlowchartElement {
  constructor(private readonly repository: IFlowchartElementRepository) {}

  public async execute(input: ResizeFlowchartElementInput): Promise<ResizeFlowchartElementOutput> {
    const elementId = FlowchartElementId.from(input.elementId);
    const element = await this.repository.findById(elementId);

    if (!element) {
      throw new FlowchartElementNotFoundError(elementId.toString());
    }

    const resized = element.resize(Size.from(input.width, input.height));
    await this.repository.save(resized);

    return {
      elementId: resized.id.toString(),
      width: resized.size.width,
      height: resized.size.height,
    };
  }
}