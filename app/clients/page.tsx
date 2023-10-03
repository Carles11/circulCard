'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Clients() {
  const [clients, setClients] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Create a Supabase client configured to use cookies
  const supabase = createClientComponentClient()

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
      {clients.length > 0 ? (
        clients.map((cli) => (
          <Link
            href="/products"
            className="py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
          >
            <button
              className="w-full m-8 text-white bg-green-700 rounded-full text-lg px-4 py-2 text-white mb-2 hover:bg-btn-background-hover"
              key={cli.id}
            >
              {cli.client_name}
            </button>{' '}
          </Link>
        ))
      ) : (
        <p className="text-white">No clients available</p>
      )}
    </div>
  )
}
