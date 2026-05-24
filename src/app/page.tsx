import Link from 'next/link';

import { getServerSession } from '../infrastructure/auth/nextauth/getServerSession';
import { PublicPageShell } from '../presentation/public/PublicPageShell';
import { PublicPageHeader } from '../presentation/public/PublicPageHeader';

export default async function HomePage() {
  const session = await getServerSession();

  return (
    <PublicPageShell>
      <section
        className="sf-public-shell"
        style={{
          maxWidth: 1180,
          margin: '0 auto',
          padding: '32px 24px 72px',
        }}
      >
        <PublicPageHeader>
          <nav style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            {session ? (
              <Link
                href="/dashboard"
                style={{
                  borderRadius: 999,
                  background: '#0f172a',
                  color: '#fff',
                  padding: '10px 16px',
                  textDecoration: 'none',
                  fontWeight: 700,
                  boxShadow: '0 12px 24px rgba(15, 23, 42, 0.18)',
                }}
              >
                Open dashboard
              </Link>
            ) : (
              <>
                <Link
                  href="/signin"
                  style={{
                    color: '#334155',
                    textDecoration: 'none',
                    fontWeight: 700,
                    padding: '10px 14px',
                  }}
                >
                  Sign in
                </Link>

                <Link
                  href="/signup"
                  style={{
                    borderRadius: 999,
                    background: '#0f172a',
                    color: '#fff',
                    padding: '10px 16px',
                    textDecoration: 'none',
                    fontWeight: 700,
                    boxShadow: '0 12px 24px rgba(15, 23, 42, 0.18)',
                  }}
                >
                  Get started
                </Link>
              </>
            )}
          </nav>
        </PublicPageHeader>

        <div className="sf-landing-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(360px, 520px)',
            gap: 56,
            alignItems: 'center',
          }}
        >
          <div>
            <p
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                margin: '0 0 20px',
                border: '1px solid #c7d2fe',
                background: 'rgba(255, 255, 255, 0.72)',
                color: '#3730a3',
                borderRadius: 999,
                padding: '8px 12px',
                fontSize: 13,
                fontWeight: 700,
              }}
            >
              Visual architecture · Drill-down · Flowcharts
            </p>

            <h1
              className="sf-landing-title"
              style={{
                margin: 0,
                maxWidth: 680,
                fontSize: 64,
                lineHeight: 0.96,
                letterSpacing: '-0.07em',
              }}
            >
              Model complex systems as clear visual flows.
            </h1>

            <p
              style={{
                margin: '24px 0 0',
                maxWidth: 610,
                color: '#475569',
                fontSize: 19,
                lineHeight: 1.7,
              }}
            >
              StructureFlow helps you design nested software architecture,
              connect components, document responsibilities, and move from
              high-level system maps into detailed inner flows.
            </p>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 12,
                marginTop: 34,
              }}
            >
              <Link
                href={session ? '/dashboard' : '/signup'}
                style={{
                  borderRadius: 14,
                  background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                  color: '#fff',
                  padding: '14px 20px',
                  textDecoration: 'none',
                  fontWeight: 800,
                  boxShadow: '0 18px 34px rgba(37, 99, 235, 0.28)',
                }}
              >
                {session ? 'Open your workspace' : 'Start modeling'}
              </Link>

              <Link
                href={session ? '/dashboard' : '/signin'}
                style={{
                  borderRadius: 14,
                  border: '1px solid #cbd5e1',
                  background: 'rgba(255, 255, 255, 0.78)',
                  color: '#0f172a',
                  padding: '14px 20px',
                  textDecoration: 'none',
                  fontWeight: 800,
                }}
              >
                {session ? 'Go to dashboard' : 'Sign in'}
              </Link>
            </div>

            <div
              className="sf-feature-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                gap: 14,
                marginTop: 44,
                maxWidth: 620,
              }}
            >
              {[
                ['Nested views', 'Drill into systems, containers and components.'],
                ['Smart canvas', 'Connect nodes, ports and flowchart elements.'],
                ['Portable JSON', 'Import and export project snapshots.'],
              ].map(([title, text]) => (
                <div
                  key={title}
                  style={{
                    border: '1px solid #e2e8f0',
                    background: 'rgba(255, 255, 255, 0.72)',
                    borderRadius: 18,
                    padding: 16,
                    boxShadow: '0 12px 30px rgba(15, 23, 42, 0.05)',
                  }}
                >
                  <strong style={{ display: 'block', marginBottom: 6 }}>
                    {title}
                  </strong>
                  <span
                    style={{
                      color: '#64748b',
                      fontSize: 13,
                      lineHeight: 1.5,
                    }}
                  >
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="sf-preview-card"
            aria-label="StructureFlow canvas preview"
            style={{
              position: 'relative',
              minHeight: 520,
              borderRadius: 30,
              border: '1px solid rgba(148, 163, 184, 0.35)',
              background:
                'linear-gradient(180deg, rgba(255,255,255,0.92), rgba(248,250,252,0.86))',
              boxShadow: '0 30px 80px rgba(15, 23, 42, 0.18)',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                padding: '18px 20px',
                borderBottom: '1px solid #e2e8f0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: 'rgba(255,255,255,0.72)',
              }}
            >
              <strong>System canvas</strong>
              <span style={{ color: '#64748b', fontSize: 13 }}>
                Autosaved
              </span>
            </div>

            <div
              style={{
                position: 'absolute',
                inset: '58px 0 0',
                backgroundImage:
                  'linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)',
                backgroundSize: '34px 34px',
                opacity: 0.55,
              }}
            />

            <div
              style={{
                position: 'relative',
                padding: 32,
                minHeight: 430,
              }}
            >
              <PreviewNode
                title="Frontend App"
                subtitle="page · component"
                top={36}
                left={38}
                color="#2563eb"
              />
              <PreviewNode
                title="API Layer"
                subtitle="container"
                top={178}
                left={230}
                color="#0f766e"
              />
              <PreviewNode
                title="Database"
                subtitle="external"
                top={314}
                left={76}
                color="#475569"
              />
              <PreviewDecision top={78} left={332} />
              <PreviewArrow top={139} left={180} rotate={18} width={150} />
              <PreviewArrow top={258} left={164} rotate={136} width={140} />
              <PreviewArrow top={164} left={356} rotate={92} width={112} />

              <div
                style={{
                  position: 'absolute',
                  right: 24,
                  bottom: 24,
                  width: 150,
                  borderRadius: 18,
                  border: '1px solid #c7d2fe',
                  background: '#eef2ff',
                  padding: 14,
                  color: '#3730a3',
                  fontSize: 13,
                  fontWeight: 700,
                  boxShadow: '0 14px 34px rgba(79, 70, 229, 0.14)',
                }}
              >
                Drill-down ready
                <div
                  style={{
                    marginTop: 6,
                    color: '#6366f1',
                    fontWeight: 500,
                    lineHeight: 1.4,
                  }}
                >
                  Open inner scopes without losing the big picture.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PublicPageShell>
  );
}

function PreviewNode({
  title,
  subtitle,
  top,
  left,
  color,
}: {
  title: string;
  subtitle: string;
  top: number;
  left: number;
  color: string;
}) {
  return (
    <div
      style={{
        position: 'absolute',
        top,
        left,
        width: 170,
        borderRadius: 18,
        overflow: 'hidden',
        border: '1px solid #dbe4f0',
        background: '#fff',
        boxShadow: '0 18px 38px rgba(15, 23, 42, 0.12)',
      }}
    >
      <div
        style={{
          height: 34,
          background: color,
        }}
      />
      <div style={{ padding: 14 }}>
        <strong style={{ display: 'block' }}>{title}</strong>
        <span style={{ color: '#64748b', fontSize: 12 }}>{subtitle}</span>
      </div>
    </div>
  );
}

function PreviewDecision({
  top,
  left,
}: {
  top: number;
  left: number;
}) {
  return (
    <div
      style={{
        position: 'absolute',
        top,
        left,
        width: 118,
        height: 118,
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 16,
          transform: 'rotate(45deg)',
          borderRadius: 14,
          background: '#fef3c7',
          border: '1px solid #f59e0b',
          boxShadow: '0 18px 38px rgba(245, 158, 11, 0.2)',
        }}
      />
      <strong
        style={{
          position: 'relative',
          fontSize: 13,
          color: '#92400e',
        }}
      >
        Decision
      </strong>
    </div>
  );
}

function PreviewArrow({
  top,
  left,
  rotate,
  width,
}: {
  top: number;
  left: number;
  rotate: number;
  width: number;
}) {
  return (
    <div
      style={{
        position: 'absolute',
        top,
        left,
        width,
        height: 2,
        background: '#64748b',
        transform: `rotate(${rotate}deg)`,
        transformOrigin: 'left center',
      }}
    >
      <span
        style={{
          position: 'absolute',
          right: -1,
          top: -4,
          width: 0,
          height: 0,
          borderTop: '5px solid transparent',
          borderBottom: '5px solid transparent',
          borderLeft: '8px solid #64748b',
        }}
      />
    </div>
  );
}