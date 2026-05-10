import { Edge as FlowEdge, MarkerType } from '@xyflow/react';

import { FlowchartConnection as CoreFlowchartConnection } from '../../../core/domain/entities/FlowchartConnection';

export type FlowchartConnectionEdgeData = {
  connectionKind: 'flowchart';
  connectionType: string;
  sourceKind: string;
  targetKind: string;
};

export type FlowchartConnectionToCoreDto = {
  id: string;
  projectId: string;
  scopeId?: string;
  source: {
    kind: 'flowchart-element' | 'node' | 'port';
    id: string;
    anchor?: string;
  };
  target: {
    kind: 'flowchart-element' | 'node' | 'port';
    id: string;
    anchor?: string;
  };
  type: string;
  label?: string;
};

function endpointIdForCanvas(endpoint: {
  kind: string;
  id: string;
}): string {
  return endpoint.id;
}

export const coreFlowchartConnectionToFlow = (
  connection: CoreFlowchartConnection,
): FlowEdge<FlowchartConnectionEdgeData> => ({
  id: connection.id.toString(),
  source: endpointIdForCanvas(connection.source),
  target: endpointIdForCanvas(connection.target),
  sourceHandle: connection.source.anchor,
  targetHandle: connection.target.anchor,
  label: connection.label,
  animated: false,
  markerEnd: {
    type: MarkerType.ArrowClosed,
    color: '#111827',
    width: 18,
    height: 18,
  },
  style: {
    stroke: '#111827',
    strokeWidth: 1.5,
  },
  data: {
    connectionKind: 'flowchart',
    connectionType: connection.type.toString(),
    sourceKind: connection.source.kind,
    targetKind: connection.target.kind,
  },
});

export const flowchartConnectionToCore = (
  edge: FlowEdge<FlowchartConnectionEdgeData>,
): FlowchartConnectionToCoreDto => {
  if (!edge.data) {
    throw new Error('Flowchart connection edge data is missing');
  }

  return {
    id: edge.id,
    projectId: '',
    source: {
      kind: edge.data.sourceKind as 'flowchart-element' | 'node' | 'port',
      id: edge.source,
      anchor: edge.sourceHandle ?? undefined,
    },
    target: {
      kind: edge.data.targetKind as 'flowchart-element' | 'node' | 'port',
      id: edge.target,
      anchor: edge.targetHandle ?? undefined,
    },
    type: edge.data.connectionType,
    label: edge.label ? String(edge.label) : undefined,
  };
};