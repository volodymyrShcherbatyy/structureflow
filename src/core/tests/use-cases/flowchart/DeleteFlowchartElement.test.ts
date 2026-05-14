import { describe, expect, it } from 'vitest';

import { DeleteFlowchartElement } from '../../../application/use-cases/flowchart/DeleteFlowchartElement';
import { FlowchartConnection } from '../../../domain/entities/FlowchartConnection';
import { FlowchartElement } from '../../../domain/entities/FlowchartElement';
import { FlowchartConnectionId } from '../../../domain/value-objects/FlowchartConnectionId';
import { FlowchartConnectionType } from '../../../domain/value-objects/FlowchartConnectionType';
import { FlowchartElementId } from '../../../domain/value-objects/FlowchartElementId';
import { FlowchartElementType } from '../../../domain/value-objects/FlowchartElementType';
import { FlowchartEndpoint } from '../../../domain/value-objects/FlowchartEndpoint';
import { Position } from '../../../domain/value-objects/Position';
import { ProjectId } from '../../../domain/value-objects/ProjectId';
import { Size } from '../../../domain/value-objects/Size';
import { InMemoryFlowchartConnectionRepository } from '../../fakes/InMemoryFlowchartConnectionRepository';
import { InMemoryFlowchartElementRepository } from '../../fakes/InMemoryFlowchartElementRepository';

const PROJECT_ID = ProjectId.from('11111111-1111-4111-8111-111111111111');

describe('DeleteFlowchartElement', () => {
  it('deletes connected flowchart connections', async () => {
    const elementRepository = new InMemoryFlowchartElementRepository();
    const connectionRepository = new InMemoryFlowchartConnectionRepository();

    const element = new FlowchartElement({
      id: FlowchartElementId.create(),
      projectId: PROJECT_ID,
      type: FlowchartElementType.from('process'),
      label: 'Process',
      position: Position.origin(),
      size: Size.defaultForFlowchartElement(),
    });

    await elementRepository.save(element);

    const connection = new FlowchartConnection({
      id: FlowchartConnectionId.create(),
      projectId: PROJECT_ID,
      source: FlowchartEndpoint.from({
        kind: 'flowchart-element',
        id: element.id.toString(),
        anchor: 'right:source',
      }),
      target: FlowchartEndpoint.from({
        kind: 'node',
        id: 'node-1',
        anchor: 'left:target',
      }),
      type: FlowchartConnectionType.flow(),
    });

    await connectionRepository.save(connection);

    const useCase = new DeleteFlowchartElement(
      elementRepository,
      connectionRepository,
    );

    await useCase.execute({
      elementId: element.id.toString(),
    });

    expect(await elementRepository.findById(element.id)).toBeNull();
    expect(connectionRepository.connections).toHaveLength(0);
  });
});