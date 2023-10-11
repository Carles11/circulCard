import Image from 'next/image'
import { StaticImageData } from 'next/image'

import { FC } from 'react'

interface MaterialsProductProps {
  icon: string | StaticImageData
  productName: string | null
}

const MaterialsProduct: FC<MaterialsProductProps> = ({ icon, productName }) => {
  return (
    <div className="m-8 flex flex-col items-center">
      <Image
        src={icon}
        alt="The circular products"
        width={100}
        height={100}
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
      <h3 className="mt-4 text-white">
        {productName ? productName.toUpperCase() : ''}
      </h3>
    </div>
  )
}

export default MaterialsProduct
