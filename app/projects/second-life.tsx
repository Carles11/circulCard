'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import type { Database } from 'types/supabase'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import Loader from 'components/loader'

import SecondLifesCard from 'components/projects/secondLifesCard'

const SecondLife = () => {
  const [secondLifes, setSecondLifes] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter() // Initialize the useRouter hook

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
    const getSecondLifes = async () => {
      try {
        const { data, error } = await supabase.from('second_life').select('*')

        if (error) {
          throw new Error(error.message)
        }

        setSecondLifes(data || {})
      } catch (error: any) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    getSecondLifes()
  }, [supabase])

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
    <div className="w-full flex flex-col">
      <SecondLifesCard secondLifes={secondLifes} />
    </div>
  )
}

export default SecondLife
