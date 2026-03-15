import { Project as PrismaProject, Prisma } from '@prisma/client';
import { Project } from '../../../../core/domain/entities/Project';
import { ProjectId } from '../../../../core/domain/value-objects/ProjectId';

export class ProjectMapper {
  static toDomain(record: PrismaProject): Project {
    return new Project({
      id: ProjectId.from(record.id),
      name: record.name,
      ownerId: record.ownerId,
      createdAt: record.createdAt,
      updatedAt: record.updatedAt,
    });
  }

  static toPrismaCreate(project: Project): Prisma.ProjectCreateInput {
    return {
      id: project.id.value,
      name: project.name,
      ownerId: project.ownerId,
    };
  }

  static toPrismaUpdate(project: Project): Prisma.ProjectUpdateInput {
    return {
      name: project.name,
      ownerId: project.ownerId,
    };
  }
}