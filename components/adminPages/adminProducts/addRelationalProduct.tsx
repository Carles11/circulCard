import AddRelationalProductForm from './addRelationalProductForm'

const AddRelationalProduct = ({
  onCreateProduct,
  onClose,
  clientName,
  allTheProducts,
}: {
  onCreateProduct: Function
  onClose: Function
  clientName: String
  allTheProducts: any
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
      />
    </div>
  )
}

export default AddRelationalProduct
