import { PrismaClient } from '@prisma/client';
import { randomUUID } from 'crypto';
import { afterAll, beforeEach, describe, expect, it } from 'vitest';

import { FlowchartConnection } from '../../../../core/domain/entities/FlowchartConnection';
import { Project } from '../../../../core/domain/entities/Project';
import { FlowchartConnectionId } from '../../../../core/domain/value-objects/FlowchartConnectionId';
import { FlowchartConnectionType } from '../../../../core/domain/value-objects/FlowchartConnectionType';
import { FlowchartEndpoint } from '../../../../core/domain/value-objects/FlowchartEndpoint';
import { NodeId } from '../../../../core/domain/value-objects/NodeId';
import { ProjectId } from '../../../../core/domain/value-objects/ProjectId';
import { PrismaFlowchartConnectionRepository } from '../repositories/PrismaFlowchartConnectionRepository';
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

describe('PrismaFlowchartConnectionRepository (integration)', () => {
  const connectionRepository = new PrismaFlowchartConnectionRepository(testPrisma);
  const projectRepository = new PrismaProjectRepository(testPrisma);

  beforeEach(async () => {
    await cleanDatabase();
  });

  afterAll(async () => {
    await cleanDatabase();
    await testPrisma.$disconnect();
  });

  it('saves and retrieves flowchart connection', async () => {
    const project = await createProject(projectRepository);

    const connection = new FlowchartConnection({
      id: FlowchartConnectionId.from(randomUUID()),
      projectId: project.id,
      source: FlowchartEndpoint.from({
        kind: 'flowchart-element',
        id: 'shape-a',
        anchor: 'right:source',
      }),
      target: FlowchartEndpoint.from({
        kind: 'flowchart-element',
        id: 'shape-b',
        anchor: 'left:target',
      }),
      type: FlowchartConnectionType.flow(),
      label: 'Yes',
    });

    await connectionRepository.save(connection);

    const found = await connectionRepository.findById(connection.id);

    expect(found).not.toBeNull();
    expect(found?.id.toString()).toBe(connection.id.toString());
    expect(found?.source.kind).toBe('flowchart-element');
    expect(found?.source.id).toBe('shape-a');
    expect(found?.source.anchor).toBe('right:source');
    expect(found?.target.id).toBe('shape-b');
    expect(found?.target.anchor).toBe('left:target');
    expect(found?.type.toString()).toBe('flow');
    expect(found?.label).toBe('Yes');
  });

  it('updates existing flowchart connection with upsert', async () => {
    const project = await createProject(projectRepository);

    const connection = new FlowchartConnection({
      id: FlowchartConnectionId.from(randomUUID()),
      projectId: project.id,
      source: FlowchartEndpoint.from({
        kind: 'flowchart-element',
        id: 'shape-a',
        anchor: 'right:source',
      }),
      target: FlowchartEndpoint.from({
        kind: 'flowchart-element',
        id: 'shape-b',
        anchor: 'left:target',
      }),
      type: FlowchartConnectionType.flow(),
      label: 'Yes',
    });

    await connectionRepository.save(connection);

    const updated = connection.relabel('');

    await connectionRepository.save(updated);

    const found = await connectionRepository.findById(connection.id);

    expect(found?.label).toBe('');
  });

  it('retrieves all flowchart connections by project', async () => {
    const project = await createProject(projectRepository);

    const first = new FlowchartConnection({
      id: FlowchartConnectionId.from(randomUUID()),
      projectId: project.id,
      source: FlowchartEndpoint.from({
        kind: 'flowchart-element',
        id: 'shape-a',
        anchor: 'right:source',
      }),
      target: FlowchartEndpoint.from({
        kind: 'flowchart-element',
        id: 'shape-b',
        anchor: 'left:target',
      }),
      type: FlowchartConnectionType.flow(),
    });

    const second = new FlowchartConnection({
      id: FlowchartConnectionId.from(randomUUID()),
      projectId: project.id,
      source: FlowchartEndpoint.from({
        kind: 'node',
        id: randomUUID(),
        anchor: 'right:source',
      }),
      target: FlowchartEndpoint.from({
        kind: 'port',
        id: `${randomUUID()}:left`,
        anchor: 'external',
      }),
      type: FlowchartConnectionType.flow(),
      label: '',
    });

    await connectionRepository.save(first);
    await connectionRepository.save(second);

    const all = await connectionRepository.findAllByProject(project.id);

    expect(all).toHaveLength(2);
  });

  it('preserves scopeId', async () => {
    const project = await createProject(projectRepository);
    const scopeId = NodeId.from(randomUUID());

    const connection = new FlowchartConnection({
      id: FlowchartConnectionId.from(randomUUID()),
      projectId: project.id,
      scopeId,
      source: FlowchartEndpoint.from({
        kind: 'flowchart-element',
        id: 'shape-a',
        anchor: 'bottom:source',
      }),
      target: FlowchartEndpoint.from({
        kind: 'flowchart-element',
        id: 'shape-b',
        anchor: 'top:target',
      }),
      type: FlowchartConnectionType.flow(),
    });

    await connectionRepository.save(connection);

    const found = await connectionRepository.findById(connection.id);

    expect(found?.scopeId?.toString()).toBe(scopeId.toString());
  });

  it('deletes flowchart connection', async () => {
    const project = await createProject(projectRepository);

    const connection = new FlowchartConnection({
      id: FlowchartConnectionId.from(randomUUID()),
      projectId: project.id,
      source: FlowchartEndpoint.from({
        kind: 'flowchart-element',
        id: 'shape-a',
        anchor: 'right:source',
      }),
      target: FlowchartEndpoint.from({
        kind: 'flowchart-element',
        id: 'shape-b',
        anchor: 'left:target',
      }),
      type: FlowchartConnectionType.flow(),
    });

    await connectionRepository.save(connection);
    await connectionRepository.delete(connection.id);

    const found = await connectionRepository.findById(connection.id);

    expect(found).toBeNull();
  });
});