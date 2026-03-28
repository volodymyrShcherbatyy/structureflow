'use server'

import bcrypt from 'bcryptjs'
import { prisma } from '../../../infrastructure/persistence/prisma/client'

export async function signupAction(formData: FormData) {
  const email = (formData.get('email') as string)?.toLowerCase().trim()
  const password = formData.get('password') as string
  const name = (formData.get('name') as string)?.trim()

  // Валідація
  if (!email || !password) {
    return { error: 'Заповни всі поля' }
  }

  if (password.length < 8) {
    return { error: 'Пароль має бути мінімум 8 символів' }
  }

  const existing = await prisma.user.findUnique({
    where: { email }
  })

  if (existing) {
    return { error: 'Email вже використовується' }
  }

  const hashedPassword = await bcrypt.hash(password, 12)

  await prisma.user.create({
    data: {
      email,
      name: name || null,
      password: hashedPassword,
    }
  })

  return { success: true }
}