"use client"

import { signIn } from "next-auth/react"
import { useState } from "react"

export function SignInForm() {
  const [email, setEmail] = useState("test@test.com")
  const [password, setPassword] = useState("test")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/dashboard"
    })
  }

  return (
    <form onSubmit={handleSubmit}>
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

      <button type="submit">Login</button>
    </form>
  )
}