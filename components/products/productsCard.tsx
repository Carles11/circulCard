import RecycleGreenArrowsCard from 'components/cards/recycleGreenArrowsCard'
import type { ProductProps } from 'types/supabase'
import RecycleBins from 'assets/images/icons/papelera-de-reciclaje.png'

const ProductsCard = ({ products }: { products: ProductProps }) => {
  // List of products with bullets
  // const productNames = products
  //   ?.map((item: { product_name: string }) => item.product_name)
  //   ?.map((prodItem: string) => (
  //     <ul className="list-disc list-inside">
  //       <li className="text-sm">{prodItem}</li>
  //     </ul>
  //   ))

  return (
    <RecycleGreenArrowsCard icon={RecycleBins}>
      <div className="flex flex-col  text-right mr-6 md:mr-20 items-end mt-6 md:mt-20">
        <div className="flex flex-col mr-2">
          <h1 className="z-1 text-gray-600 leading-8">
            {products?.length} Categorías de productos
          </h1>
          <h3 className="z-1 text-gray-600">reciclados</h3>
        </div>
        {/* <h5 className="text-gray-500">{productNames}</h5> */}
      </div>
    </RecycleGreenArrowsCard>
  )
}

export default ProductsCard
