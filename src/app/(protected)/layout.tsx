import { ReactNode } from 'react';
import { redirect } from 'next/navigation';

import { getServerSession } from '../../infrastructure/auth/nextauth/getServerSession';

type ProtectedLayoutProps = {
  children: ReactNode;
};

export default async function ProtectedLayout({ children }: ProtectedLayoutProps) {
  const session = await getServerSession();

  if (!session?.user?.id) {
    redirect('/signin');
  }

  return children;
}
