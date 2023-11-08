import RecycleGreenArrowsCard from 'components/cards/recycleGreenArrowsCard'
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  PromiseLikeOfReactNode,
} from 'react'

const ProductsCard = ({ products }) => {
  const productNames = products
    .map((item: { product_name: string }) => item.product_name)
    .map((prodItem: string) => (
      <ul className="list-disc list-inside">
        <li className="text-sm">{prodItem}</li>
      </ul>
    ))

  return (
    <RecycleGreenArrowsCard>
      <div className="flex flex-col mr-6 md:mr-20 items-end mt-6 md:mt-20">
        <div className="flex flex-col mr-2 items-end align-center">
          <h1 className="z-1 text-gray-600">{products.length} Productos</h1>
          <h3 className="z-1 text-gray-600 -mt-5">reciclados</h3>
        </div>
        <h5 className="text-gray-500">{productNames}</h5>
      </div>
    </RecycleGreenArrowsCard>
  )
}

export default ProductsCard
