// @ts-nocheck

import Image from 'next/image'
import Link from 'next/link'

import type { Database, ProductItemProps } from 'types/supabase'

import { capitalizeFirstLetter, iconMap } from 'utils/utils.service'

function ProductsList({
  products,
  clientID,
}: {
  products: Database
  clientID: string
}) {
  return (
    <div className="flex flex-col md:flex-row self-center gap-28 mt-12">
      {products.length > 0 ? (
        products.map((prod: ProductItemProps) =>
          prod.clients !== null ? (
            <div className="flex flex-col gap-2 items-center">
              <Image
                src={iconMap[prod.product_name]}
                alt="The circulart products"
                width={100}
                height={100}
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
              />
              <Link
                key={prod.id}
                href={{
                  pathname: '/materials',
                  query: {
                    productName: prod.product_name,
                    clientID: clientID,
                  },
                }}
                className="no-underline flex items-center group text-sm"
              >
                <button
                  className="m-8 w-28 md:w-32 lg:w-48 bg-lightgreenBg rounded-full text-xl px-4 py-2 text-foreground mb-2 hover:bg-btn-background-hover shadow-xl  "
                  key={prod.id}
                >
                  {capitalizeFirstLetter(prod.product_name)}
                </button>
              </Link>
            </div>
          ) : (
            <p>This client has not defined any products yet.</p>
          )
        )
      ) : (
        <p>No Products available</p>
      )}
    </div>
  )
}

export default ProductsList
