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
    animated: edgeType === 'data-flow',
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
  type: EdgeType.from(edge.data?.edgeType ?? 'dependency').toString(),
  sourceId: edge.source,
  targetId: edge.target,
  label: edge.label ? String(edge.label) : undefined,
  sourceHandle: edge.sourceHandle ?? undefined,
  targetHandle: edge.targetHandle ?? undefined,
});
