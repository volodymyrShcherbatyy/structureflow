import { PrismaAdapter } from '@auth/prisma-adapter';
import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from "next-auth/providers/credentials"
import { prisma } from '../../persistence/prisma/client';
import bcrypt from 'bcryptjs'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),

  secret: process.env.NEXTAUTH_SECRET,

    providers: [
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          email: { label: "Email", type: "text" },
          password: { label: "Password", type: "password" }
        },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email.toLowerCase() }
        })

        if (!user || !user.password) {
          return null
        }

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        )

        if (!isValid) {
          return null
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
        }
      }

    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),

  ],

  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/signin',
  },
  
  callbacks: {
  async jwt({ token, user }) {
    if (user) {
      token.id = user.id
    }
    return token
  },

  async session({ session, token }) {
    if (session.user) {
      if (session.user && token.id) {
        session.user.id = token.id as string
      }
    }
    return session
  }
},
};
