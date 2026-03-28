'use client'

import { useState } from 'react'
import { signupAction } from './actions'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function SignupPage() {
  const router = useRouter()

  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const result = await signupAction(formData)

    if (result?.error) {
      setError(result.error)
      setLoading(false)
      return
    }

    // після успіху → на signin
    router.push('/signin?registered=true')
  }

  return (
    <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center' }}>
      <form onSubmit={handleSubmit} style={{ width: 300, display: 'flex', flexDirection: 'column', gap: 12 }}>
        
        <h2>Реєстрація</h2>

        <input name="name" placeholder="Ім'я" />

        <input name="email" placeholder="Email" required />

        <input
          name="password"
          type="password"
          placeholder="Пароль (мін 8 символів)"
          required
        />

        {error && (
          <div style={{ color: 'red', fontSize: 12 }}>
            {error}
          </div>
        )}

        <button type="submit" disabled={loading}>
          {loading ? 'Створюємо...' : 'Зареєструватись'}
        </button>

        <div style={{ fontSize: 12 }}>
          Вже є акаунт? <Link href="/signin">Увійти</Link>
        </div>
      </form>
    </main>
  )
}