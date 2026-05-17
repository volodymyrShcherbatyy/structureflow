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
import { IEdgeRepository } from '../../ports/IEdgeRepository';
import { IFlowchartConnectionRepository } from '../../ports/IFlowchartConnectionRepository';
import { IFlowchartElementRepository } from '../../ports/IFlowchartElementRepository';
import { INodeRepository } from '../../ports/INodeRepository';
import { IPortRepository } from '../../ports/IPortRepository';
import { IProjectRepository } from '../../ports/IProjectRepository';
import {
  STRUCTUREFLOW_PROJECT_FORMAT,
  STRUCTUREFLOW_PROJECT_VERSION,
  StructureFlowProjectJsonV1,
} from './ProjectJsonSnapshot';

export type ImportProjectJsonInput = {
  ownerId: string;
  snapshot: StructureFlowProjectJsonV1;
};

export type ImportProjectJsonOutput = {
  project: Project;
};

function assertUniqueIds(ids: string[], entityName: string): void {
  const seen = new Set<string>();

  ids.forEach((id) => {
    if (seen.has(id)) {
      throw new Error(`Imported project contains duplicate ${entityName} id: ${id}`);
    }

    seen.add(id);
  });
}

function assertKnownId(
  knownIds: Set<string>,
  id: string | undefined,
  message: string,
): void {
  if (!id) {
    return;
  }

  if (!knownIds.has(id)) {
    throw new Error(message);
  }
}

function assertEndpointExists(
  endpoint: StructureFlowProjectJsonV1['flowchartConnections'][number]['source'],
  nodeIds: Set<string>,
  portIds: Set<string>,
  flowchartElementIds: Set<string>,
  context: string,
): void {
  if (endpoint.kind === 'node') {
    assertKnownId(
      nodeIds,
      endpoint.id,
      `${context} references missing node endpoint: ${endpoint.id}`,
    );
    return;
  }

  if (endpoint.kind === 'port') {
    assertKnownId(
      portIds,
      endpoint.id,
      `${context} references missing port endpoint: ${endpoint.id}`,
    );
    return;
  }

  if (endpoint.kind === 'flowchart-element') {
    assertKnownId(
      flowchartElementIds,
      endpoint.id,
      `${context} references missing flowchart element endpoint: ${endpoint.id}`,
    );
    return;
  }

  throw new Error(`${context} has unsupported endpoint kind: ${endpoint.kind}`);
}

