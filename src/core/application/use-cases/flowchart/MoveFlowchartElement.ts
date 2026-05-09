import { FlowchartElementNotFoundError } from '../../../domain/errors/FlowchartElementNotFoundError';
import { FlowchartElementId } from '../../../domain/value-objects/FlowchartElementId';
import { Position } from '../../../domain/value-objects/Position';
import { IFlowchartElementRepository } from '../../ports/IFlowchartElementRepository';

export type MoveFlowchartElementInput = {
  elementId: string;
  x: number;
  y: number;
};

export type MoveFlowchartElementOutput = {
  elementId: string;
  x: number;
  y: number;
};

export class MoveFlowchartElement {
  constructor(private readonly repository: IFlowchartElementRepository) {}

  public async execute(input: MoveFlowchartElementInput): Promise<MoveFlowchartElementOutput> {
    const elementId = FlowchartElementId.from(input.elementId);
    const element = await this.repository.findById(elementId);

    if (!element) {
      throw new FlowchartElementNotFoundError(elementId.toString());
    }

    const moved = element.moveTo(Position.from(input.x, input.y));
    await this.repository.save(moved);

    return {
      elementId: moved.id.toString(),
      x: moved.position.x,
      y: moved.position.y,
    };
  }
}