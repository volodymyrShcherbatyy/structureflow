import { describe, expect, it } from 'vitest';
import { CreateProject } from '../../../application/use-cases/project/CreateProject';
import { InMemoryProjectRepository } from '../../fakes/InMemoryProjectRepository';

describe('CreateProject', () => {
  it('creates and saves a project', async () => {
    const repository = new InMemoryProjectRepository();
    const useCase = new CreateProject(repository);

    const output = await useCase.execute({
      name: 'StructureFlow',
      ownerId: 'user-1',
    });

    const saved = await repository.findById(output.project.id);

    expect(saved?.name).toBe('StructureFlow');
    expect(saved?.ownerId).toBe('user-1');
  });

  it('throws on invalid name', async () => {
    const repository = new InMemoryProjectRepository();
    const useCase = new CreateProject(repository);

    await expect(
      useCase.execute({
        name: '   ',
        ownerId: 'user-1',
      }),
    ).rejects.toThrow('Project name cannot be empty');
  });
});
