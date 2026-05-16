import { ProjectNotFoundError } from '../../../domain/errors/ProjectNotFoundError';
import { ProjectId } from '../../../domain/value-objects/ProjectId';
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

export type ExportProjectJsonInput = {
  projectId: string;
};

export type ExportProjectJsonOutput = {
  snapshot: StructureFlowProjectJsonV1;
};

export class ExportProjectJson {
  constructor(
    private readonly projectRepository: IProjectRepository,
    private readonly nodeRepository: INodeRepository,
    private readonly edgeRepository: IEdgeRepository,
    private readonly portRepository: IPortRepository,
    private readonly flowchartElementRepository: IFlowchartElementRepository,
    private readonly flowchartConnectionRepository: IFlowchartConnectionRepository,
  ) {}

  async execute(input: ExportProjectJsonInput): Promise<ExportProjectJsonOutput> {
    const projectId = ProjectId.from(input.projectId);
    const project = await this.projectRepository.findById(projectId);

    if (!project) {
      throw new ProjectNotFoundError(projectId.toString());
    }

    const [
      nodes,
      ports,
      edges,
      flowchartElements,
      flowchartConnections,
    ] = await Promise.all([
      this.nodeRepository.findAllByProject(projectId),
      this.portRepository.findAllByProject(projectId),
      this.edgeRepository.findAllByProject(projectId),
      this.flowchartElementRepository.findAllByProject(projectId),
      this.flowchartConnectionRepository.findAllByProject(projectId),
    ]);

    return {
      snapshot: {
        format: STRUCTUREFLOW_PROJECT_FORMAT,
        version: STRUCTUREFLOW_PROJECT_VERSION,
        exportedAt: new Date().toISOString(),

        project: {
          name: project.name,
        },

        nodes: nodes.map((node) => ({
          id: node.id.toString(),
          type: node.type.toString(),
          label: node.label,
          description: node.description,
          x: node.position.x,
          y: node.position.y,
          parentId: node.parentId?.toString(),
        })),

        ports: ports.map((port) => ({
          id: port.id.toString(),
          nodeId: port.nodeId.toString(),
          side: port.side.toString(),
          x: port.position.x,
          y: port.position.y,
          externalHandleOffset: port.externalHandleOffset,
        })),

        edges: edges.map((edge) => ({
          id: edge.id.toString(),
          type: edge.type.toString(),
          sourceId: edge.sourceId.toString(),
          targetId: edge.targetId.toString(),
          label: edge.label,
          sourceHandle: edge.sourceHandle,
          targetHandle: edge.targetHandle,
        })),

        flowchartElements: flowchartElements.map((element) => ({
          id: element.id.toString(),
          type: element.type.toString(),
          label: element.label,
          x: element.position.x,
          y: element.position.y,
          width: element.size.width,
          height: element.size.height,
          scopeId: element.scopeId?.toString(),
        })),

        flowchartConnections: flowchartConnections.map((connection) => ({
          id: connection.id.toString(),
          type: connection.type.toString(),
          label: connection.label,
          scopeId: connection.scopeId?.toString(),
          source: {
            kind: connection.source.kind,
            id: connection.source.id,
            anchor: connection.source.anchor,
          },
          target: {
            kind: connection.target.kind,
            id: connection.target.id,
            anchor: connection.target.anchor,
          },
        })),
      },
    };
  }
}