// @ts-nocheck

import Image from 'next/image'
import type { Database, ProductItemProps } from 'types/supabase'

import waste_mngment_ONE from 'assets/documents/certificates/waste-management/ECOASIMELEC_GDA_15171.pdf'
import waste_mngment_TWO from 'assets/documents/certificates/waste-management/ECOASIMELEC_INFODIRECT_15293.pdf'
import waste_mngment_THREE from 'assets/documents/certificates/waste-management/ECOASIMELEC_INFODIRECT_BCN_2003.pdf'
import waste_mngment_FOUR from 'assets/documents/certificates/waste-management/ECOASIMELEC_TELIO_IBERIA_16103.pdf'

// import trace_ONE from 'assets/documents/certificates/traceability/traceability-plastic-cards.pdf'

import { iconMap } from 'utils/utils.service'
import ProductListInfoLabel from 'components/products/productListInfoLabel'

function ProductsList({ products }: { products: Database }) {
  return (
    <div className="flex flex-col md:flex-row self-center gap-28 mt-12 items-end">
      {products.length > 0 ? (
        products.map((prod: ProductItemProps, index: number) =>
          prod.clients !== null ? (
            <div
              key={index}
              className="flex flex-col gap-8 items-center justify-between"
            >
              <Image
                src={iconMap[prod.product_icon]}
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
                <div className="dropdown__items w-auto max-w-screen md:max-w-auto">
                  <ProductListInfoLabel
                    productName={prod.product_name}
                    units={prod.rel_clients_products}
                    certificates={[
                      waste_mngment_ONE,
                      waste_mngment_TWO,
                      waste_mngment_THREE,
                      waste_mngment_FOUR,
                    ]}
                  />
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
            <p>Este cliente no tiene todavía productos asignados.</p>
          )
        )
      ) : (
        <p>No se encontraron productos.</p>
      )}
    </div>
  )
}

export default ProductsList
