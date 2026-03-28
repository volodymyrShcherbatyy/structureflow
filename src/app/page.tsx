import { redirect } from "next/navigation"
import { getServerSession } from "../infrastructure/auth/nextauth/getServerSession"

export default async function HomePage() {
  const session = await getServerSession()

  if (session) {
    redirect("/dashboard")
  }

  redirect("/signin")
}