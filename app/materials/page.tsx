'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import type { Database } from 'types/supabase'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { StaticImageData } from 'next/image'

import Loader from 'components/loader'

import POSicon from 'assets/images/icons/pos-icon.png'
import CARDSicon from 'assets/images/icons/cards-icon.png'
import FURNITUREicon from 'assets/images/icons/furniture-icon.png'

import MaterialsProduct from 'components/materials/materialsProduct'
import MaterialsCard from 'components/materials/materialsCard'

const iconMap: Record<string, StaticImageData> = {
  pos: POSicon,
  cards: CARDSicon,
  furniture: FURNITUREicon,
}

const Materials = () => {
  const [materials, setMaterials] = useState<any[]>([])
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const supabase = createClientComponentClient<Database>()
  const searchParams = useSearchParams()

  const productName = searchParams.get('productName')

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('id')
          .eq('product_name', productName)

        if (error) {
          throw new Error(error.message)
        }

        setProducts(data || {})
      } catch (error: any) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    getProducts()
  }, [supabase])

  useEffect(() => {
    const getMaterials = async () => {
      try {
        const { data, error } = await supabase
          .from('materials')
          .select(
            'material_name, percentage, collect_date, products("product_name")'
          )
        //   .eq('products.product_name', productName)

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
    return (
      <p className="text-white">
        <Loader />
      </p>
    )
  }

  if (error) {
    return <p className="text-red-500">{error}</p>
  }

  console.log('productsproducts', products)
  console.log('materialsmaterials', materials)
  console.log('productNameproductName', productName)

  return (
    <div>
      <MaterialsProduct icon={iconMap[productName]} productName={productName} />
      <MaterialsCard materials={materials} />
    </div>
  )
}

export default Materials
