import { Position } from '@xyflow/react';

import { FlowchartElementData } from '../mappers/flowchartElementMapper';

export type FlowchartAnchorId = 'top' | 'right' | 'bottom' | 'left';

export type FlowchartAnchorRole = 'source' | 'target' | 'both';

export type FlowchartAnchorConfig = {
  id: FlowchartAnchorId;
  role: FlowchartAnchorRole;
  position: Position;
  label?: string;
};

export const FLOWCHART_ANCHORS: Record<
  FlowchartElementData['flowchartType'],
  FlowchartAnchorConfig[]
> = {
  terminator: [
    { id: 'top', role: 'target', position: Position.Top },
    { id: 'bottom', role: 'source', position: Position.Bottom },
  ],

  process: [
    { id: 'top', role: 'both', position: Position.Top },
    { id: 'right', role: 'both', position: Position.Right },
    { id: 'bottom', role: 'both', position: Position.Bottom },
    { id: 'left', role: 'both', position: Position.Left },
  ],

  decision: [
    { id: 'top', role: 'target', position: Position.Top },
    { id: 'right', role: 'source', position: Position.Right, label: 'Yes' },
    { id: 'left', role: 'source', position: Position.Left, label: 'No' },
    { id: 'bottom', role: 'source', position: Position.Bottom },
  ],

  data: [
    { id: 'top', role: 'both', position: Position.Top },
    { id: 'right', role: 'both', position: Position.Right },
    { id: 'bottom', role: 'both', position: Position.Bottom },
    { id: 'left', role: 'both', position: Position.Left },
  ],
};

export function getFlowchartAnchorHandleId(
  elementId: string,
  anchorId: FlowchartAnchorId,
): string {
  return `flowchart:${elementId}:${anchorId}`;
}