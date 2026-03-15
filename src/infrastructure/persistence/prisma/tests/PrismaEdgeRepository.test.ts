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
  await testPrisma.$transaction([
    testPrisma.edge.deleteMany(),
    testPrisma.node.deleteMany(),
    testPrisma.project.deleteMany(),
  ]);
};

const createProject = async (
  projectRepository: PrismaProjectRepository,
): Promise<Project> => {
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
    position: new Position(x, y),
    parentId: undefined,
  });

  await nodeRepository.save(node, projectId);
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
      position: new Position(0, 0),
      parentId: undefined,
    });

    const targetNode = new Node({
      id: NodeId.from(randomUUID()),
      type: NodeType.from('component'),
      label: 'Target',
      description: undefined,
      position: new Position(0, 0),
      parentId: undefined,
    });

    await nodeRepository.save(sourceNode, project.id);
    await nodeRepository.save(targetNode, project.id);

    const edge = new Edge({
      id: EdgeId.from(randomUUID()),
      type: EdgeType.from('dependency'),
      sourceId: sourceNode.id,
      targetId: targetNode.id,
      label: 'depends-on',
    });

    expect(edge.sourceId.value).toBe(sourceNode.id.value);
    expect(edge.targetId.value).toBe(targetNode.id.value);

    await edgeRepository.save(edge, project.id);

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
      position: new Position(0, 0),
      parentId: undefined,
    });

    const targetNode = new Node({
      id: NodeId.from(randomUUID()),
      type: NodeType.from('component'),
      label: 'N2',
      description: undefined,
      position: new Position(1, 1),
      parentId: undefined,
    });

    await nodeRepository.save(sourceNode, project.id);
    await nodeRepository.save(targetNode, project.id);

    const edge = new Edge({
      id: EdgeId.from(randomUUID()),
      type: EdgeType.from('data-flow'),
      sourceId: sourceNode.id,
      targetId: targetNode.id,
      label: undefined,
    });

    await edgeRepository.save(edge, project.id);

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
    });

    await edgeRepository.save(edge, project.id);

    const edges = await edgeRepository.findAllByProject(project.id);

    expect(edges).toHaveLength(1);
  });
});