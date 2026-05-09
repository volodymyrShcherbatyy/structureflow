export type FlowchartElementTypeValue =
  | 'terminator'
  | 'process'
  | 'decision'
  | 'data';

const FLOWCHART_ELEMENT_TYPES: FlowchartElementTypeValue[] = [
  'terminator',
  'process',
  'decision',
  'data',
];

export const DEFAULT_FLOWCHART_LABELS: Record<FlowchartElementTypeValue, string> = {
  terminator: 'Start / End',
  process: 'Process',
  decision: 'Decision',
  data: 'Data',
};

export class FlowchartElementType {
  private constructor(private readonly value: FlowchartElementTypeValue) {}

  public static from(value: string): FlowchartElementType {
    const normalized = value.trim().toLowerCase() as FlowchartElementTypeValue;

    if (!FLOWCHART_ELEMENT_TYPES.includes(normalized)) {
      throw new Error(`Invalid FlowchartElementType: ${value}`);
    }

    return new FlowchartElementType(normalized);
  }

  public static getDefaultLabel(type: FlowchartElementType): string {
    return DEFAULT_FLOWCHART_LABELS[type.value];
  }

  public equals(other: FlowchartElementType): boolean {
    return this.value === other.value;
  }

  public toString(): FlowchartElementTypeValue {
    return this.value;
  }
}