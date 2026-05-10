import { PrismaClient } from '@prisma/client';
import { randomUUID } from 'crypto';
import { afterAll, beforeEach, describe, expect, it } from 'vitest';

import { FlowchartElement } from '../../../../core/domain/entities/FlowchartElement';
import { Project } from '../../../../core/domain/entities/Project';
import { FlowchartElementId } from '../../../../core/domain/value-objects/FlowchartElementId';
import { FlowchartElementType } from '../../../../core/domain/value-objects/FlowchartElementType';
import { NodeId } from '../../../../core/domain/value-objects/NodeId';
import { Position } from '../../../../core/domain/value-objects/Position';
import { ProjectId } from '../../../../core/domain/value-objects/ProjectId';
import { Size } from '../../../../core/domain/value-objects/Size';
import { PrismaFlowchartElementRepository } from '../repositories/PrismaFlowchartElementRepository';
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
  await testPrisma.flowchartConnection.deleteMany();
  await testPrisma.flowchartElement.deleteMany();
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

describe('PrismaFlowchartElementRepository (integration)', () => {
  const flowchartElementRepository = new PrismaFlowchartElementRepository(testPrisma);
  const projectRepository = new PrismaProjectRepository(testPrisma);

  beforeEach(async () => {
    await cleanDatabase();
  });

  afterAll(async () => {
    await cleanDatabase();
    await testPrisma.$disconnect();
  });

  it('saves and retrieves flowchart element', async () => {
    const project = await createProject(projectRepository);

    const element = new FlowchartElement({
      id: FlowchartElementId.from(randomUUID()),
      projectId: project.id,
      type: FlowchartElementType.from('decision'),
      label: 'Decision',
      position: Position.from(10, 20),
      size: Size.from(180, 120),
      scopeId: undefined,
    });

    await flowchartElementRepository.save(element);

    const found = await flowchartElementRepository.findById(element.id);

    expect(found).not.toBeNull();
    expect(found?.id.toString()).toBe(element.id.toString());
    expect(found?.type.toString()).toBe('decision');
    expect(found?.label).toBe('Decision');
    expect(found?.position.x).toBe(10);
    expect(found?.position.y).toBe(20);
    expect(found?.size.width).toBe(180);
    expect(found?.size.height).toBe(120);
  });

  it('updates existing flowchart element with upsert', async () => {
    const project = await createProject(projectRepository);

    const element = new FlowchartElement({
      id: FlowchartElementId.from(randomUUID()),
      projectId: project.id,
      type: FlowchartElementType.from('process'),
      label: 'Process',
      position: Position.from(0, 0),
      size: Size.from(160, 80),
    });

    await flowchartElementRepository.save(element);

    const updated = element
      .rename('')
      .moveTo(Position.from(50, 60))
      .resize(Size.from(240, 100));

    await flowchartElementRepository.save(updated);

    const found = await flowchartElementRepository.findById(element.id);

    expect(found?.label).toBe('');
    expect(found?.position.x).toBe(50);
    expect(found?.position.y).toBe(60);
    expect(found?.size.width).toBe(240);
    expect(found?.size.height).toBe(100);
  });

  it('retrieves all flowchart elements by project', async () => {
    const project = await createProject(projectRepository);

    const first = new FlowchartElement({
      id: FlowchartElementId.from(randomUUID()),
      projectId: project.id,
      type: FlowchartElementType.from('terminator'),
      label: 'Start / End',
      position: Position.from(0, 0),
      size: Size.from(160, 80),
    });

    const second = new FlowchartElement({
      id: FlowchartElementId.from(randomUUID()),
      projectId: project.id,
      type: FlowchartElementType.from('data'),
      label: 'Data',
      position: Position.from(20, 30),
      size: Size.from(160, 80),
    });

    await flowchartElementRepository.save(first);
    await flowchartElementRepository.save(second);

    const all = await flowchartElementRepository.findAllByProject(project.id);

    expect(all).toHaveLength(2);
    expect(all.map((item) => item.type.toString()).sort()).toEqual([
      'data',
      'terminator',
    ]);
  });

  it('preserves scopeId', async () => {
    const project = await createProject(projectRepository);
    const scopeId = NodeId.from(randomUUID());

    const element = new FlowchartElement({
      id: FlowchartElementId.from(randomUUID()),
      projectId: project.id,
      type: FlowchartElementType.from('process'),
      label: 'Process',
      position: Position.from(0, 0),
      size: Size.from(160, 80),
      scopeId,
    });

    await flowchartElementRepository.save(element);

    const found = await flowchartElementRepository.findById(element.id);

    expect(found?.scopeId?.toString()).toBe(scopeId.toString());
  });

  it('deletes flowchart element', async () => {
    const project = await createProject(projectRepository);

    const element = new FlowchartElement({
      id: FlowchartElementId.from(randomUUID()),
      projectId: project.id,
      type: FlowchartElementType.from('process'),
      label: 'Process',
      position: Position.from(0, 0),
      size: Size.from(160, 80),
    });

    await flowchartElementRepository.save(element);
    await flowchartElementRepository.delete(element.id);

    const found = await flowchartElementRepository.findById(element.id);

    expect(found).toBeNull();
  });
});