import { describe, expect, it } from 'vitest';

import { ConnectFlowchartElements } from '../../../application/use-cases/flowchart/ConnectFlowchartElements';
import { DeleteFlowchartConnection } from '../../../application/use-cases/flowchart/DeleteFlowchartConnection';
import { ProjectId } from '../../../domain/value-objects/ProjectId';
import { InMemoryFlowchartConnectionRepository } from '../../fakes/InMemoryFlowchartConnectionRepository';

describe('ConnectFlowchartElements', () => {
  it('connects flowchart element to flowchart element', async () => {
    const repository = new InMemoryFlowchartConnectionRepository();
    const useCase = new ConnectFlowchartElements(repository);

    const output = await useCase.execute({
      projectId: ProjectId.create().toString(),
      source: {
        kind: 'flowchart-element',
        id: 'shape-a',
        anchor: 'right:source',
      },
      target: {
        kind: 'flowchart-element',
        id: 'shape-b',
        anchor: 'left:target',
      },
      label: 'Yes',
    });

    expect(output.connection.type.toString()).toBe('flow');
    expect(output.connection.label).toBe('Yes');
    expect(repository.connections).toHaveLength(1);
  });

  it('connects mixed endpoints', async () => {
    const repository = new InMemoryFlowchartConnectionRepository();
    const useCase = new ConnectFlowchartElements(repository);

    const output = await useCase.execute({
      projectId: ProjectId.create().toString(),
      source: {
        kind: 'node',
        id: 'node-1',
        anchor: 'right:source',
      },
      target: {
        kind: 'port',
        id: 'node-2:left',
        anchor: 'external',
      },
      label: '',
    });

    expect(output.connection.source.kind).toBe('node');
    expect(output.connection.target.kind).toBe('port');
    expect(output.connection.label).toBe('');
  });

  it('deletes connection', async () => {
    const repository = new InMemoryFlowchartConnectionRepository();
    const connect = new ConnectFlowchartElements(repository);

    const { connection } = await connect.execute({
      projectId: ProjectId.create().toString(),
      source: {
        kind: 'flowchart-element',
        id: 'shape-a',
        anchor: 'right:source',
      },
      target: {
        kind: 'flowchart-element',
        id: 'shape-b',
        anchor: 'left:target',
      },
    });

    const remove = new DeleteFlowchartConnection(repository);

    await remove.execute({
      connectionId: connection.id.toString(),
    });

    expect(repository.connections).toHaveLength(0);
  });

  it('fails when deleting missing connection', async () => {
    const repository = new InMemoryFlowchartConnectionRepository();
    const remove = new DeleteFlowchartConnection(repository);

    await expect(
      remove.execute({
        connectionId: ProjectId.create().toString(),
      }),
    ).rejects.toThrow('Flowchart connection not found');
  });
});