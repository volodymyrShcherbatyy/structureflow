export class Size {
  private constructor(
    public readonly width: number,
    public readonly height: number,
  ) {}

  public static from(width: number, height: number): Size {
    if (!Number.isFinite(width) || !Number.isFinite(height)) {
      throw new Error('Size dimensions must be finite numbers');
    }

    if (width <= 0 || height <= 0) {
      throw new Error('Size dimensions must be greater than zero');
    }

    return new Size(width, height);
  }

  public static defaultForFlowchartElement(): Size {
    return new Size(160, 80);
  }

  public equals(other: Size): boolean {
    return this.width === other.width && this.height === other.height;
  }
}