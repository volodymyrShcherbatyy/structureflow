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
  await testPrisma.node.deleteMany();
  await testPrisma.project.deleteMany();
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

    await projectRepository.save(project);

    const node = new Node({
      id: NodeId.from(randomUUID()),
      type: NodeType.from('container'),
      label: 'Frontend',
      description: 'desc',
      position: new Position(10, 20),
      parentId: undefined,
    });

    await nodeRepository.save(node, project.id);

    const found = await nodeRepository.findById(node.id);

    expect(found).not.toBeNull();
    expect(found?.label).toBe('Frontend');
  });

  it('retrieve by project', async () => {
    const project = await testPrisma.project.create({
      data: { name: 'Project', ownerId: 'owner-1' },
    });

    const first = new Node({
      id: NodeId.from(randomUUID()),
      type: NodeType.from('container'),
      label: 'A',
      description: undefined,
      position: new Position(0, 0),
      parentId: undefined,
    });

    const second = new Node({
      id: NodeId.from(randomUUID()),
      type: NodeType.from('component'),
      label: 'B',
      description: undefined,
      position: new Position(1, 1),
      parentId: undefined,
    });

    await nodeRepository.saveMany([first, second], ProjectId.from(project.id));

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

    await projectRepository.save(project);

    const parent = new Node({
      id: NodeId.from(randomUUID()),
      type: NodeType.from('container'),
      label: 'Parent',
      description: undefined,
      position: new Position(0, 0),
      parentId: undefined,
    });

    await nodeRepository.save(parent, project.id);

    const child = new Node({
      id: NodeId.from(randomUUID()),
      type: NodeType.from('component'),
      label: 'Child',
      description: undefined,
      position: new Position(2, 2),
      parentId: parent.id,
    });

    await nodeRepository.save(child, project.id);

    const found = await nodeRepository.findById(child.id);
    expect(found?.parentId?.value).toBe(parent.id.value);
  });

  it('cascade delete edges when node deleted', async () => {
    const project = new Project({
      id: ProjectId.from(randomUUID()),
      name: 'Project',
      ownerId: 'owner-1',
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await projectRepository.save(project);

    const parentNode = new Node({
      id: NodeId.from(randomUUID()),
      type: NodeType.from('container'),
      label: 'Parent',
      description: undefined,
      position: new Position(0, 0),
      parentId: undefined,
    });

    await nodeRepository.save(parentNode, project.id);

    const childNode = new Node({
      id: NodeId.from(randomUUID()),
      type: NodeType.from('component'),
      label: 'Child',
      description: undefined,
      position: new Position(1, 1),
      parentId: parentNode.id,
    });

    await nodeRepository.save(childNode, project.id);

    const edge = new Edge({
      id: EdgeId.from(randomUUID()),
      type: EdgeType.from('dependency'),
      sourceId: parentNode.id,
      targetId: childNode.id,
      label: undefined,
    });

    await edgeRepository.save(edge, project.id);

    await nodeRepository.delete(parentNode.id);

    const remaining = await edgeRepository.findAllByProject(project.id);
    expect(remaining).toHaveLength(0);
  });
});