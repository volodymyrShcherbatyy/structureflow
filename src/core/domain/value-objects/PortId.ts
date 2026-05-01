export class PortId {
  private constructor(public readonly value: string) {
    if (!value.trim()) {
      throw new Error('PortId cannot be empty');
    }
  }

  static from(value: string): PortId {
    return new PortId(value);
  }

  static fromNodeAndSide(nodeId: string, side: string): PortId {
    return new PortId(`${nodeId}:${side}`);
  }

  equals(other: PortId): boolean {
    return this.value === other.value;
  }

  toString(): string {
    return this.value;
  }
}