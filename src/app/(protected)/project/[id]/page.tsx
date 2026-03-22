import { notFound } from 'next/navigation';

import { ProjectId } from '../../../../core/domain/value-objects/ProjectId';
import { getUserId } from '../../../../infrastructure/auth/getUserId';
import { prisma } from '../../../../infrastructure/persistence/prisma/client';
import { PrismaEdgeRepository } from '../../../../infrastructure/persistence/prisma/repositories/PrismaEdgeRepository';
import { PrismaNodeRepository } from '../../../../infrastructure/persistence/prisma/repositories/PrismaNodeRepository';
import { PrismaProjectRepository } from '../../../../infrastructure/persistence/prisma/repositories/PrismaProjectRepository';
import { CanvasInitializer } from '../../../../presentation/canvas/CanvasInitializer';
import { coreEdgeToFlow } from '../../../../presentation/canvas/mappers/edgeMapper';
import { coreNodeToFlow } from '../../../../presentation/canvas/mappers/nodeMapper';

type ProjectPageProps = {
  params: {
    id: string;
  };
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;

  const userId = await getUserId();

  let projectId: ProjectId;

  try {
    projectId = ProjectId.from(id);
  } catch {
    notFound();
  }

  const projectRepository = new PrismaProjectRepository(prisma);
  const nodeRepository = new PrismaNodeRepository(prisma);
  const edgeRepository = new PrismaEdgeRepository(prisma);

  const project = await projectRepository.findById(projectId);

  if (!project || project.ownerId !== userId) {
    notFound();
  }

  const [nodes, edges] = await Promise.all([
    nodeRepository.findAllByProject(projectId),
    edgeRepository.findAllByProject(projectId),
  ]);

  return (
    <CanvasInitializer
      projectId={id}
      projectName={project.name}
      initialNodes={nodes.map((node) => coreNodeToFlow(node, id))}
      initialEdges={edges.map((edge) => coreEdgeToFlow(edge))}
    />
  );
}
