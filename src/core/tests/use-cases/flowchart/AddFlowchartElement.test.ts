import { describe, expect, it } from 'vitest';
import { AddFlowchartElement } from '../../../application/use-cases/flowchart/AddFlowchartElement';
import { Project } from '../../../domain/entities/Project';
import { ProjectId } from '../../../domain/value-objects/ProjectId';
import { InMemoryFlowchartElementRepository } from '../../fakes/InMemoryFlowchartElementRepository';
import { InMemoryProjectRepository } from '../../fakes/InMemoryProjectRepository';

describe('AddFlowchartElement', () => {
  it('adds flowchart element with default label', async () => {
    const projectRepository = new InMemoryProjectRepository();
    const flowchartElementRepository = new InMemoryFlowchartElementRepository();

    const project = new Project({
      id: ProjectId.create(),
      name: 'P',
      ownerId: 'user-1',
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await projectRepository.save(project);

    const useCase = new AddFlowchartElement(
      projectRepository,
      flowchartElementRepository,
    );

    const result = await useCase.execute({
      projectId: project.id.toString(),
      type: 'decision',
      x: 5,
      y: 10,
    });

    expect(result.element.label).toBe('Decision');
    expect(result.element.position.x).toBe(5);
    expect(result.element.position.y).toBe(10);
  });

  it('adds flowchart element with custom label', async () => {
    const projectRepository = new InMemoryProjectRepository();
    const flowchartElementRepository = new InMemoryFlowchartElementRepository();

    const project = new Project({
      id: ProjectId.create(),
      name: 'P',
      ownerId: 'user-1',
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await projectRepository.save(project);

    const useCase = new AddFlowchartElement(
      projectRepository,
      flowchartElementRepository,
    );

    const result = await useCase.execute({
      projectId: project.id.toString(),
      type: 'process',
      label: 'Validate input',
    });

    expect(result.element.label).toBe('Validate input');
  });

  it('fails if project does not exist', async () => {
    const projectRepository = new InMemoryProjectRepository();
    const flowchartElementRepository = new InMemoryFlowchartElementRepository();

    const useCase = new AddFlowchartElement(
      projectRepository,
      flowchartElementRepository,
    );

    await expect(
      useCase.execute({
        projectId: ProjectId.create().toString(),
        type: 'process',
      }),
    ).rejects.toThrow('Project not found');
  });
});