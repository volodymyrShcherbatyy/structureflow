import Link from 'next/link';
import { ReactNode } from 'react';

type PublicHeaderActionLinkProps = {
  href: string;
  children: ReactNode;
};

export function PublicHeaderActionLink({
  href,
  children,
}: PublicHeaderActionLinkProps) {
  return (
    <Link
      href={href}
      style={{
        borderRadius: 999,
        border: '1px solid #cbd5e1',
        background: 'rgba(255,255,255,0.72)',
        color: '#0f172a',
        padding: '10px 16px',
        textDecoration: 'none',
        fontWeight: 700,
      }}
    >
      {children}
    </Link>
  );
}