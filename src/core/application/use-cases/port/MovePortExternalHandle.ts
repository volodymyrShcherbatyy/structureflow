import { PortNotFoundError } from '../../../domain/errors/PortNotFoundError';
import { PortId } from '../../../domain/value-objects/PortId';
import { IPortRepository } from '../../ports/IPortRepository';

export type MovePortExternalHandleInput = {
  portId: string;
  offset: number;
};

export type MovePortExternalHandleOutput = {
  portId: string;
  offset: number;
};

export class MovePortExternalHandle {
  constructor(private readonly portRepository: IPortRepository) {}

  public async execute(
    input: MovePortExternalHandleInput,
  ): Promise<MovePortExternalHandleOutput> {
    const portId = PortId.from(input.portId);
    const port = await this.portRepository.findById(portId);

    if (!port) {
      throw new PortNotFoundError(portId.toString());
    }

    const moved = port.moveExternalHandleTo(input.offset);

    await this.portRepository.save(moved);

    return {
      portId: moved.id.toString(),
      offset: moved.externalHandleOffset,
    };
  }
}