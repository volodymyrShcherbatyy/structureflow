import type { DashboardProjectDto } from './types';
import { ProjectCard } from './ProjectCard';

type ProjectGridProps = {
  projects: DashboardProjectDto[];
};

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <section
      aria-label="Projects"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: 20,
      }}
    >
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
}
