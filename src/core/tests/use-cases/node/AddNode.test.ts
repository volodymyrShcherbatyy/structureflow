import { describe, expect, it } from 'vitest';
import { AddNode } from '../../../application/use-cases/node/AddNode';
import { Project } from '../../../domain/entities/Project';
import { ProjectId } from '../../../domain/value-objects/ProjectId';
import { InMemoryNodeRepository } from '../../fakes/InMemoryNodeRepository';
import { InMemoryProjectRepository } from '../../fakes/InMemoryProjectRepository';

describe('AddNode', () => {
  it('adds node for existing project', async () => {
    const projectRepository = new InMemoryProjectRepository();
    const nodeRepository = new InMemoryNodeRepository();
    const project = new Project({
      id: ProjectId.create(),
      name: 'P',
      ownerId: 'user-1',
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    await projectRepository.save(project);

    const useCase = new AddNode(projectRepository, nodeRepository);
    const result = await useCase.execute({
      projectId: project.id.toString(),
      type: 'system',
      label: 'Main System',
      x: 5,
      y: 10,
    });

    expect(result.node.label).toBe('Main System');
    expect(result.node.position.x).toBe(5);
    expect(result.node.position.y).toBe(10);
  });

  it('fails if project does not exist', async () => {
    const useCase = new AddNode(new InMemoryProjectRepository(), new InMemoryNodeRepository());

    await expect(
      useCase.execute({
        projectId: ProjectId.create().toString(),
        type: 'system',
        label: 'Main',
      }),
    ).rejects.toThrow('Project not found');
  });
});
