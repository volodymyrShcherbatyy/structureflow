import { describe, expect, it } from 'vitest';

import { ExportProjectJson } from '../../../application/use-cases/project/ExportProjectJson';
import { ImportProjectJson } from '../../../application/use-cases/project/ImportProjectJson';
import {
  STRUCTUREFLOW_PROJECT_FORMAT,
  STRUCTUREFLOW_PROJECT_VERSION,
  StructureFlowProjectJsonV1,
} from '../../../application/use-cases/project/ProjectJsonSnapshot';
import { Edge } from '../../../domain/entities/Edge';
import { FlowchartConnection } from '../../../domain/entities/FlowchartConnection';
import { FlowchartElement } from '../../../domain/entities/FlowchartElement';
import { Node } from '../../../domain/entities/Node';
import { Port } from '../../../domain/entities/Port';
import { Project } from '../../../domain/entities/Project';
import { EdgeId } from '../../../domain/value-objects/EdgeId';
import { EdgeType } from '../../../domain/value-objects/EdgeType';
import { FlowchartConnectionId } from '../../../domain/value-objects/FlowchartConnectionId';
import { FlowchartConnectionType } from '../../../domain/value-objects/FlowchartConnectionType';
import { FlowchartElementId } from '../../../domain/value-objects/FlowchartElementId';
import { FlowchartElementType } from '../../../domain/value-objects/FlowchartElementType';
import { FlowchartEndpoint } from '../../../domain/value-objects/FlowchartEndpoint';
import { NodeId } from '../../../domain/value-objects/NodeId';
import { NodeType } from '../../../domain/value-objects/NodeType';
import { PortId } from '../../../domain/value-objects/PortId';
import { PortSide } from '../../../domain/value-objects/PortSide';
import { Position } from '../../../domain/value-objects/Position';
import { ProjectId } from '../../../domain/value-objects/ProjectId';
import { Size } from '../../../domain/value-objects/Size';
import { InMemoryEdgeRepository } from '../../fakes/InMemoryEdgeRepository';
import { InMemoryFlowchartConnectionRepository } from '../../fakes/InMemoryFlowchartConnectionRepository';
import { InMemoryFlowchartElementRepository } from '../../fakes/InMemoryFlowchartElementRepository';
import { InMemoryNodeRepository } from '../../fakes/InMemoryNodeRepository';
import { InMemoryPortRepository } from '../../fakes/InMemoryPortRepository';
import { InMemoryProjectRepository } from '../../fakes/InMemoryProjectRepository';

type TestRepositories = {
  projectRepository: InMemoryProjectRepository;
  nodeRepository: InMemoryNodeRepository;
  edgeRepository: InMemoryEdgeRepository;
  portRepository: InMemoryPortRepository;
  flowchartElementRepository: InMemoryFlowchartElementRepository;
  flowchartConnectionRepository: InMemoryFlowchartConnectionRepository;
};

function createRepositories(): TestRepositories {
  return {
    projectRepository: new InMemoryProjectRepository(),
    nodeRepository: new InMemoryNodeRepository(),
    edgeRepository: new InMemoryEdgeRepository(),
    portRepository: new InMemoryPortRepository(),
    flowchartElementRepository: new InMemoryFlowchartElementRepository(),
    flowchartConnectionRepository: new InMemoryFlowchartConnectionRepository(),
  };
}

function createExportUseCase(repositories: TestRepositories): ExportProjectJson {
  return new ExportProjectJson(
    repositories.projectRepository,
    repositories.nodeRepository,
    repositories.edgeRepository,
    repositories.portRepository,
    repositories.flowchartElementRepository,
    repositories.flowchartConnectionRepository,
  );
}

function createImportUseCase(repositories: TestRepositories): ImportProjectJson {
  return new ImportProjectJson(
    repositories.projectRepository,
    repositories.nodeRepository,
    repositories.edgeRepository,
    repositories.portRepository,
    repositories.flowchartElementRepository,
    repositories.flowchartConnectionRepository,
  );
}

