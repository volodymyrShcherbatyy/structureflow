const UUID_V4_REGEX =
  /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export class WorkspaceId {
  private constructor(private readonly value: string) {}

  public static create(): WorkspaceId {
    return new WorkspaceId(crypto.randomUUID());
  }

  public static from(value: string): WorkspaceId {
    if (!UUID_V4_REGEX.test(value)) {
      throw new Error(`Invalid WorkspaceId: ${value}`);
    }

    return new WorkspaceId(value);
  }

  public equals(other: WorkspaceId): boolean {
    return this.value === other.value;
  }

  public toString(): string {
    return this.value;
  }
}
