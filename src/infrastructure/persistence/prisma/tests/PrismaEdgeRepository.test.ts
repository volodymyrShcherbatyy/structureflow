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

const createProject = async (
  projectRepository: PrismaProjectRepository,
): Promise<Project> => {
  await createUser('owner-1');

  const project = new Project({
    id: ProjectId.from(randomUUID()),
    name: 'Project',
    ownerId: 'owner-1',
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  await projectRepository.save(project);
  return project;
};


const createNode = async (
  nodeRepository: PrismaNodeRepository,
  projectId: ProjectId,
  label: string,
  type: 'container' | 'component',
  x: number,
  y: number,
): Promise<Node> => {
  const node = new Node({
    id: NodeId.from(randomUUID()),
    type: NodeType.from(type),
    label,
    description: undefined,
    position: Position.from(x, y),
    parentId: undefined,
    projectId,
  });

  await nodeRepository.save(node);
  return node;
};

describe('PrismaEdgeRepository (integration)', () => {
  const edgeRepository = new PrismaEdgeRepository(testPrisma);
  const nodeRepository = new PrismaNodeRepository(testPrisma);
  const projectRepository = new PrismaProjectRepository(testPrisma);

  beforeEach(async () => {
    await cleanDatabase();
  });

  afterAll(async () => {
    await cleanDatabase();
    await testPrisma.$disconnect();
  });

  it('save edge', async () => {
    const project = await createProject(projectRepository);

    const sourceNode = new Node({
      id: NodeId.from(randomUUID()),
      type: NodeType.from('container'),
      label: 'Source',
      description: undefined,
      position: Position.from(0, 0),
      parentId: undefined,
      projectId: project.id,
    });

    const targetNode = new Node({
      id: NodeId.from(randomUUID()),
      type: NodeType.from('component'),
      label: 'Target',
      description: undefined,
      position: Position.from(0, 0),
      parentId: undefined,
      projectId: project.id,
    });

    await nodeRepository.save(sourceNode);
    await nodeRepository.save(targetNode);

    const edge = new Edge({
      id: EdgeId.from(randomUUID()),
      type: EdgeType.from('dependency'),
      sourceId: sourceNode.id,
      targetId: targetNode.id,
      label: 'depends-on',
      projectId: project.id,
    });

    expect(edge.sourceId.toString()).toBe(sourceNode.id.toString());
    expect(edge.targetId.toString()).toBe(targetNode.id.toString());

    await edgeRepository.save(edge);

    const found = await edgeRepository.findById(edge.id);

    expect(found).not.toBeNull();
    expect(found?.label).toBe('depends-on');
  });

  it('retrieve by node', async () => {
    const project = await createProject(projectRepository);

    const sourceNode = new Node({
      id: NodeId.from(randomUUID()),
      type: NodeType.from('container'),
      label: 'N1',
      description: undefined,
      position: Position.from(0, 0),
      parentId: undefined,
      projectId: project.id,
    });

    const targetNode = new Node({
      id: NodeId.from(randomUUID()),
      type: NodeType.from('component'),
      label: 'N2',
      description: undefined,
      position: Position.from(1, 1),
      parentId: undefined,
      projectId: project.id,
    });

    await nodeRepository.save(sourceNode);
    await nodeRepository.save(targetNode);

    const edge = new Edge({
      id: EdgeId.from(randomUUID()),
      type: EdgeType.from('data-flow'),
      sourceId: sourceNode.id,
      targetId: targetNode.id,
      label: undefined,
      projectId: project.id,
    });

    await edgeRepository.save(edge);

    const byNode = await edgeRepository.findByNode(sourceNode.id);

    expect(byNode).toHaveLength(1);
  });

  it('retrieve by project', async () => {
    const project = await createProject(projectRepository);
    const source = await createNode(nodeRepository, project.id, 'N1', 'container', 0, 0);
    const target = await createNode(nodeRepository, project.id, 'N2', 'component', 1, 1);

    const edge = new Edge({
      id: EdgeId.from(randomUUID()),
      type: EdgeType.from('api'),
      sourceId: source.id,
      targetId: target.id,
      label: 'call',
      projectId: project.id,
    });

    await edgeRepository.save(edge);

    const edges = await edgeRepository.findAllByProject(project.id);

    expect(edges).toHaveLength(1);
  });
});