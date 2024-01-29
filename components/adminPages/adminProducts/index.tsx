import IconButton from 'components/icons/iconButton'
import React from 'react'
import AddProduct from './addProduct'
import AddRelationalProduct from './addRelationalProduct'
import DeleteProduct from './deleteProduct'
import UpdateProduct from './updateProduct'

const AdminProducts = ({
  products,
  allTheProducts,
  modalType,
  clientName,
  handleCreateProduct,
  handleDeleteProduct,
  handleUpdateProduct,
  handleRelateNewProduct,
  handleUpdateRelatedProduct,
  handleDeleteRelatedProduct,
  handleModalView,
  ConfirmDialog,
  relateItems,
}: {
  products: any
  allTheProducts: any
  modalType: string
  clientName: string
  handleCreateProduct: Function
  handleDeleteProduct: Function
  handleUpdateProduct: Function
  handleRelateNewProduct: Function
  handleUpdateRelatedProduct: Function
  handleDeleteRelatedProduct: Function
  handleModalView: Function
  ConfirmDialog: any
  relateItems: boolean
}) => {
  return (
    <div>
      {!relateItems && products && modalType === 'Añadir productos' ? (
        <AddProduct
          onCreateProduct={handleCreateProduct}
          onClose={handleModalView}
        />
      ) : (
        <AddRelationalProduct
          onCreateProduct={handleRelateNewProduct}
          onClose={handleModalView}
          clientName={clientName}
          allTheProducts={allTheProducts}
        />
      )}
      {!relateItems && products && modalType === 'Actualizar productos' ? (
        <UpdateProduct
          products={products}
          IconButton={IconButton}
          handleUpdateProduct={handleUpdateProduct}
        />
      ) : null}
      {!relateItems && products && modalType === 'Eliminar productos' ? (
        <DeleteProduct
          products={products}
          IconButton={IconButton}
          ConfirmDialog={ConfirmDialog}
          handleDeleteProduct={handleDeleteProduct}
        />
      ) : null}
    </div>
  )
}

export default AdminProducts
