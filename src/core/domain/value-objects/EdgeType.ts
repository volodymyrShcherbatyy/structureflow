export type EdgeTypeValue = 'dependency' | 'data-flow' | 'navigation' | 'api';

const EDGE_TYPES: EdgeTypeValue[] = ['dependency', 'data-flow', 'navigation', 'api'];

export class EdgeType {
  private constructor(private readonly value: EdgeTypeValue) {}

  public static from(value: string): EdgeType {
    const normalized = value.toLowerCase() as EdgeTypeValue;

    if (!EDGE_TYPES.includes(normalized)) {
      throw new Error(`Invalid EdgeType: ${value}`);
    }

    return new EdgeType(normalized);
  }

  public equals(other: EdgeType): boolean {
    return this.value === other.value;
  }

  public toString(): EdgeTypeValue {
    return this.value;
  }
}
