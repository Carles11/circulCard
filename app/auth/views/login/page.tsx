'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

import Link from 'next/link'
import Messages from '../messages'
import { useEffect, useState } from 'react'
import { redirect } from 'next/navigation'
import { User as SupabaseUser } from '@supabase/supabase-js'

import type { Database } from '../../../../types/supabase'

interface User extends SupabaseUser {
  // Additional properties specific to your application
}
export default function Login() {
  const [user, setUser] = useState<User | null>(null)
  console.log('userrrrlrrlrlrlr', user)

  useEffect(() => {
    const fetchData = async () => {
      const supabase = createClientComponentClient<Database>()

      const {
        data: { user: fetchedUser },
      } = await supabase.auth.getUser()

      setUser(fetchedUser || null)
    }

    fetchData()
  }, [])

  useEffect(() => {
    user?.id && redirect('/clients')
  }, [])

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <Link
        href="/"
        className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>{' '}
        Volver
      </Link>

      <form
        className="flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
        action="/auth/routes/sign-in"
        method="post"
      >
        <label className="text-md" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          name="email"
          placeholder="you@example.com"
          required
          autoComplete="username"
        />
        <label className="text-md" htmlFor="password">
          Password
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          type="password"
          name="password"
          placeholder="••••••••"
          required
          autoComplete="current-password"
        />
        <button className="bg-green-700 rounded-full text-lg px-4 py-2 text-white mb-2 hover:bg-btn-background-hover">
          Validar
        </button>
        {/* <button
          formAction="/auth/routes/sign-up"
          className="border border-gray-700 rounded px-4 py-2 text-white mb-2"
        >
          Sign Up
        </button> */}
      </form>
      <Messages />
    </div>
  )
}
