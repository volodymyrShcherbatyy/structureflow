export type EdgeTypeValue =
  | 'dependency'
  | 'data-flow'
  | 'navigation'
  | 'api'
  | 'call'
  | 'state'
  | 'persist'
  | 'transform';

const EDGE_TYPES: EdgeTypeValue[] = [
  'dependency',
  'data-flow',
  'navigation',
  'api',
  'call',
  'state',
  'persist',
  'transform',
];

export class EdgeType {
  private constructor(private readonly value: EdgeTypeValue) {}

  public static from(value: string): EdgeType {
    const normalized = value.trim().toLowerCase() as EdgeTypeValue;

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
