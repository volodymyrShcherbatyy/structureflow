import { NodeTypes } from '@xyflow/react';

import { BlockNode } from './nodes/BlockNode';
import { PortNode } from './ports/PortNode';

export const nodeTypes: NodeTypes = {
  blockNode: BlockNode,
  portNode: PortNode,
};
