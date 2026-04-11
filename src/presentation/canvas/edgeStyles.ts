export type EdgeStyleConfig = {
  stroke: string;
  strokeDasharray?: string;
  label: string;
};

export const EDGE_STYLES: Record<string, EdgeStyleConfig> = {
  dependency: { stroke: '#6b7280', label: 'Dependency',},
  'data-flow': { stroke: '#2563eb', strokeDasharray: '6 4', label: 'Data Flow',},
  navigation: { stroke: '#7c3aed', label: 'Navigation',},
  api: { stroke: '#dc2626', label: 'API', },

  call: { stroke: '#059669', label: 'Call', },
  state: { stroke: '#f59e0b', strokeDasharray: '4 2', label: 'State / Reactive', },
  persist: { stroke: '#0ea5e9', label: 'Persistence', },
  transform: { stroke: '#ac26c7', strokeDasharray: '2 2', label: 'Transform',},
};

export function getEdgeStyle(edgeType: string) {
  return EDGE_STYLES[edgeType] ?? EDGE_STYLES.dependency;
}

export function isAnimated(edgeType: string) {
  return edgeType === 'data-flow' || edgeType === 'state';
}

export function getEdgeLegendItems() {
  return Object.entries(EDGE_STYLES).map(([type, config]) => ({
    type,
    color: config.stroke,
    label: config.label,
    dash: config.strokeDasharray,
  }));
}