import { getUserId } from '../../../infrastructure/auth/getUserId';
import { prisma } from '../../../infrastructure/persistence/prisma/client';
import { PrismaProjectRepository } from '../../../infrastructure/persistence/prisma/repositories/PrismaProjectRepository';
import { CreateProjectButton } from '../../../presentation/dashboard/CreateProjectButton';
import { EmptyState } from '../../../presentation/dashboard/EmptyState';
import { ProjectGrid } from '../../../presentation/dashboard/ProjectGrid';
import type { DashboardProjectDto } from '../../../presentation/dashboard/types';

export default async function DashboardPage() {
  const userId = await getUserId();
  const projectRepository = new PrismaProjectRepository(prisma);
  const projects = await projectRepository.findAllByOwner(userId);
  const projectDtos: DashboardProjectDto[] = projects
    .sort((left, right) => right.updatedAt.getTime() - left.updatedAt.getTime())
    .map((project) => ({
      id: project.id.toString(),
      name: project.name,
      updatedAt: project.updatedAt.toISOString(),
    }));

  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#f8fafc',
        padding: '40px 24px 64px',
      }}
    >
      <div style={{ margin: '0 auto', maxWidth: 1120 }}>
        <header
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
            marginBottom: 32,
          }}
        >
          <div>
            <p style={{ margin: 0, color: '#64748b', fontSize: 14 }}>Dashboard</p>
            <h1 style={{ margin: '6px 0 0', color: '#0f172a', fontSize: 32 }}>StructureFlow</h1>
          </div>

          <CreateProjectButton />
        </header>

        {projectDtos.length === 0 ? <EmptyState /> : <ProjectGrid projects={projectDtos} />}
      </div>
    </main>
  );
}
