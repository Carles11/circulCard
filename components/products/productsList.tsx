// @ts-nocheck

import Image from 'next/image'
import type { Database, ProductItemProps } from 'types/supabase'

import { iconMap } from 'utils/utils.service'
import ProductListInfoLabel from 'components/products/productListInfoLabel'

function ProductsList({
  products,
  clientID,
}: {
  products: Database
  clientID: string
}) {
  console.log({ products })
  return (
    <div className="flex flex-col md:flex-row self-center gap-28 mt-12">
      {products.length > 0 ? (
        products.map((prod: ProductItemProps, index: number) =>
          prod.clients !== null ? (
            <div
              key={index}
              className="flex flex-col gap-2 items-center justify-between"
            >
              <Image
                src={iconMap[prod.product_name]}
                alt="The circulart products"
                width={100}
                height={100}
              />
              <div className="dropdown">
                <input type="checkbox" id={`dropdown-${index}`} />
                <label className="dropdown__face" htmlFor={`dropdown-${index}`}>
                  <div className="dropdown__text">
                    <h5>{prod.product_name}</h5>
                  </div>

                  <div className="dropdown__arrow"></div>
                </label>
                <div className="dropdown__items">
                  <ProductListInfoLabel />
                </div>
              </div>
              <svg>
                <filter id="goo">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="10"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    type="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                    result="goo"
                  />
                  <feBlend in="SourceGraphic" in2="goo" />
                </filter>
              </svg>
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
