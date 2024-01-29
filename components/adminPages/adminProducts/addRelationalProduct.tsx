import AddRelationalProductForm from './addRelationalProductForm'

const AddRelationalProduct = ({
  onCreateProduct,
  onClose,
  clientName,
  allTheProducts,
  relatedProducts,
}: {
  onCreateProduct: Function
  onClose: Function
  clientName: String
  allTheProducts: any
  relatedProducts: any
}) => {
  if (!onClose) {
    return <></>
  }
  return (
    <div>
      <AddRelationalProductForm
        onClose={() => onClose(false)}
        onCreateProduct={onCreateProduct}
        clientName={clientName}
        allTheProducts={allTheProducts}
        relatedProducts={relatedProducts}
      />
    </div>
  )
}

export default AddRelationalProduct
