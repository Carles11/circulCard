// @ts-nocheck
'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react'
import type { Database } from 'types/supabase'
import { User as SupabaseUser } from '@supabase/supabase-js'

import ClientGreeting from 'components/clientGreeting'
import TripCalender from 'components/trip/tripCalender'
import TripCumulative from 'components/trip/tripCumulative'
import TripHistorical from 'components/trip/tripHistorical'
import Loader from 'components/loader'

interface User extends SupabaseUser {
  // Additional properties specific to your application
}

export default function Trip() {
  const searchParams = useSearchParams()
  const materialID = searchParams.get('materialID')
  const clientID = searchParams.get('clientID')
  const productName = searchParams.get('productName')
  const [user, setUser] = useState<User | null>(null)

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
          .select(
            `material_name, collect_date, cumulative_total, clean_point_date, treatment_date, analysis_date, out_date)`
          )
          .eq('materials.id', materialID)

        setTrip(data || [])
      } catch (error: any) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    getTrip()
  }, [supabase, setTrip, setLoading, setError])

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
  return (
    <div className="w-full flex justify-between gap-16 mt-16 px-16">
      <div className="flex flex-col gap-8">
        <ClientGreeting
          clientID={clientID}
          productName={productName}
          page="trip"
        />
        <TripCalender user={user} trip={trip} />
        <TripCumulative />
      </div>
      <TripHistorical />
    </div>
  )
}
