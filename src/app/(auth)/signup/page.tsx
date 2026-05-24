'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

import { signupAction } from './actions';
import { PublicPageHeader } from '../../../presentation/public/PublicPageHeader';
import { PublicPageShell } from '../../../presentation/public/PublicPageShell';
import { PublicHeaderActionLink } from '../../../presentation/public/PublicHeaderActionLink';
import { PublicAuthCard } from '../../../presentation/public/PublicAuthCard';
import { PublicAuthIntro } from '../../../presentation/public/PublicAuthIntro';
import { PublicAuthCardHeader } from '../../../presentation/public/PublicAuthCardHeader';
import { PublicAuthFooterLink } from '../../../presentation/public/PublicAuthFooterLink';
import { PublicAuthTextField } from '../../../presentation/public/PublicAuthTextField';
import { PublicAuthSubmitButton } from '../../../presentation/public/PublicAuthSubmitButton';

export default function SignupPage() {
  const router = useRouter();

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const result = await signupAction(formData);

    if (result?.error) {
      setError(result.error);
      setLoading(false);
      return;
    }

    router.push('/signin?registered=true');
  }

  return (
    <PublicPageShell>
      <section
        className="sf-auth-shell"
        style={{
          maxWidth: 1120,
          margin: '0 auto',
          minHeight: '100vh',
          padding: '32px 24px',
          display: 'grid',
          gridTemplateRows: 'auto 1fr',
        }}
      >
        <PublicPageHeader variant="auth">
          <PublicHeaderActionLink href="/signin">
            Sign in
          </PublicHeaderActionLink>
        </PublicPageHeader>

        <div
          className="sf-auth-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) 420px',
            gap: 56,
            alignItems: 'center',
            padding: '48px 0',
          }}
        >
          <PublicAuthIntro
            eyebrow="Start your workspace"
            title="Create your visual architecture workspace."
            description="Register to start modeling systems, containers, components, flowcharts, nested scopes, ports, and project snapshots in StructureFlow."
            features={[
              {
                title: 'Model nested architecture',
                text: 'Move from high-level system maps into detailed inner scopes.',
              },
              {
                title: 'Connect structure and flow',
                text: 'Use architecture edges, flowchart shapes, ports, and handles.',
              },
              {
                title: 'Keep your work portable',
                text: 'Import and export project snapshots as StructureFlow JSON.',
              },
            ]}
          />

          <PublicAuthCard>
            <PublicAuthCardHeader
              title="Create account"
              description="Set up your account and start building your first system map."
            />

            <form
              onSubmit={handleSubmit}
              style={{
                display: 'grid',
                gap: 14,
              }}
            >
              <PublicAuthTextField
                label="Name"
                name="name"
                placeholder="Your name"
                disabled={loading}
              />

              <PublicAuthTextField
                label="Email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                disabled={loading}
              />

              <PublicAuthTextField
                label="Password"
                name="password"
                type="password"
                placeholder="Minimum 8 characters"
                required
                disabled={loading}
              />

              {error ? (
                <div
                  style={{
                    border: '1px solid #fecaca',
                    background: '#fef2f2',
                    color: '#b91c1c',
                    borderRadius: 12,
                    padding: '10px 12px',
                    fontSize: 13,
                    lineHeight: 1.5,
                  }}
                >
                  {error}
                </div>
              ) : null}

              <PublicAuthSubmitButton loading={loading}>
                {loading ? 'Creating account…' : 'Create account'}
              </PublicAuthSubmitButton>
            </form>

            <PublicAuthFooterLink
              text="Already have an account?"
              href="/signin"
              linkLabel="Sign in"
            />
          </PublicAuthCard>
        </div>
      </section>
    </PublicPageShell>
  );
}