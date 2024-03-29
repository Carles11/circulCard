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
  const [products, setProducts] = useState<any[]>([])
  const [prodWeightName, setProdWeightName] = useState<any[]>([])
  const [onlyProductNames, setOnlyProductNames] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter() // Initialize the useRouter hook

  const supabase = createClientComponentClient<Database>()
  const searchParams = useSearchParams()

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
    const getProducts = async () => {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('product_name, clients(id), rel_clients_products(peso_total)')
          .filter('clients.id', 'eq', clientID)
          .not('clients', 'is', null)

        if (error) {
          throw new Error(error.message)
        }
        setProducts(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }
    getProducts()
  }, [supabase])

  useEffect(() => {
    const getMaterials = async () => {
      if (products.length === 0) return

      const combinedData = products.map((product) => ({
        product: product.product_name,
        peso_total:
          product.rel_clients_products.length > 0
            ? product.rel_clients_products[0].peso_total
            : 0,
      }))

      const productNames = combinedData
        .map((prod) => prod.product)
        .filter(Boolean)

      setProdWeightName(combinedData)
      setOnlyProductNames(productNames)

      try {
        const { data, error } = await supabase
          .from('materials')
          .select(
            'id, material_name, percentage_mat-prod, percentage, color, collect_date, cumulative_total,  products(product_name), rel_products_materials!rel_products_materials_material_id_fkey(product_name, material_name, material_win_percentage)'
          )
          .in('rel_products_materials.product_name', productNames)
          .in('products.product_name', productNames)
          .not('rel_products_materials', 'is', null)

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
  }, [supabase, products])

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

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <p className="text-red-500">{error}</p>
  }

  // formatting to add ", " or " and " between products.
  let formattedProductNames

  if (onlyProductNames.length === 1) {
    formattedProductNames = onlyProductNames[0]
  } else if (onlyProductNames.length === 2) {
    formattedProductNames = onlyProductNames.join(' y ')
  } else {
    const lastTwoProducts = onlyProductNames.slice(-2).join(' y ')
    const restOfProducts = onlyProductNames.slice(0, -2).join(', ')
    formattedProductNames = `${restOfProducts}, ${lastTwoProducts}`
  }

  return (
    <div className="w-full flex flex-col items-center">
      <HeaderInternalPage
        iconDark={RecycleHands}
        iconLight={RecycleWorld}
        title="Residuos totales"
        subTitle={`extraídos de tus ${formattedProductNames}`}
      />
      <div
        className={`w-full flex items-center justify-around ${
          isMobile && 'flex-col'
        }`}
      >
        <div className="flex flex-col p-4">
          <CircleList
            items={materials}
            prodWeightName={prodWeightName}
            isMaterial
          />{' '}
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
