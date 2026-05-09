import { Node as FlowNode } from '@xyflow/react';

import { FlowchartElement as CoreFlowchartElement } from '../../../core/domain/entities/FlowchartElement';
import { FlowchartElementId } from '../../../core/domain/value-objects/FlowchartElementId';
import { FlowchartElementType } from '../../../core/domain/value-objects/FlowchartElementType';
import { NodeId } from '../../../core/domain/value-objects/NodeId';
import { Position } from '../../../core/domain/value-objects/Position';
import { ProjectId } from '../../../core/domain/value-objects/ProjectId';
import { Size } from '../../../core/domain/value-objects/Size';

export type FlowchartElementData = {
  label: string;
  elementId: string;
  projectId: string;
  scopeId?: string;
  flowchartType: 'terminator' | 'process' | 'decision' | 'data';
  width: number;
  height: number;
};

export type FlowchartElementToCoreDto = {
  id: string;
  type: string;
  label: string;
  scopeId?: string;
  position: {
    x: number;
    y: number;
  };
  size: {
    width: number;
    height: number;
  };
};

export const coreFlowchartElementToFlow = (
  element: CoreFlowchartElement,
): FlowNode<FlowchartElementData> => ({
  id: element.id.toString(),
  type: 'flowchartShapeNode',
  position: {
    x: element.position.x,
    y: element.position.y,
  },
  data: {
    label: element.label,
    elementId: element.id.toString(),
    projectId: element.projectId.toString(),
    scopeId: element.scopeId?.toString(),
    flowchartType: element.type.toString(),
    width: element.size.width,
    height: element.size.height,
  },
  style: {
    width: element.size.width,
    height: element.size.height,
    zIndex: 600,
  },
});

export const flowchartElementToCore = (
  node: FlowNode<FlowchartElementData>,
): FlowchartElementToCoreDto => ({
  id: FlowchartElementId.from(node.id).toString(),
  type: FlowchartElementType.from(node.data.flowchartType).toString(),
  label: node.data.label,
  scopeId: node.data.scopeId ? NodeId.from(node.data.scopeId).toString() : undefined,
  position: {
    x: node.position.x,
    y: node.position.y,
  },
  size: {
    width: Size.from(node.data.width, node.data.height).width,
    height: Size.from(node.data.width, node.data.height).height,
  },
});