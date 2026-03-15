'use client';

import { FormEvent, useState } from 'react';
import { signIn } from 'next-auth/react';

export function SignInForm() {
  const [email, setEmail] = useState('');
  const [emailLoading, setEmailLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const handleEmailSignIn = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEmailLoading(true);

    await signIn('email', {
      email,
      callbackUrl: '/dashboard',
      redirect: true,
    });

    setEmailLoading(false);
  };

  const handleGoogleSignIn = async () => {
    setGoogleLoading(true);

    await signIn('google', {
      callbackUrl: '/dashboard',
      redirect: true,
    });

    setGoogleLoading(false);
  };

  return (
    <section
      style={{
        width: '100%',
        maxWidth: 380,
        border: '1px solid #e5e7eb',
        borderRadius: 12,
        padding: 24,
        display: 'grid',
        gap: 16,
      }}
    >
      <h1 style={{ fontSize: 24, fontWeight: 600 }}>Sign in to StructureFlow</h1>

      <button
        type="button"
        onClick={handleGoogleSignIn}
        disabled={googleLoading}
        style={{ padding: '10px 14px', borderRadius: 8, border: '1px solid #d1d5db' }}
      >
        {googleLoading ? 'Redirecting...' : 'Continue with Google'}
      </button>

      <form onSubmit={handleEmailSignIn} style={{ display: 'grid', gap: 12 }}>
        <label htmlFor="email">Email magic link</label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          style={{ padding: '10px 12px', borderRadius: 8, border: '1px solid #d1d5db' }}
        />
        <button
          type="submit"
          disabled={emailLoading}
          style={{ padding: '10px 14px', borderRadius: 8, border: '1px solid #d1d5db' }}
        >
          {emailLoading ? 'Sending link...' : 'Send magic link'}
        </button>
      </form>
    </section>
  );
}
