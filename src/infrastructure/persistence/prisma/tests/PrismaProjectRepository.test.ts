import { PrismaClient } from '@prisma/client';
import { randomUUID } from 'node:crypto';
import { afterAll, beforeEach, describe, expect, it } from 'vitest';
import { Project } from '../../../../core/domain/entities/Project';
import { ProjectId } from '../../../../core/domain/value-objects/ProjectId';
import { PrismaProjectRepository } from '../repositories/PrismaProjectRepository';

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error('DATABASE_URL must be defined for integration tests.');
}

const testPrisma = new PrismaClient({
  datasources: {
    db: {
      url: databaseUrl,
    },
  },
});

const cleanDatabase = async (): Promise<void> => {
  await testPrisma.edge.deleteMany();
  await testPrisma.node.deleteMany();
  await testPrisma.project.deleteMany();
};

const makeProject = (name: string, ownerId: string): Project =>
  new Project({
    id: ProjectId.from(randomUUID()),
    name,
    ownerId,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

describe('PrismaProjectRepository (integration)', () => {
  const repository = new PrismaProjectRepository(testPrisma);

  beforeEach(async () => {
    await cleanDatabase();
  });

  afterAll(async () => {
    await cleanDatabase();
    await testPrisma.$disconnect();
  });

  it('save and retrieve', async () => {
    const project = makeProject('Project One', 'owner-1');

    await repository.save(project);

    const found = await repository.findById(project.id);

    expect(found).not.toBeNull();
    expect(found?.name).toBe('Project One');
    expect(found?.ownerId).toBe('owner-1');
  });

  it('update via upsert', async () => {
    const project = makeProject('Old Name', 'owner-1');

    await repository.save(project);

    const renamed = new Project({
      id: project.id,
      name: 'New Name',
      ownerId: project.ownerId,
      createdAt: project.createdAt,
      updatedAt: project.updatedAt,
    });

    await repository.save(renamed);

    const found = await repository.findById(project.id);

    expect(found?.name).toBe('New Name');
  });

  it('findAllByOwner', async () => {
    const first = makeProject('A', 'owner-1');
    const second = makeProject('B', 'owner-1');
    const third = makeProject('C', 'owner-2');

    await repository.save(first);
    await repository.save(second);
    await repository.save(third);

    const owned = await repository.findAllByOwner('owner-1');

    expect(owned).toHaveLength(2);
  });

  it('delete with cascade', async () => {
    const project = makeProject('Cascade', 'owner-1');
    await repository.save(project);

    await repository.delete(ProjectId.from(project.id.value));

    const found = await repository.findById(project.id);
    expect(found).toBeNull();
  });
});