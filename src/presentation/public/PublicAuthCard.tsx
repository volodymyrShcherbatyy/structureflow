import { ReactNode } from 'react';

type PublicAuthCardProps = {
  children: ReactNode;
};

export function PublicAuthCard({ children }: PublicAuthCardProps) {
  return (
    <section
      className="sf-auth-card"
      style={{
        borderRadius: 28,
        border: '1px solid rgba(148, 163, 184, 0.35)',
        background: 'rgba(255,255,255,0.88)',
        boxShadow: '0 30px 80px rgba(15, 23, 42, 0.16)',
        padding: 28,
        backdropFilter: 'blur(14px)',
      }}
    >
      {children}
    </section>
  );
}