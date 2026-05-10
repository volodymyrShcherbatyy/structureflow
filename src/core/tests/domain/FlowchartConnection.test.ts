import { describe, expect, it } from 'vitest';

import { FlowchartConnection } from '../../domain/entities/FlowchartConnection';
import { FlowchartConnectionId } from '../../domain/value-objects/FlowchartConnectionId';
import { FlowchartConnectionType } from '../../domain/value-objects/FlowchartConnectionType';
import { FlowchartEndpoint } from '../../domain/value-objects/FlowchartEndpoint';
import { ProjectId } from '../../domain/value-objects/ProjectId';

const PROJECT_ID = ProjectId.from('11111111-1111-4111-8111-111111111111');

describe('FlowchartConnection', () => {
  it('connects two different endpoints', () => {
    const connection = new FlowchartConnection({
      id: FlowchartConnectionId.create(),
      projectId: PROJECT_ID,
      source: FlowchartEndpoint.from({
        kind: 'flowchart-element',
        id: 'source-shape',
        anchor: 'right:source',
      }),
      target: FlowchartEndpoint.from({
        kind: 'flowchart-element',
        id: 'target-shape',
        anchor: 'left:target',
      }),
      type: FlowchartConnectionType.flow(),
      label: 'Yes',
    });

    expect(connection.source.id).toBe('source-shape');
    expect(connection.target.id).toBe('target-shape');
    expect(connection.type.toString()).toBe('flow');
    expect(connection.label).toBe('Yes');
  });

  it('allows empty label', () => {
    const connection = new FlowchartConnection({
      id: FlowchartConnectionId.create(),
      projectId: PROJECT_ID,
      source: FlowchartEndpoint.from({
        kind: 'node',
        id: 'node-1',
        anchor: 'right:source',
      }),
      target: FlowchartEndpoint.from({
        kind: 'flowchart-element',
        id: 'shape-1',
        anchor: 'left:target',
      }),
      type: FlowchartConnectionType.flow(),
      label: '',
    });

    expect(connection.label).toBe('');
  });

  it('throws when connecting endpoint to itself', () => {
    const endpoint = FlowchartEndpoint.from({
      kind: 'flowchart-element',
      id: 'shape-1',
      anchor: 'right:source',
    });

    expect(
      () =>
        new FlowchartConnection({
          id: FlowchartConnectionId.create(),
          projectId: PROJECT_ID,
          source: endpoint,
          target: endpoint,
          type: FlowchartConnectionType.flow(),
        }),
    ).toThrow('cannot connect endpoint to itself');
  });

  it('checks whether connection touches endpoint id', () => {
    const connection = new FlowchartConnection({
      id: FlowchartConnectionId.create(),
      projectId: PROJECT_ID,
      source: FlowchartEndpoint.from({
        kind: 'port',
        id: 'node-1:right',
        anchor: 'external',
      }),
      target: FlowchartEndpoint.from({
        kind: 'flowchart-element',
        id: 'shape-1',
        anchor: 'left:target',
      }),
      type: FlowchartConnectionType.flow(),
    });

    expect(connection.connectsEndpointId('port', 'node-1:right')).toBe(true);
    expect(connection.connectsEndpointId('node', 'node-1')).toBe(false);
  });
});