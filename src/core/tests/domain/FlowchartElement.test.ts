import { describe, expect, it } from 'vitest';
import { FlowchartElement } from '../../domain/entities/FlowchartElement';
import { FlowchartElementId } from '../../domain/value-objects/FlowchartElementId';
import { FlowchartElementType } from '../../domain/value-objects/FlowchartElementType';
import { Position } from '../../domain/value-objects/Position';
import { ProjectId } from '../../domain/value-objects/ProjectId';
import { Size } from '../../domain/value-objects/Size';

const PROJECT_ID = ProjectId.from('11111111-1111-4111-8111-111111111111');

describe('FlowchartElement', () => {
  it('allows empty label', () => {
    const element = new FlowchartElement({
      id: FlowchartElementId.create(),
      projectId: PROJECT_ID,
      type: FlowchartElementType.from('process'),
      label: 'Process',
      position: Position.origin(),
      size: Size.defaultForFlowchartElement(),
    });

    const renamed = element.rename('');

    expect(renamed.label).toBe('');
  });

  it('moves element', () => {
    const element = new FlowchartElement({
      id: FlowchartElementId.create(),
      projectId: PROJECT_ID,
      type: FlowchartElementType.from('decision'),
      label: 'Decision',
      position: Position.origin(),
      size: Size.defaultForFlowchartElement(),
    });

    const moved = element.moveTo(Position.from(10, 20));

    expect(moved.position.x).toBe(10);
    expect(moved.position.y).toBe(20);
  });

  it('resizes element', () => {
    const element = new FlowchartElement({
      id: FlowchartElementId.create(),
      projectId: PROJECT_ID,
      type: FlowchartElementType.from('data'),
      label: 'Data',
      position: Position.origin(),
      size: Size.defaultForFlowchartElement(),
    });

    const resized = element.resize(Size.from(240, 120));

    expect(resized.size.width).toBe(240);
    expect(resized.size.height).toBe(120);
  });
});