export type FlowchartConnectionTypeValue = 'flow';

const FLOWCHART_CONNECTION_TYPES: FlowchartConnectionTypeValue[] = ['flow'];

export class FlowchartConnectionType {
  private constructor(private readonly value: FlowchartConnectionTypeValue) {}

  public static from(value: string): FlowchartConnectionType {
    const normalized = value.trim().toLowerCase() as FlowchartConnectionTypeValue;

    if (!FLOWCHART_CONNECTION_TYPES.includes(normalized)) {
      throw new Error(`Invalid FlowchartConnectionType: ${value}`);
    }

    return new FlowchartConnectionType(normalized);
  }

  public static flow(): FlowchartConnectionType {
    return new FlowchartConnectionType('flow');
  }

  public equals(other: FlowchartConnectionType): boolean {
    return this.value === other.value;
  }

  public toString(): FlowchartConnectionTypeValue {
    return this.value;
  }
}