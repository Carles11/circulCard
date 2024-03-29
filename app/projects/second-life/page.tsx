// @ts-nocheck
'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import type { Database } from 'types/supabase'

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

import Loader from 'components/loader'
import PlantOnHandsDARK from 'assets/images/icons/SVG/plant-on-hands-dark-mode.svg'
import PlantOnHandsLIGHT from 'assets/images/icons/SVG/plant-on-hands-light-mode.svg'
import SecondLifesCard from 'components/projects/secondLifesCard'
import HeaderInternalPage from 'components/headers/headerInternalPage'

const SecondLife = () => {
  const [secondLifes, setSecondLifes] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter() // Initialize the useRouter hook

  const supabase = createClientComponentClient<Database>()

  const searchParams = useSearchParams()
  // const projectID = searchParams.get('projectID')
  // const projectName = searchParams.get('projectName')

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
        // .eq(`id, ${projectID}`)

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
    return <Loader />
  }

  if (error) {
    return <p className="text-red-500">{error}</p>
  }

  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex flex-col items-center mt-8">
        <HeaderInternalPage
          iconDark={PlantOnHandsDARK}
          iconLight={PlantOnHandsLIGHT}
          title="Proyectos"
          subTitle="de segunda vida"
        />
      </div>
      <SecondLifesCard secondLifes={secondLifes} />
    </div>
  )
}

export default SecondLife
