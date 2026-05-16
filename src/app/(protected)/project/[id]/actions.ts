'use server';

import { AddNode } from '../../../../core/application/use-cases/node/AddNode';
import { DeleteNode } from '../../../../core/application/use-cases/node/DeleteNode';
import { MoveNode } from '../../../../core/application/use-cases/node/MoveNode';
import { NestNode } from '../../../../core/application/use-cases/node/NestNode';
import { RenameNode } from '../../../../core/application/use-cases/node/RenameNode';
import { ConnectNodes } from '../../../../core/application/use-cases/edge/ConnectNodes';
import { DeleteEdge } from '../../../../core/application/use-cases/edge/DeleteEdge';
import { ProjectId } from '../../../../core/domain/value-objects/ProjectId';
import { getUserId } from '../../../../infrastructure/auth/getUserId';
import { prisma } from '../../../../infrastructure/persistence/prisma/client';
import { PrismaEdgeRepository } from '../../../../infrastructure/persistence/prisma/repositories/PrismaEdgeRepository';
import { PrismaNodeRepository } from '../../../../infrastructure/persistence/prisma/repositories/PrismaNodeRepository';
import { PrismaProjectRepository } from '../../../../infrastructure/persistence/prisma/repositories/PrismaProjectRepository';
import { coreEdgeToFlow } from '../../../../presentation/canvas/mappers/edgeMapper';
import { coreNodeToFlow } from '../../../../presentation/canvas/mappers/nodeMapper';
import { PrismaPortRepository } from '../../../../infrastructure/persistence/prisma/repositories/PrismaPortRepository';
import { MovePort } from '../../../../core/application/use-cases/port/MovePort';
import { MovePortExternalHandle } from '../../../../core/application/use-cases/port/MovePortExternalHandle';
import { corePortToFlow } from '../../../../presentation/canvas/mappers/portMapper';
import { AddFlowchartElement } from '../../../../core/application/use-cases/flowchart/AddFlowchartElement';
import { DeleteFlowchartElement } from '../../../../core/application/use-cases/flowchart/DeleteFlowchartElement';
import { MoveFlowchartElement } from '../../../../core/application/use-cases/flowchart/MoveFlowchartElement';
import { RenameFlowchartElement } from '../../../../core/application/use-cases/flowchart/RenameFlowchartElement';
import { ResizeFlowchartElement } from '../../../../core/application/use-cases/flowchart/ResizeFlowchartElement';
import { PrismaFlowchartElementRepository } from '../../../../infrastructure/persistence/prisma/repositories/PrismaFlowchartElementRepository';
import { coreFlowchartElementToFlow } from '../../../../presentation/canvas/mappers/flowchartElementMapper';
import { ConnectFlowchartElements } from '../../../../core/application/use-cases/flowchart/ConnectFlowchartElements';
import { DeleteFlowchartConnection } from '../../../../core/application/use-cases/flowchart/DeleteFlowchartConnection';
import { PrismaFlowchartConnectionRepository } from '../../../../infrastructure/persistence/prisma/repositories/PrismaFlowchartConnectionRepository';
import { coreFlowchartConnectionToFlow } from '../../../../presentation/canvas/mappers/flowchartConnectionMapper';
import { RelabelFlowchartConnection } from '../../../../core/application/use-cases/flowchart/RelabelFlowchartConnection';
import { ExportProjectJson } from '../../../../core/application/use-cases/project/ExportProjectJson';

async function assertOwnership(projectId: string) {
  const userId = await getUserId();
  const projectRepository = new PrismaProjectRepository(prisma);
  const projectIdVO = ProjectId.from(projectId);

  const project = await projectRepository.findById(projectIdVO);

  if (!project || project.ownerId !== userId) {
    throw new Error('You do not have access to this project.');
  }

  return {
    nodeRepository: new PrismaNodeRepository(prisma),
    edgeRepository: new PrismaEdgeRepository(prisma),
    portRepository: new PrismaPortRepository(prisma),
    flowchartElementRepository: new PrismaFlowchartElementRepository(prisma),
    flowchartConnectionRepository: new PrismaFlowchartConnectionRepository(prisma),
    projectRepository,
  };
}

type AddNodeInput = {
  projectId: string;
  type: string;
  label: string;
  description?: string;
  x: number;
  y: number;
  parentId?: string;
};

