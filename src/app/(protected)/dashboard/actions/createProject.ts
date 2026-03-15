'use server';

import { CreateProject } from '../../../../../core/application/use-cases/project/CreateProject';
import { getServerSession } from '../../../../../infrastructure/auth/nextauth/getServerSession';
import { prisma } from '../../../../../infrastructure/persistence/prisma/client';
import { PrismaProjectRepository } from '../../../../../infrastructure/persistence/prisma/repositories/PrismaProjectRepository';

export async function createProjectAction(name: string) {
  const session = await getServerSession();

  if (!session?.user?.id) {
    throw new Error('Unauthorized');
  }

  const projectRepository = new PrismaProjectRepository(prisma);
  const createProject = new CreateProject(projectRepository);

  return createProject.execute({
    name,
    ownerId: session.user.id,
  });
}
