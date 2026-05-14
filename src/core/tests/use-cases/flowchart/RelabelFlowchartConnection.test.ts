import { describe, expect, it } from 'vitest';

import { RelabelFlowchartConnection } from '../../../application/use-cases/flowchart/RelabelFlowchartConnection';
import { FlowchartConnection } from '../../../domain/entities/FlowchartConnection';
import { FlowchartConnectionId } from '../../../domain/value-objects/FlowchartConnectionId';
import { FlowchartConnectionType } from '../../../domain/value-objects/FlowchartConnectionType';
import { FlowchartEndpoint } from '../../../domain/value-objects/FlowchartEndpoint';
import { ProjectId } from '../../../domain/value-objects/ProjectId';
import { InMemoryFlowchartConnectionRepository } from '../../fakes/InMemoryFlowchartConnectionRepository';

const PROJECT_ID = ProjectId.from('11111111-1111-4111-8111-111111111111');

describe('RelabelFlowchartConnection', () => {
  it('updates flowchart connection label', async () => {
    const repository = new InMemoryFlowchartConnectionRepository();

    const connection = new FlowchartConnection({
      id: FlowchartConnectionId.create(),
      projectId: PROJECT_ID,
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

    await repository.save(connection);

    const useCase = new RelabelFlowchartConnection(repository);

    const result = await useCase.execute({
      connectionId: connection.id.toString(),
      label: 'Approved',
    });

    const found = await repository.findById(connection.id);

    expect(result.label).toBe('Approved');
    expect(found?.label).toBe('Approved');
  });

  it('allows empty label', async () => {
    const repository = new InMemoryFlowchartConnectionRepository();

    const connection = new FlowchartConnection({
      id: FlowchartConnectionId.create(),
      projectId: PROJECT_ID,
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

    await repository.save(connection);

    const useCase = new RelabelFlowchartConnection(repository);

    await useCase.execute({
      connectionId: connection.id.toString(),
      label: '',
    });

    const found = await repository.findById(connection.id);

    expect(found?.label).toBe('');
  });

  it('fails when connection does not exist', async () => {
    const repository = new InMemoryFlowchartConnectionRepository();
    const useCase = new RelabelFlowchartConnection(repository);

    await expect(
      useCase.execute({
        connectionId: FlowchartConnectionId.create().toString(),
        label: 'Missing',
      }),
    ).rejects.toThrow('Flowchart connection not found');
  });
});