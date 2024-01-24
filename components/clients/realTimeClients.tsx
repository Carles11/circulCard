'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import { PostgrestError } from '@supabase/supabase-js'
import AdminSection from './adminPages'

import ClientItem from 'components/clients/clientItem'
import Link from 'next/link'

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
        setSuccessMessage('Cliente eliminado con éxito.')
      }
    }

    removeClient(id)
    // CLEAR ANY MESSAGE OF SUCCESS OR ERROR ON SCREEN AFTER 5 secs
    setTimeout(() => {
      setErrorMessage(null)
      setSuccessMessage('')
    }, 5000)
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
        <>
          <AdminSection
            userName={userName}
            handleModalView={handleModalView}
            handleDeleteClient={handleDeleteClient}
            screenMessage={errorMessage || successMessage}
            clients={clients}
            showModal={showModal}
          />
        </>
      )}
    </div>
  )
}

export default realTimeClients
