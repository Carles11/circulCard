'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Modal from 'components/modals'
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
  const [userIsAdmin, setUserIsAdmin] = useState<boolean | undefined>(false)
  const [userName, setUserName] = useState<string | undefined>('')
  const [showModal, setShowModal] = useState<boolean>(false)

  // NOT WORKING!!! useEffect to subscribe to any changes into de CLIENTS table.

  // useEffect(() => {
  //   const channel = supabase
  //     .channel('realtime clients')
  //     .on(
  //       'postgres_changes',
  //       {
  //         event: '*',
  //         schema: 'public',
  //         table: 'clients',
  //       },
  //       () => {
  //         router.refresh()
  //       }
  //     )
  //     .subscribe()
  //   return () => {
  //     supabase.removeChannel(channel)
  //   }
  // }, [supabase, router])

  // NOT WORKING!!! useEffect to subscribe to any changes into de CLIENTS table.

  // useEffect(() => {
  //   const channels = supabase
  //     .channel('custom-all-channel')
  //     .on(
  //       'postgres_changes',
  //       { event: '*', schema: 'public', table: 'clients' },
  //       (payload) => {
  //         console.log('Change received!', payload)
  //       }
  //     )
  //     .subscribe()
  //   return () => {
  //     supabase.removeChannel(channels)
  //   }
  // }, [supabase, router])

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

  useEffect(() => {
    const userIsAdmin = async () => {
      const { data: profiles, error } = await supabase
        .from('profiles')
        .select('username, is_admin')

      const profileIsAdmin = profiles ? profiles[0].is_admin : false
      const userName = profiles ? profiles[0].username : false
      setUserIsAdmin(profileIsAdmin)
      setUserName(userName)
    }

    userIsAdmin()
  }, [supabase, router])

  const handleModalView = () => {
    setShowModal(!showModal)
  }

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

      {currentUserEmail && userName && userIsAdmin && (
        <div className="flex flex-col my-16 px-8">
          <hr className="w-full h-1 mx-auto my-4 bg-gray-400 border-0 rounded md:my-10 dark:bg-gray-700" />{' '}
          <h2>Hey, Welcome back {userName}!</h2>
          <h5>How would you like to proceed?</h5>
          <h6>
            (No worries, <u>only admins</u> can see the contents below the gray
            line)
          </h6>
          <div className="mt-16 flex flex-col items-center gap-4">
            <Link
              href="https://www.thecirculart.com"
              target="_blank"
              className="flex items-center justify-center w-72 px-4 bg-green-500 rounded-full cursor-pointer shadow shadow-lg shadow-gray-500"
            >
              <div className="flex items-center align-middle gap-4">
                <h4 className="text-foreground">Add a new client </h4>
              </div>
            </Link>
            <Link
              href="https://www.thecirculart.com"
              target="_blank"
              className="flex items-center justify-center w-72 px-4 bg-green-500 rounded-full cursor-pointer shadow shadow-lg shadow-gray-500"
            >
              <div className="flex items-center align-middle gap-4">
                <h4 className="text-foreground">Update client </h4>
              </div>
            </Link>

            <div className="flex items-center justify-center w-72 px-4 bg-green-500 rounded-full cursor-pointer shadow shadow-lg shadow-gray-500">
              <button onClick={() => handleModalView()}>
                <h4 className="text-foreground">Delete client </h4>
              </button>
            </div>
            {showModal && (
              <Modal onClose={handleModalView} title={'Eliminar cliente'}>
                <div className=" flex flex-col p-2 text-gray-700">
                  <h4>
                    Pulsa sobre un cliente para eliminarlo de la lista de
                    clientes.
                  </h4>
                  <div className="flex flex-col items-center gap-2 mt-16">
                    {clients.length > 0 &&
                      clients.map((item: any) => (
                        <div className="flex justify-center w-48 px-4 bg-green-500 rounded-full cursor-pointer shadow shadow-lg shadow-gray-500">
                          <h6 className="text-foreground" key={item.client_id}>
                            {item.client_name}
                          </h6>
                        </div>
                      ))}
                  </div>
                  <button className="absolute bottom-8 right-8">
                    Eliminar cliente
                  </button>
                </div>
              </Modal>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default realTimeClients
