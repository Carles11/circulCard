import Image from 'next/image'

const MaterialsProduct = ({
  icon,
  productName,
}: {
  icon: string
  productName: string
}) => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <Image
        src={icon}
        alt="The circulart products"
        width={100}
        height={100}
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
      <h4 className="text-white">{productName?.toUpperCase()}</h4>
    </div>
  )
}

export default MaterialsProduct
