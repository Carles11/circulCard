import AddProductForm from './addProductForm'

const AddProduct = ({
  onCreateProduct,
  onClose,
}: {
  onCreateProduct: Function
  onClose: Function
}) => {
  if (!onClose) {
    return <></>
  }
  return (
    <div>
      <AddProductForm
        onClose={() => onClose(false)}
        onCreateProduct={onCreateProduct}
      />
    </div>
  )
}

export default AddProduct
