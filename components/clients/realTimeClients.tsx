'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import Link from 'next/link'
import ClientItem from 'components/clients/clientItem'

function realTimeClients({ clients }: { clients: any }) {
  const supabase = createClientComponentClient()
  const router = useRouter()

  const [currentUserEmail, setCurrentUserEmail] = useState<string | undefined>(
    ''
  )

  const adminUsers = ['info@thecirculart.com']

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

  return (
    <div className="flex flex-col items-center mt-4 md:mt-16">
      <h3>Selecciona tu entidad</h3>
      {clients.length > 0 ? (
        clients.map((cli: any) => (
          <Link
            key={cli.id}
            href={{
              pathname: 'dashboard',
              query: {
                clientID: cli.id,
              },
            }}
            className="flex items-center place-content-center group text-sm"
          >
            <ClientItem client={cli} />
          </Link>
        ))
      ) : (
        <p>No clients available</p>
      )}

      {currentUserEmail && adminUsers.includes(currentUserEmail) && (
        <div className="flex flex-col mt-16">
          <h1>Hey, we´ve detected that you are an admin user!</h1>
          <h5>How would you like to proceed?</h5>
          <h6>(No worries, only admins can see these options below)</h6>
          <div className="mt-8 flex items-center  align-middle gap-4">
            <Link
              key="fake-key-id"
              href="https://www.thecirculart.com"
              target="_blank"
              className="flex items-center justify-center w-8 h-8 bg-green-500 rounded-full cursor-pointer shadow shadow-lg shadow-gray-500"
            >
              <span className="text-foreground text-2xl font-bold pb-1">+</span>
            </Link>
            <h2 className="">Add a new client </h2>
          </div>
          <div className="mt-8 flex items-center  align-middle gap-4">
            <Link
              key="fake-key-id"
              href="https://www.thecirculart.com"
              target="_blank"
              className="flex items-center justify-center w-8 h-8 bg-green-500 rounded-full cursor-pointer shadow shadow-lg shadow-gray-500"
            >
              <span className="text-foreground text-2xl font-bold pb-1">-</span>
            </Link>
            <h2 className="">Delete a client </h2>
          </div>
        </div>
      )}
    </div>
  )
}

export default realTimeClients
