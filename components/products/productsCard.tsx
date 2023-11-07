import RecycleGreenArrowsCard from 'components/cards/recycleGreenArrowsCard'

const ProductsCard = () => {
  return (
    <RecycleGreenArrowsCard>
      <div className="flex flex-col mr-6 md:mr-20 items-end mt-6 md:mt-20">
        <div className="flex flex-col mr-2 items-end align-center">
          <h1 className="z-1 text-gray-600">Productos</h1>
          <h3 className="z-1 text-gray-600 -mt-5">reciclados</h3>
        </div>
      </div>
    </RecycleGreenArrowsCard>
  )
}

export default ProductsCard