type AddFlowchartElementActionInput = {
  projectId: string;
  type: string;
  label?: string;
  x: number;
  y: number;
  width?: number;
  height?: number;
  scopeId?: string;
};

type FlowchartEndpointActionInput = {
  kind: 'flowchart-element' | 'node' | 'port';
  id: string;
  anchor?: string;
};

type ConnectFlowchartElementsActionInput = {
  projectId: string;
  source: FlowchartEndpointActionInput;
  target: FlowchartEndpointActionInput;
  type?: string;
  label?: string;
  scopeId?: string;
};

export async function addNodeAction(input: AddNodeInput) {
  const { nodeRepository, portRepository, projectRepository } = await assertOwnership(input.projectId);
  const addNode = new AddNode(projectRepository, nodeRepository, portRepository);
  const nestNode = new NestNode(nodeRepository);

  const { node, ports } = await addNode.execute({
    projectId: input.projectId,
    type: input.type,
    label: input.label,
    description: input.description,
    x: input.x,
    y: input.y,
  });

  if (input.parentId) {
    await nestNode.execute({ nodeId: node.id.toString(), parentId: input.parentId });
    const nestedNode = await nodeRepository.findById(node.id);

    if (!nestedNode) {
      throw new Error('Unable to load created node.');
    }

    return {
      node: coreNodeToFlow(nestedNode, input.projectId),
      ports: ports.map((port) => corePortToFlow(port)),
    };
  }

  return {
    node: coreNodeToFlow(node, input.projectId),
    ports: ports.map((port) => corePortToFlow(port)),
  };
}

export async function moveNodeAction(input: { projectId: string; nodeId: string; x: number; y: number }) {
  const { nodeRepository } = await assertOwnership(input.projectId);
  const moveNode = new MoveNode(nodeRepository);

  return moveNode.execute({ nodeId: input.nodeId, x: input.x, y: input.y });
}

export async function movePortAction(input: { projectId: string; portId: string; x: number; y: number }) {
  const { portRepository } = await assertOwnership(input.projectId);
  const movePort = new MovePort(portRepository);

  return movePort.execute({ portId: input.portId, x: input.x, y: input.y });
}

export async function movePortExternalHandleAction(input: {
  projectId: string;
  portId: string;
  offset: number;
}) {
  const { portRepository } = await assertOwnership(input.projectId);
  const movePortExternalHandle = new MovePortExternalHandle(portRepository);

  return movePortExternalHandle.execute({
    portId: input.portId,
    offset: input.offset,
  });
}

export async function renameNodeAction(input: { projectId: string; nodeId: string; label: string }) {
  const { nodeRepository } = await assertOwnership(input.projectId);
  const renameNode = new RenameNode(nodeRepository);

  return renameNode.execute({ nodeId: input.nodeId, label: input.label });
}

export async function deleteNodeAction(input: { projectId: string; nodeId: string }) {
  const {
    nodeRepository,
    edgeRepository,
    portRepository,
    flowchartConnectionRepository,
  } = await assertOwnership(input.projectId);

  const deleteNode = new DeleteNode(
    nodeRepository,
    edgeRepository,
    portRepository,
    flowchartConnectionRepository,
  );

  return deleteNode.execute({ nodeId: input.nodeId });
}

export async function connectNodesAction(input: {
  projectId: string;
  sourceId: string;
  targetId: string;
  type: string;
  label?: string;
  sourceHandle?: string;
  targetHandle?: string;
}) {
  const { nodeRepository, edgeRepository } = await assertOwnership(input.projectId);
  const connectNodes = new ConnectNodes(nodeRepository, edgeRepository);
  const { edge } = await connectNodes.execute({
    sourceId: input.sourceId,
    targetId: input.targetId,
    type: input.type,
    label: input.label,
    sourceHandle: input.sourceHandle,
    targetHandle: input.targetHandle,
  });

  return { edge: coreEdgeToFlow(edge) };
}

export async function deleteEdgeAction(input: { projectId: string; edgeId: string }) {
  const { edgeRepository } = await assertOwnership(input.projectId);
  const deleteEdge = new DeleteEdge(edgeRepository);

  return deleteEdge.execute({ edgeId: input.edgeId });
}

