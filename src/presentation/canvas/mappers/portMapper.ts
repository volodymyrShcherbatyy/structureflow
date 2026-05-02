import { Node as FlowNode } from '@xyflow/react';

import { Port as CorePort } from '../../../core/domain/entities/Port';

export type FlowPortData = {
  label: string;
  portId: string;
  nodeId: string;
  projectId: string;
  side: string;
};

export const corePortToFlow = (port: CorePort): FlowNode<FlowPortData> => ({
  id: port.id.toString(),
  type: 'portNode',
  position: {
    x: port.position.x,
    y: port.position.y,
  },
  data: {
    label: port.side.toString(),
    portId: port.id.toString(),
    nodeId: port.nodeId.toString(),
    projectId: port.projectId.toString(),
    side: port.side.toString(),
  },
});