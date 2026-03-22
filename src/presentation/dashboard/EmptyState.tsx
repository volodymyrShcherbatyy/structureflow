import { CreateProjectButton } from './CreateProjectButton';

export function EmptyState() {
  return (
    <section
      style={{
        display: 'grid',
        placeItems: 'center',
        minHeight: 420,
        borderRadius: 24,
        border: '1px dashed #cbd5e1',
        background: '#fff',
        padding: 32,
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: 420 }}>
        <div style={{ fontSize: 52, marginBottom: 12 }} aria-hidden="true">
          🧭
        </div>
        <h2 style={{ margin: 0, color: '#0f172a', fontSize: 28 }}>No projects yet</h2>
        <p style={{ margin: '12px 0 24px', color: '#64748b', lineHeight: 1.6 }}>
          Create your first StructureFlow project to start mapping systems, dependencies, and drill-down views.
        </p>
        <CreateProjectButton />
      </div>
    </section>
  );
}
