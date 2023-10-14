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
  const searchParams = useSearchParams()
  const clientID = searchParams.get('clientID')
  const [user, setUser] = useState<User | null>(null)

  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter() // Initialize the useRouter hook

  // Create a Supabase client configured to use cookies
  const supabase = createClientComponentClient<Database>()

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
    const getProducts = async () => {
      try {
        const { data, error } = await supabase
          .from('products')
          .select(`product_name, clients(id, client_name )`)
          .eq('clients.id', clientID)

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
    return (
      <div className="text-white">
        <Loader />
      </div>
    )
  }

  if (error) {
    return <p className="text-red-500">{error}</p>
  }
  return (
    <div className="w-full flex flex-col md:justify-around gap-8 md:gap-16 mt-4 md:mt-16 md:px-16 items-center">
      <div className="w-full flex flex-col gap-8 ml-0 md:ml-8">
        <ClientGreeting clientID={clientID} page="products" />
      </div>
      <ProductsList user={user} products={products} clientID={clientID} />
      <CTAsButtons />
    </div>
  )
}
