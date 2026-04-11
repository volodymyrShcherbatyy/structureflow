import { Edge as FlowEdge, MarkerType } from '@xyflow/react';

import { Edge as CoreEdge } from '../../../core/domain/entities/Edge';
import { EdgeType } from '../../../core/domain/value-objects/EdgeType';
import { getEdgeStyle, isAnimated } from '../edgeStyles';

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

export const coreEdgeToFlow = (edge: CoreEdge): FlowEdge<FlowEdgeData> => {
  const edgeType = edge.type.toString();
  const style = getEdgeStyle(edgeType);

  return {
    id: edge.id.toString(),
    source: edge.sourceId.toString(),
    target: edge.targetId.toString(),
    sourceHandle: edge.sourceHandle ?? undefined,
    targetHandle: edge.targetHandle ?? undefined,
    label: edge.label,
    animated: isAnimated(edgeType),
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
