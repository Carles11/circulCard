import Image, { StaticImageData } from 'next/image'

import type { Database, ProductItemProps } from 'types/supabase'

import { capitalizeFirstLetter } from 'utils/utils.service'

import POSicon from 'assets/images/icons/pos-icon.png'
import CARDSicon from 'assets/images/icons/cards-icon.png'
import FURNITUREicon from 'assets/images/icons/furniture-icon.png'

const iconMap: Record<string, StaticImageData> = {
  pos: POSicon,
  cards: CARDSicon,
  furniture: FURNITUREicon,
}

function ProductsList({ products }: { products: Database }) {
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
              <button
                className="m-8 w-28 md:w-32 lg:w-48 text-white bg-green-700 rounded-full text-xl px-4 py-2 text-white mb-2 hover:bg-btn-background-hover"
                key={prod.id}
              >
                {capitalizeFirstLetter(prod.product_name)}
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
  )
}

export default ProductsList
