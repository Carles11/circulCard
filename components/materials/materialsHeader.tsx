import Image from 'next/image'

import RecycleHands from 'assets/images/icons/SVG/recycle-hands.svg'
import RecycleWorld from 'assets/images/icons/SVG/recycle-green-world.svg'

// interface MaterialsProductProps {
//   icon: string | StaticImageData
//   productName: string | null
// }

const MaterialsProduct = () => {
  return (
    <div className="m-8 flex flex-col items-center">
      <Image
        src={RecycleHands}
        alt="The circulart recycling hands logo"
        width={75}
        height={75}
        className="hidden dark:block"
      />
      <Image
        className="block dark:hidden"
        src={RecycleWorld}
        alt="The circulart recycling world logo"
        width={75}
      />
      <h3 className="mt-4">Residuos totales</h3>
    </div>
  )
}

export default MaterialsProduct
