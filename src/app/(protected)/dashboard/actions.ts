'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { CreateProject } from '../../../core/application/use-cases/project/CreateProject';
import { DeleteProject } from '../../../core/application/use-cases/project/DeleteProject';
import { RenameProject } from '../../../core/application/use-cases/project/RenameProject';
import { ProjectId } from '../../../core/domain/value-objects/ProjectId';
import { getUserId } from '../../../infrastructure/auth/getUserId';
import { prisma } from '../../../infrastructure/persistence/prisma/client';
import { PrismaProjectRepository } from '../../../infrastructure/persistence/prisma/repositories/PrismaProjectRepository';

const MAX_PROJECT_NAME_LENGTH = 100;

function validateName(name: string): string {
  const normalizedName = name.trim();

  if (!normalizedName) {
    throw new Error('Project name is required.');
  }

  if (normalizedName.length > MAX_PROJECT_NAME_LENGTH) {
    throw new Error(`Project name must be ${MAX_PROJECT_NAME_LENGTH} characters or fewer.`);
  }

  return normalizedName;
}

async function assertOwnership(projectId: string, userId: string) {
  const projectRepository = new PrismaProjectRepository(prisma);
  const project = await projectRepository.findById(ProjectId.from(projectId));

  if (!project) {
    throw new Error('Project not found.');
  }

  if (project.ownerId !== userId) {
    throw new Error('You do not have access to this project.');
  }

  return { projectRepository, project };
}

export async function createProjectAction(formData: FormData) {
  const userId = await getUserId();

  let name: string;

  try {
    name = validateName(String(formData.get('name') ?? ''));
  } catch (error) {
    return { error: error instanceof Error ? error.message : 'Unable to create project.' };
  }

  const projectRepository = new PrismaProjectRepository(prisma);
  const createProject = new CreateProject(projectRepository);
  const { project } = await createProject.execute({ name, ownerId: userId });

  revalidatePath('/dashboard');
  redirect(`/project/${project.id.toString()}`);
}

export async function renameProjectAction(projectId: string, newName: string) {
  const userId = await getUserId();

  try {
    const name = validateName(newName);
    const { projectRepository } = await assertOwnership(projectId, userId);
    const renameProject = new RenameProject(projectRepository);

    await renameProject.execute({ projectId, name });
    revalidatePath('/dashboard');

    return { success: true as const };
  } catch (error) {
    return { error: error instanceof Error ? error.message : 'Unable to rename project.' };
  }
}

export async function deleteProjectAction(projectId: string) {
  const userId = await getUserId();

  try {
    const { projectRepository } = await assertOwnership(projectId, userId);
    const deleteProject = new DeleteProject(projectRepository);

    await deleteProject.execute({ projectId });
    revalidatePath('/dashboard');

    return { success: true as const };
  } catch (error) {
    return { error: error instanceof Error ? error.message : 'Unable to delete project.' };
  }
}
