import { PortNotFoundError } from '../../../domain/errors/PortNotFoundError';
import { PortId } from '../../../domain/value-objects/PortId';
import { Position } from '../../../domain/value-objects/Position';
import { IPortRepository } from '../../ports/IPortRepository';

export type MovePortInput = {
  portId: string;
  x: number;
  y: number;
};

export type MovePortOutput = {
  portId: string;
  x: number;
  y: number;
};

export class MovePort {
  constructor(private readonly portRepository: IPortRepository) {}

  public async execute(input: MovePortInput): Promise<MovePortOutput> {
    const portId = PortId.from(input.portId);
    const port = await this.portRepository.findById(portId);

    if (!port) {
      throw new PortNotFoundError(portId.toString());
    }

    const moved = port.moveTo(Position.from(input.x, input.y));

    await this.portRepository.save(moved);

    return {
      portId: moved.id.toString(),
      x: moved.position.x,
      y: moved.position.y,
    };
  }
}