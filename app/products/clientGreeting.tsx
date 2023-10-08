'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import type { Database } from '../../types/supabase'

import { useEffect, useState } from 'react'

import Loader from 'components/loader'

function ClientGreeting({ clientID }: { clientID: string }) {
  const [client, setClient] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const supabase = createClientComponentClient<Database>()
  useEffect(() => {
    const getClients = async () => {
      try {
        const { data, error } = await supabase
          .from('clients')
          .select('client_name')
          .eq('id', clientID)
        if (error) {
          throw new Error(error.message)
        }

        setClient(data || {})
      } catch (error: any) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    getClients()
  }, [supabase])

  if (loading) {
    return (
      <p className="text-white">
        <Loader />
      </p>
    )
  }

  if (error) {
    return <p className="text-red-500">{error}</p>
  }

  console.log('ESTEESTPMICLIENTENEEEEE', client)
  return (
    <div className="flex flex-col justify-start text-white ml-8">
      <h3>Hola</h3>
      <h2>{client[0].client_name.toUpperCase()},</h2>
      <h3>estos son tus products reciclados:</h3>
    </div>
  )
}

export default ClientGreeting
