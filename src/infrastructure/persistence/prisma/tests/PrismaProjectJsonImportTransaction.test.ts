import { PrismaClient } from '@prisma/client';
import { describe, expect, it, beforeEach, afterAll } from 'vitest';

import { ImportProjectJson } from '../../../../core/application/use-cases/project/ImportProjectJson';
import {
  STRUCTUREFLOW_PROJECT_FORMAT,
  STRUCTUREFLOW_PROJECT_VERSION,
  StructureFlowProjectJsonV1,
} from '../../../../core/application/use-cases/project/ProjectJsonSnapshot';
import { IFlowchartConnectionRepository } from '../../../../core/application/ports/IFlowchartConnectionRepository';
import { FlowchartConnection } from '../../../../core/domain/entities/FlowchartConnection';
import { FlowchartConnectionId } from '../../../../core/domain/value-objects/FlowchartConnectionId';
import { ProjectId } from '../../../../core/domain/value-objects/ProjectId';
import { PrismaEdgeRepository } from '../repositories/PrismaEdgeRepository';
import { PrismaFlowchartConnectionRepository } from '../repositories/PrismaFlowchartConnectionRepository';
import { PrismaFlowchartElementRepository } from '../repositories/PrismaFlowchartElementRepository';
import { PrismaNodeRepository } from '../repositories/PrismaNodeRepository';
import { PrismaPortRepository } from '../repositories/PrismaPortRepository';
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

class FailingFlowchartConnectionRepository
  implements IFlowchartConnectionRepository
{
  constructor(
    private readonly delegate: PrismaFlowchartConnectionRepository,
  ) {}

  async findById(id: FlowchartConnectionId): Promise<FlowchartConnection | null> {
    return this.delegate.findById(id);
  }

  async findAllByProject(projectId: ProjectId): Promise<FlowchartConnection[]> {
    return this.delegate.findAllByProject(projectId);
  }

  async save(): Promise<void> {
    throw new Error('Simulated flowchart connection persistence failure.');
  }

  async delete(id: FlowchartConnectionId): Promise<void> {
    return this.delegate.delete(id);
  }

  async deleteByEndpoint(kind: string, id: string): Promise<void> {
    return this.delegate.deleteByEndpoint(kind, id);
  }

  async deleteByEndpoints(
    endpoints: Array<{ kind: string; id: string }>,
  ): Promise<void> {
    return this.delegate.deleteByEndpoints(endpoints);
  }
}

function createValidSnapshot(): StructureFlowProjectJsonV1 {
  return {
    format: STRUCTUREFLOW_PROJECT_FORMAT,
    version: STRUCTUREFLOW_PROJECT_VERSION,
    exportedAt: '2026-01-01T00:00:00.000Z',
    project: {
      name: 'Transactional Import',
    },
    nodes: [
      {
        id: '11111111-1111-4111-8111-111111111111',
        type: 'system',
        label: 'System',
        description: 'Root system',
        x: 10,
        y: 20,
      },
      {
        id: '22222222-2222-4222-8222-222222222222',
        type: 'component',
        label: 'Component',
        description: 'Nested component',
        x: 100,
        y: 120,
        parentId: '11111111-1111-4111-8111-111111111111',
      },
    ],
    ports: [
      {
        id: '11111111-1111-4111-8111-111111111111:right',
        nodeId: '11111111-1111-4111-8111-111111111111',
        side: 'right',
        x: 960,
        y: 300,
        externalHandleOffset: 0.75,
      },
    ],
    edges: [
      {
        id: '33333333-3333-4333-8333-333333333333',
        type: 'api',
        sourceId: '11111111-1111-4111-8111-111111111111',
        targetId: '22222222-2222-4222-8222-222222222222',
        label: 'calls',
        sourceHandle: 'right',
        targetHandle: 'left',
      },
    ],
    flowchartElements: [
      {
        id: '44444444-4444-4444-8444-444444444444',
        type: 'decision',
        label: 'Decision',
        x: 200,
        y: 220,
        width: 180,
        height: 90,
        scopeId: '11111111-1111-4111-8111-111111111111',
      },
    ],
    flowchartConnections: [
      {
        id: '55555555-5555-4555-8555-555555555555',
        type: 'flow',
        label: 'Yes',
        scopeId: '11111111-1111-4111-8111-111111111111',
        source: {
          kind: 'port',
          id: '11111111-1111-4111-8111-111111111111:right',
          anchor: 'external',
        },
        target: {
          kind: 'flowchart-element',
          id: '44444444-4444-4444-8444-444444444444',
          anchor: 'left:target',
        },
      },
    ],
  };
}

describe('Project JSON import transaction (integration)', () => {
  beforeEach(async () => {
    await cleanDatabase();
  });

  afterAll(async () => {
    await cleanDatabase();
    await testPrisma.$disconnect();
  });

  it('rolls back the whole import when a later repository write fails', async () => {
    await createUser('owner-1');

    await expect(
      testPrisma.$transaction(async (tx) => {
        const importProjectJson = new ImportProjectJson(
          new PrismaProjectRepository(tx),
          new PrismaNodeRepository(tx),
          new PrismaEdgeRepository(tx),
          new PrismaPortRepository(tx),
          new PrismaFlowchartElementRepository(tx),
          new FailingFlowchartConnectionRepository(
            new PrismaFlowchartConnectionRepository(tx),
          ),
        );

        await importProjectJson.execute({
          ownerId: 'owner-1',
          snapshot: createValidSnapshot(),
        });
      }),
    ).rejects.toThrow('Simulated flowchart connection persistence failure.');

    await expect(testPrisma.project.count()).resolves.toBe(0);
    await expect(testPrisma.node.count()).resolves.toBe(0);
    await expect(testPrisma.port.count()).resolves.toBe(0);
    await expect(testPrisma.edge.count()).resolves.toBe(0);
    await expect(testPrisma.flowchartElement.count()).resolves.toBe(0);
    await expect(testPrisma.flowchartConnection.count()).resolves.toBe(0);
  });
});