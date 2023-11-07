// @ts-nocheck
'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react'
import type { Database } from 'types/supabase'
import Link from 'next/link'

import ClientGreeting from 'components/clientGreeting'
import TripCumulative from 'components/trip/tripCumulative'
import ProductsCard from 'components/products/productsCard'
import ProductsHistoryChartComponent from 'components/products/productsHistoryChart'
import Loader from 'components/loader'

export default function Dashboard() {
  const searchParams = useSearchParams()
  const [totalAmountCollected, setTotalAmountCollected] = useState<any[]>([])
  const clientID = searchParams.get('clientID')

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
    const getTotalAmountCollectedProducts = async () => {
      try {
        const { data, error } = await supabase
          .from('rel_clients_products')
          .select('*, clients(id, client_name)')
          .filter('clients.id', 'eq', clientID)
          .not('clients', 'is', null)

        if (error) {
          throw new Error(error.message)
        }

        setTotalAmountCollected(data || {})
      } catch (error: any) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    getTotalAmountCollectedProducts()
  }, [supabase])

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <p className="text-red-500">{error}</p>
  }

  return (
    <div className="w-full flex flex-col md:px-16">
      <div className="w-full mb-8 md:mb-16 pl-8">
        <ClientGreeting clientID={clientID} page="dashboard" />
      </div>
      <div className="w-full flex flex-col lg:flex-row md:justify-around items-center md:align-start gap-16">
        <div className="w-full lg:w-1/2 flex flex-col gap-16">
          <TripCumulative trip={totalAmountCollected} />
          <Link
            href={{
              pathname: 'products',
              query: {
                clientID: clientID,
              },
            }}
          >
            <ProductsCard />
          </Link>
        </div>
        <div className="w-full lg:w-1/2">
          <ProductsHistoryChartComponent
            yearsCollection={totalAmountCollected}
          />
        </div>
      </div>
    </div>
  )
}
