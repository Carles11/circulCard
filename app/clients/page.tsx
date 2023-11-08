'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react'
import RealtimeClients from 'components/clients/realTimeClients'
import { useRouter } from 'next/navigation' // Import the useRouter hook

import type { Database } from '../../types/supabase'
import Loader from 'components/loader'

export default function Clients() {
  const [clients, setClients] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter() // Initialize the useRouter hook
  const [currentUserEmail, setCurrentUserEmail] = useState<string | undefined>(
    ''
  )

  // Create a Supabase client configured to use cookies
  const supabase = createClientComponentClient<Database>()
  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession()

      if (!session) {
        router.push('/unauthenticated') // Use router.push instead of redirect
      } else {
        setCurrentUserEmail(session.user.email)
      }
    }

    checkUser()
  }, [supabase, router])

  // useEffect to fetch clients using currentUser.email
  useEffect(() => {
    if (currentUserEmail) {
      const getClients = async () => {
        try {
          const { data, error } = await supabase
            .from('clients')
            .select('id, client_name, profiles(user_id, email)')
            .filter('profiles.email', 'eq', currentUserEmail)

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
    }
  }, [supabase, currentUserEmail, setClients, setLoading, setError])

  if (loading) {
    return <Loader />
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
