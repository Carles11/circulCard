'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react'
import RealtimeClients from 'components/clients/realTimeClients'
import { useRouter } from 'next/navigation' // Import the useRouter hook
import { User as SupabaseUser } from '@supabase/supabase-js'

import type { Database } from '../../types/supabase'
import Loader from 'components/loader'

export default function Clients() {
  const [clients, setClients] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter() // Initialize the useRouter hook
  const [currentUser, setCurrentUser] = useState<SupabaseUser | null>(null)

  // Create a Supabase client configured to use cookies
  const supabase = createClientComponentClient<Database>()
  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession()

      if (!session) {
        router.push('/unauthenticated') // Use router.push instead of redirect
      }
    }

    checkUser()
  }, [supabase, router])

  useEffect(() => {
    const fetchUserData = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      console.log({ user })
      if (!user) {
        router.push('/unauthenticated') // Use router.push instead of redirect
      } else {
        setCurrentUser(user)
      }
    }

    fetchUserData()
  }, [supabase, router])

  // Second useEffect to fetch clients using currentUser.id
  useEffect(() => {
    const getClients = async () => {
      try {
        const { data, error } = await supabase
          .from('clients')
          .select('id, client_name, profiles(user_id, email)')
          .not('profiles', 'is', null)

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
    return <Loader />
  }

  if (error) {
    return <p className="text-red-500">{error}</p>
  }

  console.log({ clients })
  return (
    <div className="flex flex-col">
      <RealtimeClients clients={clients} />
    </div>
  )
}
