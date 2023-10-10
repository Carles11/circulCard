// @ts-nocheck
'use client'

import { useSearchParams } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react'
import type { Database } from 'types/supabase'
import { User as SupabaseUser } from '@supabase/supabase-js'

import Loader from 'components/loader'
import ClientGreeting from './clientGreeting'
import ProductsList from './productsList'
import CTAsButtons from './ctasButtons'

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

  // Create a Supabase client configured to use cookies
  const supabase = createClientComponentClient<Database>()

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
      <p className="text-white">
        <Loader />
      </p>
    )
  }

  if (error) {
    return <p className="text-red-500">{error}</p>
  }
  console.log('LIST-OF-PRODUCTS---->', products)
  return (
    <div className="flex flex-col gap-28">
      <ClientGreeting clientID={clientID} />
      <ProductsList user={user} products={products} />
      <CTAsButtons />
    </div>
  )
}
