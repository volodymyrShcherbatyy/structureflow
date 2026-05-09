const UUID_V4_REGEX =
  /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export class FlowchartElementId {
  private constructor(private readonly value: string) {}

  public static create(): FlowchartElementId {
    return new FlowchartElementId(crypto.randomUUID());
  }

  public static from(value: string): FlowchartElementId {
    if (!UUID_V4_REGEX.test(value)) {
      throw new Error(`Invalid FlowchartElementId: ${value}`);
    }

    return new FlowchartElementId(value);
  }

  public equals(other: FlowchartElementId): boolean {
    return this.value === other.value;
  }

  public toString(): string {
    return this.value;
  }
}