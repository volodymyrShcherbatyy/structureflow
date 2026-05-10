const UUID_V4_REGEX =
  /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export class FlowchartConnectionId {
  private constructor(private readonly value: string) {}

  public static create(): FlowchartConnectionId {
    return new FlowchartConnectionId(crypto.randomUUID());
  }

  public static from(value: string): FlowchartConnectionId {
    if (!UUID_V4_REGEX.test(value)) {
      throw new Error(`Invalid FlowchartConnectionId: ${value}`);
    }

    return new FlowchartConnectionId(value);
  }

  public equals(other: FlowchartConnectionId): boolean {
    return this.value === other.value;
  }

  public toString(): string {
    return this.value;
  }
}