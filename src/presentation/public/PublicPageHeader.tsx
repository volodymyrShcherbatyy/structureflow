import { ReactNode } from 'react';

import { PublicBrandLink } from './PublicBrandLink';

type PublicPageHeaderProps = {
  children: ReactNode;
  variant?: 'landing' | 'auth';
};

export function PublicPageHeader({
  children,
  variant = 'landing',
}: PublicPageHeaderProps) {
  return (
    <header
      className={variant === 'auth' ? 'sf-auth-header' : 'sf-public-header'}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        marginBottom: variant === 'landing' ? 72 : undefined,
      }}
    >
      <PublicBrandLink />
      {children}
    </header>
  );
}