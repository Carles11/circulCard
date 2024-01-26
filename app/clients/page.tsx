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
  const [products, setProducts] = useState<any[]>([])
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

  // If Session in not active, kick user out.
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

  const handleModalView = () => {
    setShowModal(!showModal)
  }

  // FETCH ALL CLIENTS
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

      // LISTEN TO CHANGES IN DB REALTIME
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

  // FETCH ALL PRODUCTS

  useEffect(() => {
    const getProducts = async () => {
      try {
        let { data: products, error } = await supabase
          .from('products')
          .select('*')

        if (error) {
          throw new Error(error.message)
        }

        setProducts(products || [])
      } catch (error: any) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    // LISTEN TO CHANGES IN DB REALTIME
    const channelUPDATE = supabase
      .channel('products-db-changes')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'products' },
        (payload) => {
          if (payload) {
            getProducts()
          } else {
            console.log('NO PAYLOAD AVAILABLE')
          }
        }
      )
      .subscribe()

    getProducts()
  }, [])

  // ############### SUPABASE CLIENT HANDLERS ###############

  const handleCreateClient = async (newName: string, newEmail: string) => {
    try {
      const { data, error } = await supabase
        .from('clients')
        .insert([{ client_name: newName, client_email: newEmail }])
        .select()

      if (error) {
        console.error({ error })
        setErrorMessage(error)
      } else {
        setSuccessMessage(`Nuevo cliente ${newName} creado con éxito`)
      }
    } catch (error) {
      console.error('Error: ', error)
      setErrorMessage(error as PostgrestError | null)
    }

    // CLEAR ANY MESSAGES OF SUCCESS OR ERROR ON SCREEN AFTER 5 SECONDS
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

  // ############### SUPABASE PRODUCT HANDLERS ###############

  const handleCreateProduct = (productName: string) => {
    const addProduct = async (nameOfProduct: string) => {
      try {
        const { error } = await supabase
          .from('products')
          .insert([{ product_name: nameOfProduct }])
          .select()
        if (error) {
          console.log({ error })
          setErrorMessage(error)
        } else {
          setSuccessMessage('Producto generado con éxito.')
        }
      } catch (error) {
        console.error('Error: ', error)
        setErrorMessage(error as PostgrestError | null)
      }

      // CLEAR ANY MESSAGES OF SUCCESS OR ERROR ON SCREEN AFTER 5 SECONDS
      setTimeout(() => {
        setErrorMessage(null)
        setSuccessMessage('')
      }, 5000)
    }

    addProduct(productName)
  }

  const handleUpdateProduct = (updateId: string, updatedName: string) => {
    console.log({ updateId, updatedName })
    const updateProduct = async (prodId: string, prodName: string) => {
      try {
        const { error } = await supabase
          .from('products')
          .update({ product_name: prodName })
          .eq('id', prodId)
          .select()

        if (error) {
          console.log({ error })
          setErrorMessage(error)
        } else {
          setSuccessMessage('Producto actualizado con éxito.')
        }
      } catch (error) {
        console.error('Error: ', error)
        setErrorMessage(error as PostgrestError | null)
      }

      // CLEAR ANY MESSAGES OF SUCCESS OR ERROR ON SCREEN AFTER 5 SECONDS
      setTimeout(() => {
        setErrorMessage(null)
        setSuccessMessage('')
      }, 5000)
    }

    updateProduct(updateId, updatedName)
  }

  const handleDeleteProduct = (idToDelete: string) => {
    const removeProduct = async (productId: string) => {
      const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', productId)

      if (error) {
        console.log({ error })
        setErrorMessage(error)
      } else {
        setSuccessMessage('Producto eliminado con éxito.')
      }
    }

    removeProduct(idToDelete)
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
            handleCreateProduct={handleCreateProduct}
            handleUpdateProduct={handleUpdateProduct}
            handleDeleteProduct={handleDeleteProduct}
            screenMessage={errorMessage || successMessage}
            clients={clients}
            products={products}
            showModal={showModal}
          />
        </>
      )}
    </div>
  )
}
