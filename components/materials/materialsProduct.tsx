import Image from 'next/image'
import { StaticImageData } from 'next/image'

import { FC } from 'react'

interface MaterialsProductProps {
  icon: string | StaticImageData
  productName: string | null
}

const MaterialsProduct: FC<MaterialsProductProps> = ({ icon, productName }) => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <Image
        src={icon}
        alt="The circular products"
        width={100}
        height={100}
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
      <h4 className="text-white">
        {productName ? productName.toUpperCase() : ''}
      </h4>
    </div>
  )
}

export default MaterialsProduct
