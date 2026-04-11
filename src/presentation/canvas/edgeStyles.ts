export const EDGE_STYLES: Record<
  string,
  { stroke: string; strokeDasharray?: string }
> = {
  dependency: { stroke: '#6b7280' },
  'data-flow': { stroke: '#2563eb', strokeDasharray: '6 4' },
  navigation: { stroke: '#7c3aed' },
  api: { stroke: '#dc2626' },

  call: { stroke: '#059669' },
  state: { stroke: '#f59e0b', strokeDasharray: '4 2' },
  persist: { stroke: '#0ea5e9' },
  transform: { stroke: '#9333ea', strokeDasharray: '2 2' },
};

export function getEdgeStyle(edgeType: string) {
  return EDGE_STYLES[edgeType] ?? EDGE_STYLES.dependency;
}

export function isAnimated(edgeType: string) {
  return edgeType === 'data-flow' || edgeType === 'state';
}