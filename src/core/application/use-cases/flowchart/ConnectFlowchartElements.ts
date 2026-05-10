import { FlowchartConnection } from '../../../domain/entities/FlowchartConnection';
import { FlowchartConnectionId } from '../../../domain/value-objects/FlowchartConnectionId';
import { FlowchartConnectionType } from '../../../domain/value-objects/FlowchartConnectionType';
import {
  FlowchartEndpoint,
  FlowchartEndpointKind,
} from '../../../domain/value-objects/FlowchartEndpoint';
import { NodeId } from '../../../domain/value-objects/NodeId';
import { ProjectId } from '../../../domain/value-objects/ProjectId';
import { IFlowchartConnectionRepository } from '../../ports/IFlowchartConnectionRepository';

export type ConnectFlowchartEndpointInput = {
  kind: FlowchartEndpointKind;
  id: string;
  anchor?: string;
};

export type ConnectFlowchartElementsInput = {
  projectId: string;
  source: ConnectFlowchartEndpointInput;
  target: ConnectFlowchartEndpointInput;
  type?: string;
  label?: string;
  scopeId?: string;
};

export type ConnectFlowchartElementsOutput = {
  connection: FlowchartConnection;
};

export class ConnectFlowchartElements {
  constructor(
    private readonly repository: IFlowchartConnectionRepository,
  ) {}

  public async execute(
    input: ConnectFlowchartElementsInput,
  ): Promise<ConnectFlowchartElementsOutput> {
    const connection = new FlowchartConnection({
      id: FlowchartConnectionId.create(),
      projectId: ProjectId.from(input.projectId),
      source: FlowchartEndpoint.from(input.source),
      target: FlowchartEndpoint.from(input.target),
      type: input.type
        ? FlowchartConnectionType.from(input.type)
        : FlowchartConnectionType.flow(),
      label: input.label,
      scopeId: input.scopeId ? NodeId.from(input.scopeId) : undefined,
    });

    await this.repository.save(connection);

    return { connection };
  }
}