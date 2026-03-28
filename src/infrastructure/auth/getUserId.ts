import { getServerSession } from './nextauth/getServerSession'
import { redirect } from 'next/navigation'

export async function getUserId(): Promise<string> {
  const session = await getServerSession()

  if (!session?.user?.id) {
    redirect('/signin')
  }

  return session.user.id
}