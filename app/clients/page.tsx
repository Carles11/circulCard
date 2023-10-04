'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react'
import RealtimeClients from './realTimeClients'

import type { Database } from '../../types/supabase'
import { redirect } from 'next/navigation'

export default function Clients() {
  const [clients, setClients] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Create a Supabase client configured to use cookies
  const supabase = createClientComponentClient()

  useEffect(() => {
    const supabase = createClientComponentClient<Database>()

    const checkUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession()

      if (!session) {
        redirect('/unauthenticated')
      }
    }

    checkUser()
  }, [supabase])

  useEffect(() => {
    const getClients = async () => {
      try {
        const { data, error } = await supabase.from('clients').select()
        if (error) {
          throw new Error(error.message)
        }

        setClients(data || [])
      } catch (error: any) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    getClients()
  }, [supabase, setClients, setLoading, setError])

  if (loading) {
    return <p className="text-white">Loading...</p>
  }

  if (error) {
    return <p className="text-red-500">{error}</p>
  }

  return (
    <div className="flex flex-col">
      <RealtimeClients clients={clients} />
    </div>
  )
}
