import { Edge as FlowEdge, MarkerType } from '@xyflow/react';

import { Edge as CoreEdge } from '../../../core/domain/entities/Edge';
import { EdgeType } from '../../../core/domain/value-objects/EdgeType';

export type FlowEdgeData = {
  edgeType: string;
};

export type FlowEdgeToCoreDto = {
  id: string;
  type: string;
  sourceId: string;
  targetId: string;
  label?: string;
  sourceHandle?: string;
  targetHandle?: string;
};

const EDGE_STYLES: Record<string, { stroke: string; strokeDasharray?: string }> = {
  dependency: { stroke: '#6b7280' },
  'data-flow': { stroke: '#2563eb', strokeDasharray: '6 4' },
  navigation: { stroke: '#7c3aed' },
  api: { stroke: '#dc2626' },

  call: { stroke: '#059669' },          // зелений
  state: { stroke: '#f59e0b', strokeDasharray: '4 2' }, // помаранчевий
  persist: { stroke: '#0ea5e9' },       // блакитний
  transform: { stroke: '#9333ea', strokeDasharray: '2 2' }, // фіолетовий пунктир
};

export const coreEdgeToFlow = (edge: CoreEdge): FlowEdge<FlowEdgeData> => {
  const edgeType = edge.type.toString();
  const style = EDGE_STYLES[edgeType] ?? EDGE_STYLES.dependency;

  return {
    id: edge.id.toString(),
    source: edge.sourceId.toString(),
    target: edge.targetId.toString(),
    sourceHandle: edge.sourceHandle ?? undefined,
    targetHandle: edge.targetHandle ?? undefined,
    label: edge.label,
    animated: edgeType === 'data-flow' || edgeType === 'state',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: style.stroke,
    },
    style,
    data: {
      edgeType,
    },
  };
};

export const flowEdgeToCore = (edge: FlowEdge<FlowEdgeData>): FlowEdgeToCoreDto => ({
  id: edge.id,
  type: EdgeType.from( edge.data?.edgeType ?? edge.type ?? 'dependency').toString(),
  sourceId: edge.source,
  targetId: edge.target,
  label: edge.label ? String(edge.label) : undefined,
  sourceHandle: edge.sourceHandle ?? undefined,
  targetHandle: edge.targetHandle ?? undefined,
});
