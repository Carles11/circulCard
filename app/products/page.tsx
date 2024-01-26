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
  const router = useRouter() // Initialize the useRouter hook

  const [user, setUser] = useState<User | null>(null)
  const [products, setProducts] = useState<any[]>([])

  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<PostgrestError | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | undefined>('')

  const adminStatus = CheckIfUserIsAdmin()
  const userIsAdmin = adminStatus.userIsAdmin
  const userName = adminStatus.userName
  // Create a Supabase client configured to use cookies

  const handleModalView = () => {
    setShowModal(!showModal)
  }

  const handleCreateProduct = (newProduct) => {
    const createProduct = async (
      productName: string
      // productWeight: number
    ) => {
      const { data, error } = await supabase
        .from('products')
        .insert([{ product_name: productName }])
        .select()
    }
    createProduct(newProduct)
  }
  const handleUpdateProduct = () => {
    {
    }
  }
  const handleDeleteProduct = () => {
    {
    }
  }

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
    const getProducts = async () => {
      try {
        const { data, error } = await supabase
          .from('products')
          .select(`id, product_name, clients(id, client_name)`)
          //  .filter('clients.id', 'eq', clientID)
          .eq('clients.id', clientID)
          .not('clients', 'is', null)

        setProducts(data || [])
      } catch (error: any) {
        setErrorMessage(error.message)
      } finally {
        setLoading(false)
      }
    }

    getProducts()
  }, [supabase, setProducts, setLoading, setErrorMessage])

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

  if (loading) {
    return <Loader />
  }

  if (errorMessage) {
    return <p className="text-red-500">{errorMessage}</p>
  }

  return (
    <div className="w-full flex flex-col md:justify-around gap-8 md:gap-16 mt-4 md:mt-16 md:px-16 items-center">
      <div className="w-full flex flex-col gap-8 ml-8">
        <ClientGreeting clientID={clientID} page="products" />
      </div>
      <ProductsList user={user} products={products} clientID={clientID} />
      <div>
        {userName && userIsAdmin && (
          <>
            <AdminSection
              userName={userName}
              handleModalView={handleModalView}
              handleCreateProduct={handleCreateProduct}
              handleUpdateProduct={handleUpdateProduct}
              handleDeleteProduct={handleDeleteProduct}
              screenMessage={errorMessage || successMessage}
              products={products}
              showModal={showModal}
            />
          </>
        )}
      </div>
    </div>
  )
}
