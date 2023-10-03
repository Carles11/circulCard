'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'

import POSicon from '../../assets/images/icons/pos-icon.png'
import CARDSicon from '../../assets/images/icons/cards-icon.png'
import FURNITUREicon from '../../assets/images/icons/furniture-icon.png'

const iconMap: Record<string, StaticImageData> = {
  Datáfonos: POSicon,
  Tarjetas: CARDSicon,
  Mobiliario: FURNITUREicon,
}

export default function Products() {
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Create a Supabase client configured to use cookies
  const supabase = createClientComponentClient()

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data, error } = await supabase
          .from('products')
          .select(`product_name,clients (id)`)
          .not('clients', 'is', null)
        console.log('DATAT-TA-KAT-----', data)
        setProducts(data || [])
      } catch (error: any) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    getProducts()
  }, [supabase, setProducts, setLoading, setError])

  if (loading) {
    return <p className="text-white">Loading...</p>
  }

  if (error) {
    return <p className="text-red-500">{error}</p>
  }

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <Link
        href="/clients"
        className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>{' '}
        Volver
      </Link>
      <div className="flex flex-row self-center">
        {products.length > 0 ? (
          products.map((prod) =>
            prod.clients !== null ? (
              <div className="flex flex-col gap-2 items-center">
                <Image
                  src={iconMap[prod.product_name]}
                  alt="The circulart products"
                  width={70}
                  height={70}
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                />
                <button
                  className="m-8 w-auto text-white bg-green-700 rounded-full text-sm px-4 py-2 text-white mb-2 hover:bg-btn-background-hover"
                  key={prod.id}
                >
                  {prod.product_name}
                </button>
              </div>
            ) : (
              <p>This client has not defined any products yet.</p>
            )
          )
        ) : (
          <p className="text-white">No Products available</p>
        )}
      </div>
    </div>
  )
}
