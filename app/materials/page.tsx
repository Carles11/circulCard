'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import type { Database } from '../../types/supabase'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Image, { StaticImageData } from 'next/image'

import Loader from 'components/loader'

import POSicon from 'assets/images/icons/pos-icon.png'
import CARDSicon from 'assets/images/icons/cards-icon.png'
import FURNITUREicon from 'assets/images/icons/furniture-icon.png'

const iconMap: Record<string, StaticImageData> = {
  pos: POSicon,
  cards: CARDSicon,
  furniture: FURNITUREicon,
}

const Materials = () => {
  const [product, setProduct] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const supabase = createClientComponentClient<Database>()
  const searchParams = useSearchParams()

  const productName = searchParams.get('productName')

  useEffect(() => {
    console.log('productNameproductNameproductName', productName)
    const getMaterials = async () => {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('product_icon')
          .eq('product_name', productName)

        if (error) {
          throw new Error(error.message)
        }

        setProduct(data || {})
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

  console.log('productproductproductproduct', product)
  return (
    <div className="flex flex-col gap-4 items-center">
      <Image
        src={iconMap[productName]}
        alt="The circulart products"
        width={100}
        height={100}
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
      <h4 className="text-white">{productName?.toUpperCase()}</h4>
    </div>
  )
}

export default Materials
