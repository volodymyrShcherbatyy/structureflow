export class Position {
  private constructor(
    public readonly x: number,
    public readonly y: number,
  ) {}

  public static from(x: number, y: number): Position {
    return new Position(x, y);
  }

  public static origin(): Position {
    return new Position(0, 0);
  }

  public translate(dx: number, dy: number): Position {
    return new Position(this.x + dx, this.y + dy);
  }

  public equals(other: Position): boolean {
    return this.x === other.x && this.y === other.y;
  }
}
