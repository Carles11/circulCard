'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { createClient } from '@supabase/supabase-js'

import { useRouter } from 'next/navigation'
import { Key, useEffect, useState } from 'react'

import { PostgrestError } from '@supabase/supabase-js'
import Modal from 'components/modals'
import Link from 'next/link'
import ClientItem from 'components/clients/clientItem'
import ConfirmDialog from '../confirmDialog/confirmDialog'
import IconButton from '../icons/iconButton'
import TrashIcon from '../icons/trashIcon'

// import FontAwesomeCustomIcon from 'components/icons/fontAwesomeIcon'
// import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

function realTimeClients({ clients }: { clients: any }) {
  const supabase = createClientComponentClient()

  const router = useRouter()

  const [currentUserEmail, setCurrentUserEmail] = useState<string | undefined>(
    ''
  )
  const [userIsAdmin, setUserIsAdmin] = useState<boolean | undefined>(false)
  const [userName, setUserName] = useState<string | undefined>('')
  const [showModal, setShowModal] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<PostgrestError | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | undefined>('')
  const [confirmOpen, setConfirmOpen] = useState<boolean>(false)

  // useEffect(() => {
  //   const channelA = supabase
  //     .channel('clients-db-changes')
  //     .on(
  //       'postgres_changes',
  //       {
  //         event: '*',
  //         schema: 'public',
  //         table: 'clients',
  //       },
  //       (payload) => {
  //         const eventType = payload.eventType
  //         const newRecord = payload.new
  //         const oldRecord = payload.old
  //         console.log('EVENT-TYPE', eventType)
  //         console.log('NEW-RECORD', newRecord)
  //         console.log('OLD-RECORD', oldRecord)
  //         console.log('FUCKIN-PAYLOAD', payload)
  //       }
  //     )
  //     .subscribe()
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

  const handleDeleteClient = (id: string, name: string) => {
    const removeClient = async (clientId: string) => {
      const { error } = await supabase
        .from('clients')
        .delete()
        .eq('id', clientId)

      if (error) {
        console.log({ error })
        setErrorMessage(error)
      } else {
        setSuccessMessage('Cliente eliminado con éxito')
      }
    }
    // var shouldDelete = confirm(
    //   `Estás seguro de quere eliminar el cliente ${name.toUpperCase()}? Esto es irreversible.`
    // )
    if (confirmOpen) {
      removeClient(id)
    } else {
      return
    }
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
          <h2>{userName}, esta es tu sección de administrador.</h2>
          <h6>
            (No te preocupes, <u>solo administradores</u> pueden ver los
            contenidos más allá de la línea gris.)
          </h6>
          <div className="mt-16 flex flex-col items-center gap-4">
            <Link
              href="https://www.thecirculart.com"
              target="_blank"
              className="flex items-center justify-center w-72 px-4 bg-green-500 rounded-full cursor-pointer shadow shadow-lg shadow-gray-500"
            >
              <div className="flex items-center align-middle gap-4">
                <h4 className="text-foreground">Añade un cliente</h4>
              </div>
            </Link>
            <Link
              href="https://www.thecirculart.com"
              target="_blank"
              className="flex items-center justify-center w-72 px-4 bg-green-500 rounded-full cursor-pointer shadow shadow-lg shadow-gray-500"
            >
              <div className="flex items-center align-middle gap-4">
                <h4 className="text-foreground">Actualiza un cliente</h4>
              </div>
            </Link>

            <div className="flex items-center justify-center w-72 px-4 bg-green-500 rounded-full cursor-pointer shadow shadow-lg shadow-gray-500">
              <button onClick={() => handleModalView()}>
                <h4 className="text-foreground">Elimina un cliente </h4>
              </button>
            </div>
            {showModal && (
              <Modal
                onClose={handleModalView}
                title={'Eliminar cliente'}
                screenMessage={errorMessage || successMessage}
              >
                <div className="flex flex-col p-4 text-foreground  ">
                  <h4>Pulsa sobre un cliente para eliminarlo de la lista.</h4>
                  <div className="flex flex-col items-center gap-2 mt-16">
                    {clients.length > 0 &&
                      clients.map(
                        (item: any, index: Key | null | undefined) => (
                          <div
                            key={index}
                            className="w-full flex items-baseline justify-between border border-gray-600 rounded-sm p-2"
                          >
                            <h5 className="text-foreground" key={item.id}>
                              {item.client_name}
                            </h5>
                            <div>
                              <IconButton
                                aria-label="delete"
                                onClick={() => setConfirmOpen(true)}
                              >
                                {/* <FontAwesomeCustomIcon icon={faTrashCan} /> */}
                                <TrashIcon />
                              </IconButton>
                              <ConfirmDialog
                                title={`Eliminar ${item.client_name.toUpperCase()}?`}
                                open={confirmOpen}
                                onClose={() => setConfirmOpen(false)}
                                onConfirm={() =>
                                  handleDeleteClient(item.id, item.client_name)
                                }
                              >
                                <h6 className="text-grey-400">
                                  Esto es irreversible.
                                </h6>
                              </ConfirmDialog>
                            </div>
                          </div>
                        )
                      )}
                  </div>
                  {/* <button className="absolute bottom-8 right-8">
                    Eliminar cliente
                  </button> */}
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
