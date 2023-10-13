// @ts-nocheck
'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react'
import type { Database } from 'types/supabase'

import ClientGreeting from 'components/clientGreeting'
import TripCalender from 'components/trip/tripCalender'
import TripCumulative from 'components/trip/tripCumulative'
import TripHistorical from 'components/trip/tripHistorical'
import Loader from 'components/loader'

export default function Trip() {
  const searchParams = useSearchParams()
  const materialID = searchParams.get('materialID')
  const clientID = searchParams.get('clientID')
  const productName = searchParams.get('productName')

  const [trip, setTrip] = useState<any[]>([])
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
    const getTrip = async () => {
      try {
        const { data, error } = await supabase
          .from('materials')
          .select('*')
          .eq('id', materialID)

        setTrip(data || [])
      } catch (error: any) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    getTrip()
  }, [supabase, setTrip, setLoading, setError])

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

  return (
    <div className="w-full flex flex-col lg:flex-row md:justify-around gap-8 md:gap-16 mt-4 md:mt-16 md:px-16 items-center">
      <div className="w-1/2 flex flex-col gap-8 ml-0 md:ml-8">
        <ClientGreeting
          clientID={clientID}
          productName={productName}
          page="trip"
        />
        <TripCalender trip={trip} />
        <TripCumulative trip={trip} />
      </div>
      <div className="w-1/2 ">
        <TripHistorical trip={trip} />
      </div>
    </div>
  )
}
