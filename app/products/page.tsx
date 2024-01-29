// @ts-nocheck
'use client'

import { useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

import type { Database } from 'types/supabase'
import { User as SupabaseUser } from '@supabase/supabase-js'

import {
  CheckIfUserIsAdmin,
  // CheckIfSessionIsActive,
} from 'utils/supabase.service'
import Loader from 'components/loader'
import ClientGreeting from 'components/clientGreeting'
import ProductsList from 'components/products/productsList'
import AdminSection from 'components/adminPages'

// import CTAsButtons from 'components/products/ctasButtons'

interface User extends SupabaseUser {
  // Additional properties specific to your application
}

export default function Products() {
  const supabase = createClientComponentClient<Database>()
  const searchParams = useSearchParams()
  const clientID = searchParams.get('clientID')
  const clientName = searchParams.get('clientName')
  const router = useRouter() // Initialize the useRouter hook

  const [user, setUser] = useState<User | null>(null)
  const [products, setProducts] = useState<any[]>([])
  const [allTheProducts, setAllTheProducts] = useState<any[]>([])

  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<PostgrestError | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | undefined>('')

  const adminStatus = CheckIfUserIsAdmin()
  const userIsAdmin = adminStatus.userIsAdmin
  const userName = adminStatus.userName
  // Create a Supabase client configured to use cookies

  useEffect(() => {
    const fetchData = async () => {
      const supabase = createClientComponentClient<Database>()

      const {
        data: { user: fetchedUser },
      } = await supabase.auth.getUser()

      setUser(fetchedUser || null)
    }

    fetchData()
  }, [])

  useEffect(() => {
    // CheckIfSessionIsActive()
    const checkUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession()

      if (!session) {
        router.push('/unauthenticated') // Use router.push instead of redirect
      }
    }

    checkUser()
  }, [supabase, router])

  useEffect(() => {
    // console.log(clientID)
    const getRelatedProducts = async () => {
      try {
        const { data, error } = await supabase
          .from('products')
          .select(
            `id, product_name, clients(id, client_name), rel_clients_products(unidades_gestionadas_total, peso_total, historical_data)`
          )
          //  .filter('clients.id', 'eq', clientID)
          .eq('clients.id', clientID)
          .not('clients', 'is', null)
          .eq('rel_clients_products.client_id', clientID)

        setProducts(data || [])
      } catch (error: any) {
        setErrorMessage(error.message)
      } finally {
        setLoading(false)
      }
    }

    const getAllTheProducts = async () => {
      try {
        const { data: fullProductsList, error } = await supabase
          .from('products')
          .select(`*`)
        setAllTheProducts(fullProductsList || [])
      } catch (error: any) {
        setErrorMessage(error.message)
      } finally {
        setLoading(false)
      }
    }

    const channels = supabase
      .channel('custom-all-channel')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'rel_clients_products' },
        (payload) => {
          if (payload) {
            getRelatedProducts()
          }
        }
      )
      .subscribe()

    getRelatedProducts()
    getAllTheProducts()
  }, [supabase, setAllTheProducts, setProducts, setLoading, setErrorMessage])

  const handleModalView = () => {
    setShowModal(!showModal)
  }

  // ########## HANDLE  RELATIOINAL ACTIONS ###############
  const handleRelateNewProduct = (
    relatingProduct,
    relatingProduct_ID,
    clientName,
    newWeight,
    newUnits
  ) => {
    const createProductRelation = async (
      productName: string,
      relatingProductID: string,
      clientID: string,
      clientName: string,
      productWeight: number,
      productUnits: number
    ) => {
      const { data, error } = await supabase
        .from('rel_clients_products')
        .insert([
          {
            product_name: productName,
            product_id: relatingProductID,
            client_id: clientID,
            client_name: clientName,
            peso_total: productWeight,
            unidades_gestionadas_total: productUnits,
          },
        ])
        .select()
      console.log({ data })
    }
    createProductRelation(
      relatingProduct,
      relatingProduct_ID,
      clientID,
      clientName,
      newWeight,
      newUnits
    )
  }
  const handleUpdateRelatedProduct = () => {
    {
      console.log('UPDATING RELATIOOOOOOOOOOOOOOOOOOON')
    }
  }
  const handleDeleteRelatedProduct = () => {
    {
      console.log('DELETING RELATIOOOOOOOOOOOOOOOOOOON')
    }
  }

  if (loading) {
    return <Loader />
  }

  if (errorMessage) {
    return <p className="text-red-500">{errorMessage}</p>
  }

  console.log({ products })
  return (
    <div className="w-full flex flex-col md:justify-around gap-8 md:gap-16 mt-4 md:mt-16 md:px-16 items-center">
      <div className="w-full flex flex-col gap-8 ml-8">
        <ClientGreeting clientID={clientID} page="products" />
      </div>
      <ProductsList user={user} products={products} />
      <div>
        {userName && userIsAdmin && (
          <>
            <AdminSection
              userName={userName}
              clientName={clientName}
              handleModalView={handleModalView}
              handleRelateNewProduct={handleRelateNewProduct}
              handleUpdateRelatedProduct={handleUpdateRelatedProduct}
              handleDeleteRelatedProduct={handleDeleteRelatedProduct}
              screenMessage={errorMessage || successMessage}
              products={products}
              allTheProducts={allTheProducts}
              showModal={showModal}
              relateItems={true}
            />
          </>
        )}
      </div>
    </div>
  )
}
