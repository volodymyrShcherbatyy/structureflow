const UUID_V4_REGEX =
  /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export class EdgeId {
  private constructor(private readonly value: string) {}

  public static create(): EdgeId {
    return new EdgeId(crypto.randomUUID());
  }

  public static from(value: string): EdgeId {
    if (!UUID_V4_REGEX.test(value)) {
      throw new Error(`Invalid EdgeId: ${value}`);
    }

    return new EdgeId(value);
  }

  public equals(other: EdgeId): boolean {
    return this.value === other.value;
  }

  public toString(): string {
    return this.value;
  }
}
