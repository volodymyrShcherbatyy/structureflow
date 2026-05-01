export type PortSideValue = 'top' | 'right' | 'bottom' | 'left';

const VALID_PORT_SIDES: PortSideValue[] = ['top', 'right', 'bottom', 'left'];

export class PortSide {
  private constructor(public readonly value: PortSideValue) {}

  static from(value: string): PortSide {
    if (!VALID_PORT_SIDES.includes(value as PortSideValue)) {
      throw new Error(`Invalid port side: ${value}`);
    }

    return new PortSide(value as PortSideValue);
  }

  static top(): PortSide {
    return new PortSide('top');
  }

  static right(): PortSide {
    return new PortSide('right');
  }

  static bottom(): PortSide {
    return new PortSide('bottom');
  }

  static left(): PortSide {
    return new PortSide('left');
  }

  static all(): PortSide[] {
    return [
      PortSide.top(),
      PortSide.right(),
      PortSide.bottom(),
      PortSide.left(),
    ];
  }

  equals(other: PortSide): boolean {
    return this.value === other.value;
  }

  toString(): string {
    return this.value;
  }
}