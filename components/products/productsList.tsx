// @ts-nocheck

import { useState } from 'react'
import Image from 'next/image'

import type { Database, ProductItemProps } from 'types/supabase'

import { iconMap } from 'utils/utils.service'
import ProductListInfoLabel from 'components/products/productListInfoLabel'
import GreenButtonWhiteTextWithHover from 'components/buttons/greenButtonWhiteTextWithHover'

function ProductsList({
  products,
  clientID,
}: {
  products: Database
  clientID: string
}) {
  const [showProductInfo, setShowProductInfo] = useState(false)
  console.log({ products })
  return (
    <div className="flex flex-col md:flex-row self-center gap-28 mt-12">
      {products.length > 0 ? (
        products.map((prod: ProductItemProps) =>
          prod.clients !== null ? (
            <div className="flex flex-col gap-2 items-center justify-between">
              <Image
                src={iconMap[prod.product_name]}
                alt="The circulart products"
                width={100}
                height={100}
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
              />
              <div
                onMouseEnter={() => {
                  setShowProductInfo(true)
                }}
                onMouseLeave={() => {
                  setShowProductInfo(false)
                }}
              >
                <GreenButtonWhiteTextWithHover
                  idAsKey={prod.id}
                  btnText={prod.product_name}
                />
              </div>
              {showProductInfo && <ProductListInfoLabel />}
            </div>
          ) : (
            <p>This client has not assigned any materials yet.</p>
          )
        )
      ) : (
        <p>No Products available</p>
      )}
    </div>
  )
}

export default ProductsList
