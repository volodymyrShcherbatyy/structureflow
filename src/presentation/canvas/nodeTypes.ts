import { NodeTypes } from '@xyflow/react';

import { BlockNode } from './nodes/BlockNode';
import { PortNode } from './ports/PortNode';
import { FlowchartShapeNode } from './flowchart/FlowchartShapeNode';

export const nodeTypes: NodeTypes = {
  blockNode: BlockNode,
  portNode: PortNode,
  flowchartShapeNode: FlowchartShapeNode,
};
