// @ts-nocheck

import Image from 'next/image'
import Link from 'next/link'

import type { Database, ProductItemProps } from 'types/supabase'

import { iconMap } from 'utils/utils.service'

import GreenButtonWhiteTextWithHover from 'components/buttons/greenButtonWhiteTextWithHover'

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
              >
                <GreenButtonWhiteTextWithHover
                  idAsKey={prod.id}
                  btnText={prod.product_name}
                />
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
