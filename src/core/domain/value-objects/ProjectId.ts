const UUID_V4_REGEX =
  /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export class ProjectId {
  private constructor(private readonly value: string) {}

  public static create(): ProjectId {
    return new ProjectId(crypto.randomUUID());
  }

  public static from(value: string): ProjectId {
    if (!UUID_V4_REGEX.test(value)) {
      throw new Error(`Invalid ProjectId: ${value}`);
    }

    return new ProjectId(value);
  }

  public equals(other: ProjectId): boolean {
    return this.value === other.value;
  }

  public toString(): string {
    return this.value;
  }
}
