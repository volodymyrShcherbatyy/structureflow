import { redirect } from 'next/navigation';

import { getServerSession } from '../../../infrastructure/auth/nextauth/getServerSession';
import { SignInForm } from '../../../presentation/auth/SignInForm';

export default async function SignInPage() {
  const session = await getServerSession();

  if (session?.user?.id) {
    redirect('/dashboard');
  }

  return (
    <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center' }}>
      <SignInForm />
    </main>
  );
}
