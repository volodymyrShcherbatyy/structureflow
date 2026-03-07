export type NodeTypeValue = 'system' | 'container' | 'component' | 'page' | 'external';

const ALLOWED_CHILDREN: Record<NodeTypeValue, ReadonlyArray<NodeTypeValue>> = {
  system: ['container', 'external'],
  container: ['component', 'page'],
  component: [],
  page: [],
  external: [],
};

export class NodeType {
  private constructor(private readonly value: NodeTypeValue) {}

  public static from(value: string): NodeType {
    const lower = value.toLowerCase() as NodeTypeValue;

    if (!(lower in ALLOWED_CHILDREN)) {
      throw new Error(`Invalid NodeType: ${value}`);
    }

    return new NodeType(lower);
  }

  public canContain(childType: NodeType): boolean {
    return ALLOWED_CHILDREN[this.value].includes(childType.value);
  }

  public equals(other: NodeType): boolean {
    return this.value === other.value;
  }

  public toString(): NodeTypeValue {
    return this.value;
  }
}
