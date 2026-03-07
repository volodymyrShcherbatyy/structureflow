import { describe, expect, it } from 'vitest';
import { Project } from '../../domain/entities/Project';
import { ProjectId } from '../../domain/value-objects/ProjectId';

describe('Project', () => {
  it('renames project and updates timestamp', () => {
    const project = new Project({
      id: ProjectId.create(),
      name: 'Alpha',
      ownerId: 'owner-1',
      createdAt: new Date('2024-01-01T00:00:00.000Z'),
      updatedAt: new Date('2024-01-01T00:00:00.000Z'),
    });

    const renamed = project.rename('Beta');

    expect(renamed.name).toBe('Beta');
    expect(renamed.updatedAt.getTime()).toBeGreaterThan(project.updatedAt.getTime());
  });

  it('throws when renaming to empty value', () => {
    const project = new Project({
      id: ProjectId.create(),
      name: 'Alpha',
      ownerId: 'owner-1',
      createdAt: new Date('2024-01-01T00:00:00.000Z'),
      updatedAt: new Date('2024-01-01T00:00:00.000Z'),
    });

    expect(() => project.rename('   ')).toThrow('Project name cannot be empty');
  });
});
