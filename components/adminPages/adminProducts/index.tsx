import IconButton from 'components/icons/iconButton'
import React from 'react'
import AddProduct from './addProduct'
import DeleteProduct from './deleteProduct'
import UpdateProduct from './updateProduct'

const AdminProducts = ({
  products,
  modalType,
  handleCreateProduct,
  handleDeleteProduct,
  handleUpdateProduct,
  handleModalView,
  ConfirmDialog,
}: {
  products: any
  modalType: string
  handleCreateProduct: Function
  handleDeleteProduct: Function
  handleUpdateProduct: Function
  handleModalView: Function
  ConfirmDialog: any
}) => {
  return (
    <div>
      {' '}
      {products && modalType === 'Añadir productos' && (
        <AddProduct
          onCreateProduct={handleCreateProduct}
          onClose={handleModalView}
        />
      )}
      {products && modalType === 'Actualizar productos' && (
        <UpdateProduct
          products={products}
          IconButton={IconButton}
          handleUpdateProduct={handleUpdateProduct}
        />
      )}
      {products && modalType === 'Eliminar productos' && (
        <DeleteProduct
          products={products}
          IconButton={IconButton}
          ConfirmDialog={ConfirmDialog}
          handleDeleteProduct={handleDeleteProduct}
        />
      )}
    </div>
  )
}

export default AdminProducts