function assertValidSnapshot(snapshot: StructureFlowProjectJsonV1): void {
  if (snapshot.format !== STRUCTUREFLOW_PROJECT_FORMAT) {
    throw new Error('Invalid project JSON format.');
  }

  if (snapshot.version !== STRUCTUREFLOW_PROJECT_VERSION) {
    throw new Error(`Unsupported project JSON version: ${snapshot.version}`);
  }

  if (!snapshot.project?.name?.trim()) {
    throw new Error('Imported project name cannot be empty.');
  }

  if (!Array.isArray(snapshot.nodes)) {
    throw new Error('Imported project nodes must be an array.');
  }

  if (!Array.isArray(snapshot.ports)) {
    throw new Error('Imported project ports must be an array.');
  }

  if (!Array.isArray(snapshot.edges)) {
    throw new Error('Imported project edges must be an array.');
  }

  if (!Array.isArray(snapshot.flowchartElements)) {
    throw new Error('Imported project flowchartElements must be an array.');
  }

  if (!Array.isArray(snapshot.flowchartConnections)) {
    throw new Error('Imported project flowchartConnections must be an array.');
  }

  const nodeIds = new Set(snapshot.nodes.map((node) => node.id));
  const portIds = new Set(snapshot.ports.map((port) => port.id));
  const edgeIds = new Set(snapshot.edges.map((edge) => edge.id));
  const flowchartElementIds = new Set(
    snapshot.flowchartElements.map((element) => element.id),
  );
  const flowchartConnectionIds = new Set(
    snapshot.flowchartConnections.map((connection) => connection.id),
  );

  assertUniqueIds(snapshot.nodes.map((node) => node.id), 'node');
  assertUniqueIds(snapshot.ports.map((port) => port.id), 'port');
  assertUniqueIds(snapshot.edges.map((edge) => edge.id), 'edge');
  assertUniqueIds(
    snapshot.flowchartElements.map((element) => element.id),
    'flowchart element',
  );
  assertUniqueIds(
    snapshot.flowchartConnections.map((connection) => connection.id),
    'flowchart connection',
  );

  snapshot.nodes.forEach((node) => {
    assertKnownId(
      nodeIds,
      node.parentId,
      `Imported node references missing parent node: ${node.parentId}`,
    );
  });

  snapshot.ports.forEach((port) => {
    assertKnownId(
      nodeIds,
      port.nodeId,
      `Imported port references missing node: ${port.nodeId}`,
    );

    const expectedPortId = `${port.nodeId}:${port.side}`;

    if (port.id !== expectedPortId) {
      throw new Error(
        `Imported port id does not match node/side: expected ${expectedPortId}, received ${port.id}`,
      );
    }
  });

  snapshot.edges.forEach((edge) => {
    assertKnownId(
      nodeIds,
      edge.sourceId,
      `Imported edge references missing source node: ${edge.sourceId}`,
    );

    assertKnownId(
      nodeIds,
      edge.targetId,
      `Imported edge references missing target node: ${edge.targetId}`,
    );
  });

  snapshot.flowchartElements.forEach((element) => {
    assertKnownId(
      nodeIds,
      element.scopeId,
      `Imported flowchart element references missing scope node: ${element.scopeId}`,
    );
  });

  snapshot.flowchartConnections.forEach((connection) => {
    assertKnownId(
      nodeIds,
      connection.scopeId,
      `Imported flowchart connection references missing scope node: ${connection.scopeId}`,
    );

    assertEndpointExists(
      connection.source,
      nodeIds,
      portIds,
      flowchartElementIds,
      `Imported flowchart connection ${connection.id} source`,
    );

    assertEndpointExists(
      connection.target,
      nodeIds,
      portIds,
      flowchartElementIds,
      `Imported flowchart connection ${connection.id} target`,
    );
  });
}

function remapRequiredId(
  map: Map<string, string>,
  oldId: string,
  entityName: string,
): string {
  const mapped = map.get(oldId);

  if (!mapped) {
    throw new Error(`Cannot import ${entityName}: missing remap for ${oldId}`);
  }

  return mapped;
}

function remapOptionalId(
  map: Map<string, string>,
  oldId: string | undefined,
  entityName: string,
): string | undefined {
  if (!oldId) {
    return undefined;
  }

  return remapRequiredId(map, oldId, entityName);
}

export class ImportProjectJson {
  constructor(
    private readonly projectRepository: IProjectRepository,
    private readonly nodeRepository: INodeRepository,
    private readonly edgeRepository: IEdgeRepository,
    private readonly portRepository: IPortRepository,
    private readonly flowchartElementRepository: IFlowchartElementRepository,
    private readonly flowchartConnectionRepository: IFlowchartConnectionRepository,
  ) {}

