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
    return <Loader />
  }

  if (error) {
    return <p className="text-red-500">{error}</p>
  }

  return (
    <div className="w-full flex flex-col md:px-16">
      <div className="w-full mb-8 md:mb-16 pl-8">
        <ClientGreeting
          clientID={clientID}
          productName={productName}
          page="trip"
        />
      </div>
      <div className="w-full flex flex-col lg:flex-row md:justify-around items-center md:align-start gap-16">
        <div className="w-full lg:w-1/2 flex flex-col gap-16">
          <TripCalender trip={trip} />
          <TripCumulative trip={trip} />
        </div>
        <div className="w-3/4 md:w-1/2 flex flex-col">
          <TripHistorical trip={trip} />
          <button className="rounded-full py-1 px-6 md:mt-4 w-fit self-end mb-10 border border-btn-background-hover dark:border-foreground hover:bg-btn-background-hover hover:text-foreground ">
            Detalles
          </button>
        </div>
      </div>
    </div>
  )
}
