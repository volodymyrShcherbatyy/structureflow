export const dynamic = 'force-dynamic';

import { ReactNode } from 'react';

import { getUserId } from '../../infrastructure/auth/getUserId';

type ProtectedLayoutProps = {
  children: ReactNode;
};

export default async function ProtectedLayout({ children }: ProtectedLayoutProps) {
  await getUserId();

  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        minHeight: 0,
      }}
    >
      {children}
    </div>
);
}
