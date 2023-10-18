'use client'
import { useState, useEffect } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import type { Database } from 'types/supabase'

import Messages from '../messages'

export default function PasswordUpdate() {
  // ***********************
  // added this code because /callback is not refreshing the session
  // works also for email-invitations from supabase dashboard
  const [accessToken, setAccessToken] = useState('')
  const [refreshToken, setRefreshToken] = useState('')
  const [token, setToken] = useState('')
  const supabase = createClientComponentClient<Database>()
  useEffect(() => {
    // Get the access token and refresh token from the URL
    if (typeof window !== 'undefined') {
      const hashParams = new URLSearchParams(window.location.hash.substring(1))
      setAccessToken(hashParams.get('access_token') || '')
      setRefreshToken(hashParams.get('refresh_token') || '')
      setToken(hashParams.get('token') || '')
    }
  }, [])

  useEffect(() => {
    // Authenticate the user using the access token and refresh token
    const getSessionWithTokens = async () => {
      if (accessToken && refreshToken) {
        const { data, error } = await supabase.auth.setSession({
          access_token: accessToken,
          refresh_token: refreshToken,
        })

        if (error) {
          alert(`Error signing in: ${error.message}`)
        }
      }
    }

    // Call this function only when accessToken and refreshToken are available.
    if (accessToken && refreshToken) {
      getSessionWithTokens()
    }
  }, [accessToken, refreshToken])

  // ***********************
  console.log({ accessToken, refreshToken, token })

  return (
    <div className="flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <form
        action="/routes/update-password"
        method="post"
        className="flex flex-col w-full my-28 py-2 px-4 rounded-md no-underline"
      >
        <h3>Actualiza tu contraseña</h3>

        <label className="sr-only" htmlFor="username">
          Username
        </label>
        <input
          className="sr-only"
          type="username"
          name="username"
          placeholder=""
          autoComplete="username"
        />
        <label className="text-md my-2" htmlFor="password">
          Nueva contraseña
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          type="password"
          name="new_password"
          placeholder="••••••••"
          required
          autoComplete="new-password"
        />

        <button className="bg-lightgreenBg rounded-full text-lg px-4 py-2 mb-2 hover:bg-btn-background-hover hover:text-btn-text-color-hover">
          Actualizar
        </button>
      </form>
      <Messages />
    </div>
  )
}
