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

async function assertOwnership(projectId: string) {
  const userId = await getUserId();
  const projectRepository = new PrismaProjectRepository(prisma);
  const projectIdVO =
  typeof projectId === 'string'
    ? ProjectId.from(projectId)
    : projectId;

  const project = await projectRepository.findById(projectIdVO);

  if (!project || project.ownerId !== userId) {
    throw new Error('You do not have access to this project.');
  }

  return {
    nodeRepository: new PrismaNodeRepository(prisma),
    edgeRepository: new PrismaEdgeRepository(prisma),
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

export async function addNodeAction(input: AddNodeInput) {
  const { nodeRepository, projectRepository } = await assertOwnership(input.projectId);
  const addNode = new AddNode(projectRepository, nodeRepository);
  const nestNode = new NestNode(nodeRepository);

    const { node } = await addNode.execute({
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

    return { node: coreNodeToFlow(nestedNode, input.projectId) };
  }

  return { node: coreNodeToFlow(node, input.projectId) };
}

export async function moveNodeAction(input: { projectId: string; nodeId: string; x: number; y: number }) {
  const { nodeRepository } = await assertOwnership(input.projectId);
  const moveNode = new MoveNode(nodeRepository);

  return moveNode.execute({ nodeId: input.nodeId, x: input.x, y: input.y });
}

export async function renameNodeAction(input: { projectId: string; nodeId: string; label: string }) {
  const { nodeRepository } = await assertOwnership(input.projectId);
  const renameNode = new RenameNode(nodeRepository);

  return renameNode.execute({ nodeId: input.nodeId, label: input.label });
}

export async function deleteNodeAction(input: { projectId: string; nodeId: string }) {
  const { nodeRepository, edgeRepository } = await assertOwnership(input.projectId);
  const deleteNode = new DeleteNode(nodeRepository, edgeRepository);

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
