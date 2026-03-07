const UUID_V4_REGEX =
  /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export class NodeId {
  private constructor(private readonly value: string) {}

  public static create(): NodeId {
    return new NodeId(crypto.randomUUID());
  }

  public static from(value: string): NodeId {
    if (!UUID_V4_REGEX.test(value)) {
      throw new Error(`Invalid NodeId: ${value}`);
    }

    return new NodeId(value);
  }

  public equals(other: NodeId): boolean {
    return this.value === other.value;
  }

  public toString(): string {
    return this.value;
  }
}
