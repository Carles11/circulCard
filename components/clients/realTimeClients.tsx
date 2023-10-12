'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

import Link from 'next/link'
import ClientItem from 'components/clients/clientItem'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

function realTimeClients({ clients }: { clients: any }) {
  const supabase = createClientComponentClient()
  const router = useRouter()

  useEffect(() => {
    const channel = supabase
      .channel('realtime clients')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'clients',
        },
        () => {
          router.refresh()
        }
      )
      .subscribe()
    return () => {
      supabase.removeChannel(channel)
    }
  }, [supabase, router])

  return (
    <div>
      {clients.length > 0 ? (
        clients.map((cli: any) => (
          <Link
            key={cli.id}
            href={{
              pathname: 'products',
              query: {
                clientID: cli.id,
              },
            }}
            className="rounded-md no-underline flex items-center group text-sm"
          >
            <ClientItem client={cli} />
          </Link>
        ))
      ) : (
        <p className="text-white">No clients available</p>
      )}
    </div>
  )
}

export default realTimeClients
