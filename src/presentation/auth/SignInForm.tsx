"use client"

import { signIn } from "next-auth/react"
import { useState } from "react"
import Link from "next/link"

export function SignInForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    })

    if (result?.error) {
      setError("Невірний email або пароль")
      setLoading(false)
      return
    }

    window.location.href = "/dashboard"
  }

  function handleGoogleLogin() {
    signIn("google", { callbackUrl: "/dashboard" })
  }

  return (
    <div style={{ width: 300, display: "flex", flexDirection: "column", gap: 12 }}>
      
      <button onClick={handleGoogleLogin}>
        Увійти через Google
      </button>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <input
          placeholder="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        {error && (
          <div style={{ color: "red", fontSize: 12 }}>
            {error}
          </div>
        )}

        <button type="submit" disabled={loading}>
          {loading ? "Входимо..." : "Login"}
        </button>

        <div style={{ fontSize: 12, textAlign: "center", marginTop: 8 }}>
          Немає акаунту?{" "}
          <Link href="/signup" style={{ color: "#2563eb" }}>
            Зареєструватись
          </Link>
        </div>
      </form>
    </div>
  )
}