export async function addFlowchartElementAction(input: AddFlowchartElementActionInput) {
  const { projectRepository, flowchartElementRepository } = await assertOwnership(input.projectId);

  const addFlowchartElement = new AddFlowchartElement(
    projectRepository,
    flowchartElementRepository,
  );

  const { element } = await addFlowchartElement.execute({
    projectId: input.projectId,
    type: input.type,
    label: input.label,
    x: input.x,
    y: input.y,
    width: input.width,
    height: input.height,
    scopeId: input.scopeId,
  });

  return {
    element: coreFlowchartElementToFlow(element),
  };
}

export async function moveFlowchartElementAction(input: {
  projectId: string;
  elementId: string;
  x: number;
  y: number;
}) {
  const { flowchartElementRepository } = await assertOwnership(input.projectId);
  const moveFlowchartElement = new MoveFlowchartElement(flowchartElementRepository);

  return moveFlowchartElement.execute({
    elementId: input.elementId,
    x: input.x,
    y: input.y,
  });
}

export async function resizeFlowchartElementAction(input: {
  projectId: string;
  elementId: string;
  width: number;
  height: number;
}) {
  const { flowchartElementRepository } = await assertOwnership(input.projectId);
  const resizeFlowchartElement = new ResizeFlowchartElement(flowchartElementRepository);

  return resizeFlowchartElement.execute({
    elementId: input.elementId,
    width: input.width,
    height: input.height,
  });
}

export async function renameFlowchartElementAction(input: {
  projectId: string;
  elementId: string;
  label: string;
}) {
  const { flowchartElementRepository } = await assertOwnership(input.projectId);
  const renameFlowchartElement = new RenameFlowchartElement(flowchartElementRepository);

  return renameFlowchartElement.execute({
    elementId: input.elementId,
    label: input.label,
  });
}

export async function deleteFlowchartElementAction(input: {
  projectId: string;
  elementId: string;
}) {
  const {
    flowchartElementRepository,
    flowchartConnectionRepository,
  } = await assertOwnership(input.projectId);

  const deleteFlowchartElement = new DeleteFlowchartElement(
    flowchartElementRepository,
    flowchartConnectionRepository,
  );

  return deleteFlowchartElement.execute({
    elementId: input.elementId,
  });
}

export async function connectFlowchartElementsAction(
  input: ConnectFlowchartElementsActionInput,
) {
  const { flowchartConnectionRepository } = await assertOwnership(input.projectId);

  const connectFlowchartElements = new ConnectFlowchartElements(
    flowchartConnectionRepository,
  );

  const { connection } = await connectFlowchartElements.execute({
    projectId: input.projectId,
    source: input.source,
    target: input.target,
    type: input.type,
    label: input.label,
    scopeId: input.scopeId,
  });

  return {
    connection: coreFlowchartConnectionToFlow(connection),
  };
}

export async function deleteFlowchartConnectionAction(input: {
  projectId: string;
  connectionId: string;
}) {
  const { flowchartConnectionRepository } = await assertOwnership(input.projectId);

  const deleteFlowchartConnection = new DeleteFlowchartConnection(
    flowchartConnectionRepository,
  );

  return deleteFlowchartConnection.execute({
    connectionId: input.connectionId,
  });
}

export async function relabelFlowchartConnectionAction(input: {
  projectId: string;
  connectionId: string;
  label?: string;
}) {
  const { flowchartConnectionRepository } = await assertOwnership(input.projectId);

  const relabelFlowchartConnection = new RelabelFlowchartConnection(
    flowchartConnectionRepository,
  );

  return relabelFlowchartConnection.execute({
    connectionId: input.connectionId,
    label: input.label,
  });
}

export async function exportProjectJsonAction(input: { projectId: string }) {
  const {
    projectRepository,
    nodeRepository,
    edgeRepository,
    portRepository,
    flowchartElementRepository,
    flowchartConnectionRepository,
  } = await assertOwnership(input.projectId);

  const exportProjectJson = new ExportProjectJson(
    projectRepository,
    nodeRepository,
    edgeRepository,
    portRepository,
    flowchartElementRepository,
    flowchartConnectionRepository,
  );

  return exportProjectJson.execute({
    projectId: input.projectId,
  });
}