  async execute(input: ImportProjectJsonInput): Promise<ImportProjectJsonOutput> {
    assertValidSnapshot(input.snapshot);

    const now = new Date();
    const project = new Project({
      id: ProjectId.create(),
      name: `${input.snapshot.project.name} (Imported)`,
      ownerId: input.ownerId,
      createdAt: now,
      updatedAt: now,
    });

    const projectId = project.id;

    const nodeIdMap = new Map<string, string>();
    const portIdMap = new Map<string, string>();
    const flowchartElementIdMap = new Map<string, string>();

    input.snapshot.nodes.forEach((node) => {
      nodeIdMap.set(node.id, NodeId.create().toString());
    });

    input.snapshot.flowchartElements.forEach((element) => {
      flowchartElementIdMap.set(element.id, FlowchartElementId.create().toString());
    });

    const nodes = input.snapshot.nodes.map((node) => {
      const newNodeId = remapRequiredId(nodeIdMap, node.id, 'node');
      const newParentId = remapOptionalId(nodeIdMap, node.parentId, 'node parent');

      return new Node({
        id: NodeId.from(newNodeId),
        projectId,
        type: NodeType.from(node.type),
        label: node.label,
        description: node.description,
        position: Position.from(node.x, node.y),
        parentId: newParentId ? NodeId.from(newParentId) : undefined,
      });
    });

    const remappedPorts = input.snapshot.ports.map((port) => {
      const newNodeId = remapRequiredId(nodeIdMap, port.nodeId, 'port node');
      const side = PortSide.from(port.side);
      const newPortId = PortId.fromNodeAndSide(newNodeId, side.toString()).toString();

      portIdMap.set(port.id, newPortId);

      return new Port({
        id: PortId.from(newPortId),
        nodeId: NodeId.from(newNodeId),
        projectId,
        side,
        position: Position.from(port.x, port.y),
        externalHandleOffset: port.externalHandleOffset,
      });
    });

    const flowchartElements = input.snapshot.flowchartElements.map((element) => {
      const newElementId = remapRequiredId(
        flowchartElementIdMap,
        element.id,
        'flowchart element',
      );

      const newScopeId = remapOptionalId(
        nodeIdMap,
        element.scopeId,
        'flowchart element scope',
      );

      return new FlowchartElement({
        id: FlowchartElementId.from(newElementId),
        projectId,
        type: FlowchartElementType.from(element.type),
        label: element.label,
        position: Position.from(element.x, element.y),
        size: Size.from(element.width, element.height),
        scopeId: newScopeId ? NodeId.from(newScopeId) : undefined,
      });
    });

    const edges = input.snapshot.edges.map((edge) => {
      const newSourceId = remapRequiredId(nodeIdMap, edge.sourceId, 'edge source');
      const newTargetId = remapRequiredId(nodeIdMap, edge.targetId, 'edge target');

      return new Edge({
        id: EdgeId.create(),
        projectId,
        type: EdgeType.from(edge.type),
        sourceId: NodeId.from(newSourceId),
        targetId: NodeId.from(newTargetId),
        label: edge.label,
        sourceHandle: edge.sourceHandle,
        targetHandle: edge.targetHandle,
      });
    });

    const remapEndpoint = (endpoint: {
      kind: 'flowchart-element' | 'node' | 'port';
      id: string;
      anchor?: string;
    }) => {
      if (endpoint.kind === 'node') {
        return {
          ...endpoint,
          id: remapRequiredId(nodeIdMap, endpoint.id, 'flowchart endpoint node'),
        };
      }

      if (endpoint.kind === 'port') {
        return {
          ...endpoint,
          id: remapRequiredId(portIdMap, endpoint.id, 'flowchart endpoint port'),
        };
      }

      return {
        ...endpoint,
        id: remapRequiredId(
          flowchartElementIdMap,
          endpoint.id,
          'flowchart endpoint element',
        ),
      };
    };

    const flowchartConnections = input.snapshot.flowchartConnections.map((connection) => {
      const newScopeId = remapOptionalId(
        nodeIdMap,
        connection.scopeId,
        'flowchart connection scope',
      );

      return new FlowchartConnection({
        id: FlowchartConnectionId.create(),
        projectId,
        type: FlowchartConnectionType.from(connection.type),
        label: connection.label,
        scopeId: newScopeId ? NodeId.from(newScopeId) : undefined,
        source: FlowchartEndpoint.from(remapEndpoint(connection.source)),
        target: FlowchartEndpoint.from(remapEndpoint(connection.target)),
      });
    });

    await this.projectRepository.save(project);
    await this.nodeRepository.saveMany(nodes);
    await this.portRepository.saveMany(remappedPorts);

    for (const edge of edges) {
      await this.edgeRepository.save(edge);
    }

    for (const element of flowchartElements) {
      await this.flowchartElementRepository.save(element);
    }

    for (const connection of flowchartConnections) {
      await this.flowchartConnectionRepository.save(connection);
    }

    return { project };
  }
}