'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

import Messages from '../messages'
import { useEffect, useState } from 'react'
import { redirect, useRouter } from 'next/navigation'
import { User as SupabaseUser } from '@supabase/supabase-js'

import type { Database } from 'types/supabase'

interface User extends SupabaseUser {
  // Additional properties specific to your application
}
export default function Login() {
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()
  useEffect(() => {
    const fetchData = async () => {
      const supabase = createClientComponentClient<Database>()

      const {
        data: { user: fetchedUser },
      } = await supabase.auth.getUser()

      setUser(fetchedUser || null)
      router.refresh()
    }

    fetchData()
  }, [])

  useEffect(() => {
    // Redirect logged-in users
    user?.id && redirect('/clients')
  }, [user])

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <form
        className="flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
        action="/routes/sign-in"
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
          formAction="/routes/sign-up"
          className="border border-gray-700 rounded px-4 py-2 text-white mb-2"
        >
          Sign Up
        </button> */}
      </form>
      <Messages />
    </div>
  )
}
