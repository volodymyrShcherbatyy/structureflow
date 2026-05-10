export type FlowchartEndpointKind =
  | 'flowchart-element'
  | 'node'
  | 'port';

export type FlowchartEndpointProps = {
  kind: FlowchartEndpointKind;
  id: string;
  anchor?: string;
};

const FLOWCHART_ENDPOINT_KINDS: FlowchartEndpointKind[] = [
  'flowchart-element',
  'node',
  'port',
];

export class FlowchartEndpoint {
  private constructor(
    public readonly kind: FlowchartEndpointKind,
    public readonly id: string,
    public readonly anchor?: string,
  ) {}

  public static from(props: FlowchartEndpointProps): FlowchartEndpoint {
    if (!FLOWCHART_ENDPOINT_KINDS.includes(props.kind)) {
      throw new Error(`Invalid FlowchartEndpoint kind: ${props.kind}`);
    }

    const id = props.id.trim();

    if (!id) {
      throw new Error('FlowchartEndpoint id cannot be empty');
    }

    const anchor = props.anchor?.trim() || undefined;

    return new FlowchartEndpoint(props.kind, id, anchor);
  }

  public equals(other: FlowchartEndpoint): boolean {
    return (
      this.kind === other.kind &&
      this.id === other.id &&
      this.anchor === other.anchor
    );
  }

  public toObject(): FlowchartEndpointProps {
    return {
      kind: this.kind,
      id: this.id,
      anchor: this.anchor,
    };
  }
}