async function seedProject(repositories: TestRepositories) {
  const project = new Project({
    id: ProjectId.create(),
    name: 'Source Project',
    ownerId: 'owner-1',
    createdAt: new Date('2026-01-01T00:00:00.000Z'),
    updatedAt: new Date('2026-01-01T00:00:00.000Z'),
  });

  await repositories.projectRepository.save(project);

  const systemNode = new Node({
    id: NodeId.create(),
    projectId: project.id,
    type: NodeType.from('system'),
    label: 'System',
    description: 'Root system',
    position: Position.from(10, 20),
  });

  const componentNode = new Node({
    id: NodeId.create(),
    projectId: project.id,
    type: NodeType.from('component'),
    label: 'Component',
    description: 'Nested component',
    position: Position.from(100, 120),
    parentId: systemNode.id,
  });

  await repositories.nodeRepository.saveMany([systemNode, componentNode]);

  const systemRightPort = new Port({
    id: PortId.fromNodeAndSide(systemNode.id.toString(), 'right'),
    nodeId: systemNode.id,
    projectId: project.id,
    side: PortSide.from('right'),
    position: Position.from(960, 300),
    externalHandleOffset: 0.75,
  });

  const componentLeftPort = new Port({
    id: PortId.fromNodeAndSide(componentNode.id.toString(), 'left'),
    nodeId: componentNode.id,
    projectId: project.id,
    side: PortSide.from('left'),
    position: Position.from(-160, 300),
    externalHandleOffset: 0.25,
  });

  await repositories.portRepository.saveMany([
    systemRightPort,
    componentLeftPort,
  ]);

  const edge = new Edge({
    id: EdgeId.create(),
    projectId: project.id,
    type: EdgeType.from('api'),
    sourceId: systemNode.id,
    targetId: componentNode.id,
    label: 'calls',
    sourceHandle: 'right',
    targetHandle: 'left',
  });

  await repositories.edgeRepository.save(edge);

  const flowchartElement = new FlowchartElement({
    id: FlowchartElementId.create(),
    projectId: project.id,
    type: FlowchartElementType.from('decision'),
    label: 'Decision',
    position: Position.from(200, 220),
    size: Size.from(180, 90),
    scopeId: systemNode.id,
  });

  await repositories.flowchartElementRepository.save(flowchartElement);

  const flowchartConnection = new FlowchartConnection({
    id: FlowchartConnectionId.create(),
    projectId: project.id,
    type: FlowchartConnectionType.from('flow'),
    label: 'Yes',
    scopeId: systemNode.id,
    source: FlowchartEndpoint.from({
      kind: 'port',
      id: systemRightPort.id.toString(),
      anchor: 'external',
    }),
    target: FlowchartEndpoint.from({
      kind: 'flowchart-element',
      id: flowchartElement.id.toString(),
      anchor: 'left:target',
    }),
  });

  await repositories.flowchartConnectionRepository.save(flowchartConnection);

  return {
    project,
    systemNode,
    componentNode,
    systemRightPort,
    componentLeftPort,
    edge,
    flowchartElement,
    flowchartConnection,
  };
}

function cloneSnapshot(
  snapshot: StructureFlowProjectJsonV1,
): StructureFlowProjectJsonV1 {
  return JSON.parse(JSON.stringify(snapshot)) as StructureFlowProjectJsonV1;
}

describe('ExportProjectJson', () => {
  it('exports a complete project snapshot', async () => {
    const repositories = createRepositories();
    const seeded = await seedProject(repositories);

    const useCase = createExportUseCase(repositories);

    const { snapshot } = await useCase.execute({
      projectId: seeded.project.id.toString(),
    });

    expect(snapshot.format).toBe(STRUCTUREFLOW_PROJECT_FORMAT);
    expect(snapshot.version).toBe(STRUCTUREFLOW_PROJECT_VERSION);
    expect(snapshot.project.name).toBe('Source Project');

    expect(snapshot.nodes).toHaveLength(2);
    expect(snapshot.ports).toHaveLength(2);
    expect(snapshot.edges).toHaveLength(1);
    expect(snapshot.flowchartElements).toHaveLength(1);
    expect(snapshot.flowchartConnections).toHaveLength(1);

    expect(snapshot.nodes).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: seeded.systemNode.id.toString(),
          type: 'system',
          label: 'System',
          description: 'Root system',
          x: 10,
          y: 20,
        }),
        expect.objectContaining({
          id: seeded.componentNode.id.toString(),
          type: 'component',
          label: 'Component',
          description: 'Nested component',
          x: 100,
          y: 120,
          parentId: seeded.systemNode.id.toString(),
        }),
      ]),
    );

    expect(snapshot.ports).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: seeded.systemRightPort.id.toString(),
          nodeId: seeded.systemNode.id.toString(),
          side: 'right',
          x: 960,
          y: 300,
          externalHandleOffset: 0.75,
        }),
      ]),
    );

    expect(snapshot.edges[0]).toEqual(
      expect.objectContaining({
        id: seeded.edge.id.toString(),
        type: 'api',
        sourceId: seeded.systemNode.id.toString(),
        targetId: seeded.componentNode.id.toString(),
        label: 'calls',
        sourceHandle: 'right',
        targetHandle: 'left',
      }),
    );

    expect(snapshot.flowchartElements[0]).toEqual(
      expect.objectContaining({
        id: seeded.flowchartElement.id.toString(),
        type: 'decision',
        label: 'Decision',
        x: 200,
        y: 220,
        width: 180,
        height: 90,
        scopeId: seeded.systemNode.id.toString(),
      }),
    );

    expect(snapshot.flowchartConnections[0]).toEqual(
      expect.objectContaining({
        id: seeded.flowchartConnection.id.toString(),
        type: 'flow',
        label: 'Yes',
        scopeId: seeded.systemNode.id.toString(),
        source: {
          kind: 'port',
          id: seeded.systemRightPort.id.toString(),
          anchor: 'external',
        },
        target: {
          kind: 'flowchart-element',
          id: seeded.flowchartElement.id.toString(),
          anchor: 'left:target',
        },
      }),
    );
  });

  it('fails when project does not exist', async () => {
    const repositories = createRepositories();
    const useCase = createExportUseCase(repositories);

    await expect(
      useCase.execute({
        projectId: ProjectId.create().toString(),
      }),
    ).rejects.toThrow('Project not found');
  });
});

