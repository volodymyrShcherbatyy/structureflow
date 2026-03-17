import { redirect } from "next/navigation"
import { getServerSession } from "../../../infrastructure/auth/nextauth/getServerSession"
import { SignInForm } from "../../../presentation/auth/SignInForm"

export const dynamic = "force-dynamic"

export default async function SignInPage() {
  
  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center" }}>
      <SignInForm />
    </main>
  )
}