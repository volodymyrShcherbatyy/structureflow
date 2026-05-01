import { PrismaClient } from '@prisma/client';
import { randomUUID } from 'crypto';
import { afterAll, beforeEach, describe, expect, it } from 'vitest';
import { Edge } from '../../../../core/domain/entities/Edge';
import { Node } from '../../../../core/domain/entities/Node';
import { Project } from '../../../../core/domain/entities/Project';
import { EdgeId } from '../../../../core/domain/value-objects/EdgeId';
import { EdgeType } from '../../../../core/domain/value-objects/EdgeType';
import { NodeId } from '../../../../core/domain/value-objects/NodeId';
import { NodeType } from '../../../../core/domain/value-objects/NodeType';
import { Position } from '../../../../core/domain/value-objects/Position';
import { ProjectId } from '../../../../core/domain/value-objects/ProjectId';
import { PrismaEdgeRepository } from '../repositories/PrismaEdgeRepository';
import { PrismaNodeRepository } from '../repositories/PrismaNodeRepository';
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
  await testPrisma.port.deleteMany();
  await testPrisma.node.deleteMany();
  await testPrisma.project.deleteMany();
  await testPrisma.session.deleteMany();
  await testPrisma.account.deleteMany();
  await testPrisma.user.deleteMany();
};

const createUser = async (id = 'owner-1') => {
  return testPrisma.user.upsert({
    where: { id },
    update: {},
    create: {
      id,
      email: `${id}@example.com`,
      name: id,
    },
  });
};

describe('PrismaNodeRepository (integration)', () => {
  const nodeRepository = new PrismaNodeRepository(testPrisma);
  const edgeRepository = new PrismaEdgeRepository(testPrisma);
  const projectRepository = new PrismaProjectRepository(testPrisma);

  beforeEach(async () => {
    await cleanDatabase();
  });

  afterAll(async () => {
    await cleanDatabase();
    await testPrisma.$disconnect();
  });

  it('save node', async () => {
    const project = new Project({
      id: ProjectId.from(randomUUID()),
      name: 'Project',
      ownerId: 'owner-1',
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await createUser('owner-1');

    await projectRepository.save(project);

    const node = new Node({
      id: NodeId.from(randomUUID()),
      type: NodeType.from('container'),
      label: 'Frontend',
      description: 'desc',
      position: Position.from(10, 20),
      parentId: undefined,
      projectId: project.id,
    });

    await nodeRepository.save(node);

    const found = await nodeRepository.findById(node.id);

    expect(found).not.toBeNull();
    expect(found?.label).toBe('Frontend');
  });

  it('retrieve by project', async () => {
    await createUser('owner-1');
    const project = await testPrisma.project.create({
      data: { name: 'Project', ownerId: 'owner-1' },
    });

    const first = new Node({
      id: NodeId.from(randomUUID()),
      type: NodeType.from('container'),
      label: 'A',
      description: undefined,
      position: Position.from(0, 0),
      parentId: undefined,
      projectId: ProjectId.from(project.id),
    });

    const second = new Node({
      id: NodeId.from(randomUUID()),
      type: NodeType.from('component'),
      label: 'B',
      description: undefined,
      position: Position.from(1, 1),
      parentId: undefined,
      projectId: ProjectId.from(project.id),
    });

    await nodeRepository.saveMany([first, second]);

    const all = await nodeRepository.findAllByProject(ProjectId.from(project.id));
    expect(all).toHaveLength(2);
  });

  it('nested nodes (parentId)', async () => {
    const project = new Project({
      id: ProjectId.from(randomUUID()),
      name: 'Project',
      ownerId: 'owner-1',
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await createUser('owner-1');

    await projectRepository.save(project);

    const parent = new Node({
      id: NodeId.from(randomUUID()),
      type: NodeType.from('container'),
      label: 'Parent',
      description: undefined,
      position: Position.from(0, 0),
      parentId: undefined,
      projectId: project.id,
    });

    await nodeRepository.save(parent);

    const child = new Node({
      id: NodeId.from(randomUUID()),
      type: NodeType.from('component'),
      label: 'Child',
      description: undefined,
      position: Position.from(2, 2),
      parentId: parent.id,
      projectId: project.id,
    });

    await nodeRepository.save(child);

    const found = await nodeRepository.findById(child.id);
    expect(found?.parentId?.toString()).toBe(parent.id.toString());
  });

  it('cascade delete edges when node deleted', async () => {
    const project = new Project({
      id: ProjectId.from(randomUUID()),
      name: 'Project',
      ownerId: 'owner-1',
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await createUser('owner-1');

    await projectRepository.save(project);

    const parentNode = new Node({
      id: NodeId.from(randomUUID()),
      type: NodeType.from('container'),
      label: 'Parent',
      description: undefined,
      position: Position.from(0, 0),
      parentId: undefined,
      projectId: project.id,
    });

    await nodeRepository.save(parentNode);

    const childNode = new Node({
      id: NodeId.from(randomUUID()),
      type: NodeType.from('component'),
      label: 'Child',
      description: undefined,
      position: Position.from(1, 1),
      parentId: parentNode.id,
      projectId: project.id,
    });

    await nodeRepository.save(childNode);

    const edge = new Edge({
      id: EdgeId.from(randomUUID()),
      type: EdgeType.from('dependency'),
      sourceId: parentNode.id,
      targetId: childNode.id,
      label: undefined,
      projectId: project.id,
    });

    await edgeRepository.save(edge);

    await nodeRepository.delete(parentNode.id);

    const remaining = await edgeRepository.findAllByProject(project.id);
    expect(remaining).toHaveLength(0);
  });
});