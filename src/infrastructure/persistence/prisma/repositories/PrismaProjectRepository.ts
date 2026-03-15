import { PrismaClient } from '@prisma/client';
import { IProjectRepository } from '../../../../core/application/ports/IProjectRepository';
import { Project } from '../../../../core/domain/entities/Project';
import { ProjectId } from '../../../../core/domain/value-objects/ProjectId';
import { ProjectMapper } from '../mappers/ProjectMapper';

export class PrismaProjectRepository implements IProjectRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async findById(id: ProjectId): Promise<Project | null> {
    const record = await this.prisma.project.findUnique({
      where: { id: id.value },
    });

    return record ? ProjectMapper.toDomain(record) : null;
  }

  async findAllByOwner(ownerId: string): Promise<Project[]> {
    const records = await this.prisma.project.findMany({
      where: { ownerId },
      orderBy: { updatedAt: 'desc' },
    });

    return records.map((record) => ProjectMapper.toDomain(record));
  }

  async save(project: Project): Promise<void> {
    await this.prisma.project.upsert({
      where: { id: project.id.value },
      create: ProjectMapper.toPrismaCreate(project),
      update: ProjectMapper.toPrismaUpdate(project),
    });
  }

  async delete(id: ProjectId): Promise<void> {
    await this.prisma.project.delete({
      where: { id: id.value },
    });
  }
}