// @ts-nocheck
'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react'
import type { Database } from 'types/supabase'
import { User as SupabaseUser } from '@supabase/supabase-js'

import Loader from 'components/loader'
import ClientGreeting from 'components/clientGreeting'
import ProductsList from 'components/products/productsList'
import CTAsButtons from 'components/products/ctasButtons'

interface User extends SupabaseUser {
  // Additional properties specific to your application
}

export default function Products() {
  const [user, setUser] = useState<User | null>(null)
  const searchParams = useSearchParams()

  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter() // Initialize the useRouter hook

  // Create a Supabase client configured to use cookies
  const supabase = createClientComponentClient<Database>()
  const clientID = searchParams.get('clientID')

  useEffect(() => {
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
    console.log(clientID)
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
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    getProducts()
  }, [supabase, setProducts, setLoading, setError])

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

  if (error) {
    return <p className="text-red-500">{error}</p>
  }
  console.log({ products })
  return (
    <div className="w-full flex flex-col md:justify-around gap-8 md:gap-16 mt-4 md:mt-16 md:px-16 items-center">
      <div className="w-full flex flex-col gap-8 ml-8">
        <ClientGreeting clientID={clientID} page="products" />
      </div>
      <ProductsList user={user} products={products} clientID={clientID} />
      <CTAsButtons />
    </div>
  )
}
