export type EdgeStyleConfig = {
  stroke: string;
  strokeDasharray?: string;
  strokeWidth?: number;
  markerSize?: number;
  label: string;
};

export const EDGE_STYLES: Record<string, EdgeStyleConfig> = {
  dependency: {
    stroke: '#6b7280',
    strokeWidth: 1.5,
    markerSize: 12,
    label: 'Dependency',
  },
  'data-flow': {
    stroke: '#2563eb',
    strokeDasharray: '6 4',
    strokeWidth: 1.5,
    markerSize: 12,
    label: 'Data Flow',
  },
  navigation: {
    stroke: '#7c3aed',
    strokeWidth: 1.5,
    markerSize: 12,
    label: 'Navigation',
  },
  api: {
    stroke: '#dc2626',
    strokeWidth: 1.5,
    markerSize: 12,
    label: 'API',
  },
  call: {
    stroke: '#059669',
    strokeWidth: 1.5,
    markerSize: 12,
    label: 'Call',
  },
  state: {
    stroke: '#f59e0b',
    strokeDasharray: '4 2',
    strokeWidth: 1.5,
    markerSize: 12,
    label: 'State / Reactive',
  },
  persist: {
    stroke: '#0ea5e9',
    strokeDasharray: '10 4',
    strokeWidth: 1.5,
    markerSize: 12,
    label: 'Persist',
  },
  transform: {
    stroke: '#db2777',
    strokeDasharray: '2 4',
    strokeWidth: 1.5,
    markerSize: 12,
    label: 'Transform',
  },
};

export const getEdgeStyleConfig = (edgeType: string): EdgeStyleConfig =>
  EDGE_STYLES[edgeType] ?? EDGE_STYLES.dependency;

export const getEdgeStyle = (edgeType: string): React.CSSProperties => {
  const config = getEdgeStyleConfig(edgeType);

  return {
    stroke: config.stroke,
    strokeWidth: config.strokeWidth ?? 2,
    strokeDasharray: config.strokeDasharray,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  };
};

export const isAnimated = (edgeType: string): boolean => {
  return edgeType === 'data-flow';
};

export const getEdgeLegendItems = () =>
  Object.entries(EDGE_STYLES).map(([type, config]) => ({
    type,
    label: config.label,
    color: config.stroke,
    dash: Boolean(config.strokeDasharray),
  }));