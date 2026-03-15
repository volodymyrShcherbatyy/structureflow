import { Node as FlowNode } from '@xyflow/react';

import { Node as CoreNode } from '../../../core/domain/entities/Node';
import { NodeId } from '../../../core/domain/value-objects/NodeId';
import { NodeType } from '../../../core/domain/value-objects/NodeType';

export type FlowNodeData = {
  label: string;
  nodeType: string;
  description?: string;
  projectId: string;
};

export type FlowNodeToCoreDto = {
  id: string;
  type: string;
  label: string;
  description?: string;
  parentId?: string;
  position: {
    x: number;
    y: number;
  };
};

export const coreNodeToFlow = (node: CoreNode, projectId: string): FlowNode<FlowNodeData> => ({
  id: node.id.toString(),
  type: 'blockNode',
  position: {
    x: node.position.x,
    y: node.position.y,
  },
  parentId: node.parentId?.toString(),
  data: {
    label: node.label,
    nodeType: node.type.toString(),
    description: node.description,
    projectId,
  },
});

export const flowNodeToCore = (node: FlowNode<FlowNodeData>): FlowNodeToCoreDto => ({
  id: NodeId.from(node.id).toString(),
  type: NodeType.from(node.data.nodeType).toString(),
  label: node.data.label,
  description: node.data.description,
  parentId: node.parentId ? NodeId.from(node.parentId).toString() : undefined,
  position: {
    x: node.position.x,
    y: node.position.y,
  },
});