describe('ImportProjectJson', () => {
  it('imports a snapshot as a new project and remaps ids', async () => {
    const repositories = createRepositories();

    const snapshot: StructureFlowProjectJsonV1 = {
      format: STRUCTUREFLOW_PROJECT_FORMAT,
      version: STRUCTUREFLOW_PROJECT_VERSION,
      exportedAt: '2026-01-01T00:00:00.000Z',
      project: {
        name: 'Imported Source',
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

    const useCase = createImportUseCase(repositories);

    const { project } = await useCase.execute({
      ownerId: 'owner-2',
      snapshot,
    });

    expect(project.name).toBe('Imported Source (Imported)');
    expect(project.ownerId).toBe('owner-2');

    const importedNodes = await repositories.nodeRepository.findAllByProject(project.id);
    const importedPorts = await repositories.portRepository.findAllByProject(project.id);
    const importedEdges = await repositories.edgeRepository.findAllByProject(project.id);
    const importedElements =
      await repositories.flowchartElementRepository.findAllByProject(project.id);
    const importedConnections =
      await repositories.flowchartConnectionRepository.findAllByProject(project.id);

    expect(importedNodes).toHaveLength(2);
    expect(importedPorts).toHaveLength(1);
    expect(importedEdges).toHaveLength(1);
    expect(importedElements).toHaveLength(1);
    expect(importedConnections).toHaveLength(1);

    const importedSystem = importedNodes.find((node) => node.label === 'System');
    const importedComponent = importedNodes.find(
      (node) => node.label === 'Component',
    );

    expect(importedSystem).toBeDefined();
    expect(importedComponent).toBeDefined();

    expect(importedSystem?.id.toString()).not.toBe(
      '11111111-1111-4111-8111-111111111111',
    );
    expect(importedComponent?.parentId?.toString()).toBe(
      importedSystem?.id.toString(),
    );

    const importedPort = importedPorts[0];
    expect(importedPort.id.toString()).toBe(
      `${importedSystem?.id.toString()}:right`,
    );
    expect(importedPort.nodeId.toString()).toBe(importedSystem?.id.toString());
    expect(importedPort.externalHandleOffset).toBe(0.75);

    const importedEdge = importedEdges[0];
    expect(importedEdge.sourceId.toString()).toBe(importedSystem?.id.toString());
    expect(importedEdge.targetId.toString()).toBe(
      importedComponent?.id.toString(),
    );
    expect(importedEdge.label).toBe('calls');

    const importedElement = importedElements[0];
    expect(importedElement.scopeId?.toString()).toBe(importedSystem?.id.toString());

    const importedConnection = importedConnections[0];
    expect(importedConnection.scopeId?.toString()).toBe(
      importedSystem?.id.toString(),
    );
    expect(importedConnection.source.id).toBe(importedPort.id.toString());
    expect(importedConnection.target.id).toBe(importedElement.id.toString());
  });

  it('rejects unsupported snapshot format', async () => {
    const repositories = createRepositories();
    const useCase = createImportUseCase(repositories);

    const invalidSnapshot = {
        format: 'wrong.format',
        version: STRUCTUREFLOW_PROJECT_VERSION,
        exportedAt: '2026-01-01T00:00:00.000Z',
        project: {
            name: 'Invalid',
        },
        nodes: [],
        ports: [],
        edges: [],
        flowchartElements: [],
        flowchartConnections: [],
        } as unknown as StructureFlowProjectJsonV1;

    await expect(
      useCase.execute({
        ownerId: 'owner-1',
        snapshot: invalidSnapshot,
      }),
    ).rejects.toThrow('Invalid project JSON format.');
  });

  it('rejects snapshot when node parentId references missing node', async () => {
    const repositories = createRepositories();
    const source = createRepositories();
    const seeded = await seedProject(source);
    const exportUseCase = createExportUseCase(source);

    const { snapshot } = await exportUseCase.execute({
      projectId: seeded.project.id.toString(),
    });

    const invalidSnapshot = cloneSnapshot(snapshot);
    invalidSnapshot.nodes[1].parentId = '99999999-9999-4999-8999-999999999999';

    const useCase = createImportUseCase(repositories);

    await expect(
      useCase.execute({
        ownerId: 'owner-1',
        snapshot: invalidSnapshot,
      }),
    ).rejects.toThrow('Imported node references missing parent node');
  });

  it('rejects snapshot when port references missing node', async () => {
    const repositories = createRepositories();
    const source = createRepositories();
    const seeded = await seedProject(source);
    const exportUseCase = createExportUseCase(source);

    const { snapshot } = await exportUseCase.execute({
      projectId: seeded.project.id.toString(),
    });

    const invalidSnapshot = cloneSnapshot(snapshot);
    invalidSnapshot.ports[0].nodeId = '99999999-9999-4999-8999-999999999999';

    const useCase = createImportUseCase(repositories);

    await expect(
      useCase.execute({
        ownerId: 'owner-1',
        snapshot: invalidSnapshot,
      }),
    ).rejects.toThrow('Imported port references missing node');
  });

  it('rejects snapshot when edge references missing source node', async () => {
    const repositories = createRepositories();
    const source = createRepositories();
    const seeded = await seedProject(source);
    const exportUseCase = createExportUseCase(source);

    const { snapshot } = await exportUseCase.execute({
      projectId: seeded.project.id.toString(),
    });

    const invalidSnapshot = cloneSnapshot(snapshot);
    invalidSnapshot.edges[0].sourceId = '99999999-9999-4999-8999-999999999999';

    const useCase = createImportUseCase(repositories);

    await expect(
      useCase.execute({
        ownerId: 'owner-1',
        snapshot: invalidSnapshot,
      }),
    ).rejects.toThrow('Imported edge references missing source node');
  });

  it('rejects snapshot when flowchart element references missing scope node', async () => {
    const repositories = createRepositories();
    const source = createRepositories();
    const seeded = await seedProject(source);
    const exportUseCase = createExportUseCase(source);

    const { snapshot } = await exportUseCase.execute({
      projectId: seeded.project.id.toString(),
    });

    const invalidSnapshot = cloneSnapshot(snapshot);
    invalidSnapshot.flowchartElements[0].scopeId =
      '99999999-9999-4999-8999-999999999999';

    const useCase = createImportUseCase(repositories);

    await expect(
      useCase.execute({
        ownerId: 'owner-1',
        snapshot: invalidSnapshot,
      }),
    ).rejects.toThrow('Imported flowchart element references missing scope node');
  });

  it('rejects snapshot when flowchart connection references missing endpoint', async () => {
    const repositories = createRepositories();
    const source = createRepositories();
    const seeded = await seedProject(source);
    const exportUseCase = createExportUseCase(source);

    const { snapshot } = await exportUseCase.execute({
      projectId: seeded.project.id.toString(),
    });

    const invalidSnapshot = cloneSnapshot(snapshot);
    invalidSnapshot.flowchartConnections[0].target = {
      kind: 'flowchart-element',
      id: '99999999-9999-4999-8999-999999999999',
      anchor: 'left:target',
    };

    const useCase = createImportUseCase(repositories);

    await expect(
      useCase.execute({
        ownerId: 'owner-1',
        snapshot: invalidSnapshot,
      }),
    ).rejects.toThrow(
      'references missing flowchart element endpoint',
    );
  });

  it('rejects snapshot with duplicate node ids', async () => {
    const repositories = createRepositories();
    const source = createRepositories();
    const seeded = await seedProject(source);
    const exportUseCase = createExportUseCase(source);

    const { snapshot } = await exportUseCase.execute({
      projectId: seeded.project.id.toString(),
    });

    const invalidSnapshot = cloneSnapshot(snapshot);
    invalidSnapshot.nodes[1].id = invalidSnapshot.nodes[0].id;

    const useCase = createImportUseCase(repositories);

    await expect(
      useCase.execute({
        ownerId: 'owner-1',
        snapshot: invalidSnapshot,
      }),
    ).rejects.toThrow('Imported project contains duplicate node id');
  });

  


});

describe('Project JSON round-trip', () => {
  it('exports a project, imports it, and exports the imported project with equivalent graph data', async () => {
    const sourceRepositories = createRepositories();
    const seeded = await seedProject(sourceRepositories);

    const sourceExportUseCase = createExportUseCase(sourceRepositories);

    const { snapshot: originalSnapshot } = await sourceExportUseCase.execute({
      projectId: seeded.project.id.toString(),
    });

    const importedRepositories = createRepositories();
    const importUseCase = createImportUseCase(importedRepositories);
    const importedExportUseCase = createExportUseCase(importedRepositories);

    const { project: importedProject } = await importUseCase.execute({
      ownerId: 'owner-2',
      snapshot: originalSnapshot,
    });

    const { snapshot: importedSnapshot } = await importedExportUseCase.execute({
      projectId: importedProject.id.toString(),
    });

    expect(importedSnapshot.project.name).toBe('Source Project (Imported)');

    expect(importedSnapshot.nodes).toHaveLength(originalSnapshot.nodes.length);
    expect(importedSnapshot.ports).toHaveLength(originalSnapshot.ports.length);
    expect(importedSnapshot.edges).toHaveLength(originalSnapshot.edges.length);
    expect(importedSnapshot.flowchartElements).toHaveLength(
      originalSnapshot.flowchartElements.length,
    );
    expect(importedSnapshot.flowchartConnections).toHaveLength(
      originalSnapshot.flowchartConnections.length,
    );

    const importedSystem = importedSnapshot.nodes.find(
      (node) => node.label === 'System',
    );
    const importedComponent = importedSnapshot.nodes.find(
      (node) => node.label === 'Component',
    );

    expect(importedSystem).toEqual(
      expect.objectContaining({
        type: 'system',
        label: 'System',
        description: 'Root system',
        x: 10,
        y: 20,
      }),
    );

    expect(importedComponent).toEqual(
      expect.objectContaining({
        type: 'component',
        label: 'Component',
        description: 'Nested component',
        x: 100,
        y: 120,
        parentId: importedSystem?.id,
      }),
    );

    const importedRightPort = importedSnapshot.ports.find(
      (port) => port.side === 'right',
    );

    expect(importedRightPort).toEqual(
      expect.objectContaining({
        nodeId: importedSystem?.id,
        side: 'right',
        x: 960,
        y: 300,
        externalHandleOffset: 0.75,
      }),
    );

    expect(importedSnapshot.edges[0]).toEqual(
      expect.objectContaining({
        type: 'api',
        sourceId: importedSystem?.id,
        targetId: importedComponent?.id,
        label: 'calls',
        sourceHandle: 'right',
        targetHandle: 'left',
      }),
    );

    const importedElement = importedSnapshot.flowchartElements[0];

    expect(importedElement).toEqual(
      expect.objectContaining({
        type: 'decision',
        label: 'Decision',
        x: 200,
        y: 220,
        width: 180,
        height: 90,
        scopeId: importedSystem?.id,
      }),
    );

    expect(importedSnapshot.flowchartConnections[0]).toEqual(
      expect.objectContaining({
        type: 'flow',
        label: 'Yes',
        scopeId: importedSystem?.id,
        source: {
          kind: 'port',
          id: importedRightPort?.id,
          anchor: 'external',
        },
        target: {
          kind: 'flowchart-element',
          id: importedElement.id,
          anchor: 'left:target',
        },
      }),
    );

    expect(importedSystem?.id).not.toBe(seeded.systemNode.id.toString());
    expect(importedComponent?.id).not.toBe(seeded.componentNode.id.toString());
    expect(importedElement.id).not.toBe(seeded.flowchartElement.id.toString());
  });
});