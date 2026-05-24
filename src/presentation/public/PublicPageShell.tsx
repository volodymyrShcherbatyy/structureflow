import { ReactNode } from 'react';

type PublicPageShellProps = {
  children: ReactNode;
};

export function PublicPageShell({ children }: PublicPageShellProps) {
  return (
    <main
      style={{
        minHeight: '100vh',
        background:
          'radial-gradient(circle at top left, #dbeafe 0, transparent 32%), linear-gradient(135deg, #f8fafc 0%, #eef2ff 45%, #f8fafc 100%)',
        color: '#0f172a',
      }}
    >
      {children}
    </main>
  );
}