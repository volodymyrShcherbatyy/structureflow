import { redirect } from 'next/navigation';

import { getServerSession } from '../../../infrastructure/auth/nextauth/getServerSession';
import { SignInForm } from '../../../presentation/auth/SignInForm';
import { PublicPageHeader } from '../../../presentation/public/PublicPageHeader';
import { PublicPageShell } from '../../../presentation/public/PublicPageShell';
import { PublicHeaderActionLink } from '../../../presentation/public/PublicHeaderActionLink';
import { PublicAuthCard } from '../../../presentation/public/PublicAuthCard';
import { PublicAuthIntro } from '../../../presentation/public/PublicAuthIntro';
import { PublicAuthCardHeader } from '../../../presentation/public/PublicAuthCardHeader';
import { PublicAuthFooterLink } from '../../../presentation/public/PublicAuthFooterLink';

export const dynamic = 'force-dynamic';

export default async function SignInPage() {
  const session = await getServerSession();

  if (session) {
    redirect('/dashboard');
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
          <PublicHeaderActionLink href="/signup">
            Create account
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
            eyebrow="Welcome back"
            title="Continue building your system maps."
            description="Sign in to access your StructureFlow workspace, manage projects, open canvas diagrams, and keep modeling architecture across nested scopes."
            features={[
              {
                title: 'Protected workspace',
                text: 'Your dashboard and project canvases stay behind authentication.',
              },
              {
                title: 'Multi-user projects',
                text: 'Each user works only with their own projects.',
              },
              {
                title: 'Visual continuity',
                text: 'Return to your saved architecture and flowchart models.',
              },
            ]}
          />

          <PublicAuthCard>
            <PublicAuthCardHeader
              title="Sign in"
              description="Enter your credentials to open your dashboard."
            />

            <SignInForm />

            <PublicAuthFooterLink
              text="New to StructureFlow?"
              href="/signup"
              linkLabel="Create an account"
            />
          </PublicAuthCard>
        </div>
      </section>
    </PublicPageShell>
  );
}