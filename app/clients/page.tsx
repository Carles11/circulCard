'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation' // Import the useRouter hook
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { PostgrestError } from '@supabase/supabase-js'

import { CheckIfUserIsAdmin } from 'utils/supabase.service'
import AdminSection from 'components/adminPages'
import RealtimeClients from 'components/clients/realTimeClients'

import type { Database } from '../../types/supabase'
import Loader from 'components/loader'

export default function Clients() {
  const supabase = createClientComponentClient<Database>()

  const [clients, setClients] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter() // Initialize the useRouter hook
  const [currentUserEmail, setCurrentUserEmail] = useState<string | undefined>(
    ''
  )

  const [showModal, setShowModal] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<PostgrestError | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | undefined>('')

  const adminStatus = CheckIfUserIsAdmin()
  const userIsAdmin = adminStatus.userIsAdmin
  const userName = adminStatus.userName

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession()

      if (!session) {
        router.push('/unauthenticated')
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
            .select('id, client_name, client_email, profiles(user_id, email)')
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

      const channelA = supabase
        .channel('clients-db-changes')
        .on(
          'postgres_changes',
          {
            event: '*',
            schema: 'public',
            table: 'clients',
          },
          (payload) => {
            if (payload) {
              getClients()
            }
          }
        )
        .subscribe()

      getClients()
    }
  }, [supabase, router, currentUserEmail, setClients, setLoading, setError])

  const handleModalView = () => {
    setShowModal(!showModal)
  }

  const handleDeleteClient = (id: string) => {
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

  const handleUpdateClient = (id: string, name: string, email: string) => {
    const updateClient = async (clientId: string) => {
      const { data, error } = await supabase
        .from('clients')
        .update({ client_name: name, client_email: email })
        .eq('id', clientId)
        .select()
      if (error) {
        console.log({ error })
        setErrorMessage(error)
      } else {
        setSuccessMessage('Cliente actualizado con éxito.')
      }
    }
    updateClient(id)
    // CLEAR ANY MESSAGE OF SUCCESS OR ERROR ON SCREEN AFTER 5 secs
    setTimeout(() => {
      setErrorMessage(null)
      setSuccessMessage('')
    }, 5000)
  }

  const handleCreateClient = (newName: string, newEmail: string) => {
    const createClient = async (clientName: string, clientEmail: string) => {
      const { data, error } = await supabase
        .from('clients')
        .insert([{ client_name: clientName, client_email: clientEmail }])
        .select()

      if (error) {
        console.log({ error })
        setErrorMessage(error)
      } else {
        setSuccessMessage(`Nuevo client ${clientName} creado con éxito`)
      }
    }
    createClient(newName, newEmail)
    // CLEAR ANY MESSAGE OF SUCCESS OR ERROR ON SCREEN AFTER 5 secs
    setTimeout(() => {
      setErrorMessage(null)
      setSuccessMessage('')
    }, 5000)
  }

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <p className="text-red-500">{error}</p>
  }

  return (
    <div className="flex flex-col">
      <RealtimeClients clients={clients} />
      {currentUserEmail && userName && userIsAdmin && (
        <>
          <AdminSection
            userName={userName}
            handleModalView={handleModalView}
            handleCreateClient={handleCreateClient}
            handleUpdateClient={handleUpdateClient}
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
