'use client';

import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { PublicAuthTextField } from '../public/PublicAuthTextField';
import { PublicAuthSubmitButton } from '../public/PublicAuthSubmitButton';
import { PublicAuthSecondaryButton } from '../public/PublicAuthSecondaryButton';

export function SignInForm() {
  const searchParams = useSearchParams();

  const wasRegistered = searchParams.get('registered') === 'true';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isCredentialsLoading, setIsCredentialsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError(null);
    setIsCredentialsLoading(true);

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError('Invalid email or password.');
      setIsCredentialsLoading(false);
      return;
    }

    window.location.href = '/dashboard';
  }

  function handleGoogleLogin() {
    setError(null);
    setIsGoogleLoading(true);
    signIn('google', { callbackUrl: '/dashboard' });
  }

  const isLoading = isCredentialsLoading || isGoogleLoading;

  return (
    <div style={{ display: 'grid', gap: 16 }}>
      {wasRegistered ? (
        <div
          style={{
            border: '1px solid #bbf7d0',
            background: '#f0fdf4',
            color: '#166534',
            borderRadius: 12,
            padding: '10px 12px',
            fontSize: 13,
            lineHeight: 1.5,
          }}
        >
          Account created successfully. You can sign in now.
        </div>
      ) : null}

      <PublicAuthSecondaryButton
        onClick={handleGoogleLogin}
        loading={isLoading}
      >
        {isGoogleLoading ? 'Opening Google…' : 'Continue with Google'}
      </PublicAuthSecondaryButton>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          gap: 12,
          alignItems: 'center',
          color: '#94a3b8',
          fontSize: 12,
          fontWeight: 700,
        }}
      >
        <span style={{ height: 1, background: '#e2e8f0' }} />
        or sign in with email
        <span style={{ height: 1, background: '#e2e8f0' }} />
      </div>

      <form
        onSubmit={handleSubmit}
        style={{
          display: 'grid',
          gap: 14,
        }}
      >
        <PublicAuthTextField
          label="Email"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          disabled={isLoading}
        />

        <PublicAuthTextField
          label="Password"
          type="password"
          placeholder="Your password"
          autoComplete="current-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
          disabled={isLoading}
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

        <PublicAuthSubmitButton loading={isLoading}>
          {isCredentialsLoading ? 'Signing in…' : 'Sign in'}
        </PublicAuthSubmitButton>
      </form>
    </div>
  );
}