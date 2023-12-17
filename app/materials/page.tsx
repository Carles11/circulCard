// @ts-nocheck
'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import type { Database } from 'types/supabase'
import { isMobile } from 'react-device-detect'

import { useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'

import Loader from 'components/loader'

import HeaderInternalPage from 'components/headers/headerInternalPage'
import CircleList from 'components/circleList'

// import MaterialsCard from 'components/materials/materialsCard'
// import MaterialsInfo from 'components/materials/materialsInfo'
import PieComponent from 'components/materials/pieComponent'
import MultiCarousel from '@/components/cards/multiCarousel'
import RecycleHands from 'assets/images/icons/SVG/recycle-hands.svg'
import RecycleWorld from 'assets/images/icons/SVG/recycle-green-world.svg'

const Materials = () => {
  const [materials, setMaterials] = useState<any[]>([])
  const [projects, setProjects] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter() // Initialize the useRouter hook

  const supabase = createClientComponentClient<Database>()
  const searchParams = useSearchParams()

  const productName = searchParams.get('productName')
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
    const getProjects = async () => {
      try {
        const { data, error } = await supabase
          .from('projects')
          .select('*, materials(material_name)')

        if (error) {
          throw new Error(error.message)
        }

        setProjects(data || {})
      } catch (error: any) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    getProjects()
  }, [supabase])

  useEffect(() => {
    const getMaterials = async () => {
      try {
        const { data, error } = await supabase
          .from('materials')
          .select(
            'id, material_name, percentage, color, collect_date, cumulative_total, products(product_name)'
          )
          // .eq('products.product_name', productName)
          .not('products', 'is', null)

        if (error) {
          throw new Error(error.message)
        }

        setMaterials(data || {})
      } catch (error: any) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    getMaterials()
  }, [supabase])

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <p className="text-red-500">{error}</p>
  }

  return (
    <div className="w-full flex flex-col items-center">
      <HeaderInternalPage
        iconDark={RecycleHands}
        iconLight={RecycleWorld}
        title="Residuos totales"
      />
      <div
        className={`w-full flex items-center justify-around ${
          isMobile && 'flex-col'
        }`}
      >
        <div className="flex flex-col p-4">
          <CircleList items={materials} materials />{' '}
        </div>
        <div className="w-96 h-96 md:w-[44rem] md:h-[44rem]">
          <PieComponent materials={materials} />
        </div>
      </div>
      {/* <MaterialsCard
        materials={materials}
        projects={projects}
        clientID={clientID}
        productName={productName}
      /> */}

      {/* <MultiCarousel materials={materials} projects={projects} /><MaterialsInfo materials={materials} projects={projects} /> */}
    </div>
  )
}

export default Materials
