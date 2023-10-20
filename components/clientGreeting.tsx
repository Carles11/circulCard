'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import type { Database } from '../types/supabase'

import { useEffect, useState } from 'react'

import Loader from 'components/loader'

interface GreetingTypes {
  products: string
  trip: string
}

function ClientGreeting({
  clientID,
  productName,
  page,
}: {
  clientID: string
  productName: string
  page: string
}) {
  const [client, setClient] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const pageRefProp = page as string
  const supabase = createClientComponentClient<Database>()

  const pageGreetings: GreetingTypes = {
    products: 'Estos son tus productos reciclados',
    trip: `Este es el viaje de tu ${productName ? productName : 'producto'}`,
  }

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
    return <Loader />
  }

  if (error) {
    return <p className="text-red-500">{error}</p>
  }

  return (
    <div className="flex flex-col justify-star">
      <h3>Hola</h3>
      <h2>{client[0].client_name.toUpperCase()},</h2>
      <h3>{pageGreetings[pageRefProp as keyof GreetingTypes]}:</h3>
    </div>
  )
}

export default ClientGreeting
