import IconButton from 'components/icons/iconButton'
import React from 'react'

import AddProduct from './addProduct'
import AddRelationalProduct from './addRelationalProduct'
import UpdateProduct from './updateProduct'
import UpdateRelationalProduct from './updateRelationalProduct'
import DeleteProduct from './deleteProduct'
import DeleteRelationalProduct from './deleteRelationalProduct'

const AdminProducts = ({
  products,
  allTheProducts,
  modalType,
  clientName,
  handleCreateProduct,
  handleDeleteProduct,
  handleUpdateProduct,
  handleCreateRelatedProduct,
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
  handleCreateRelatedProduct: Function
  handleUpdateRelatedProduct: Function
  handleDeleteRelatedProduct: Function
  handleModalView: Function
  ConfirmDialog: any
  relateItems: boolean
}) => {
  const addItemsOfAnyKind = ['Añadir productos', 'Vincular productos'].includes(
    modalType
  )
  const removeItemsOfAnyKind = [
    'Eliminar productos',
    'Desvincular productos',
  ].includes(modalType)
  return (
    <div>
      {products &&
        addItemsOfAnyKind &&
        (!relateItems ? (
          <AddProduct
            onCreateProduct={handleCreateProduct}
            onClose={handleModalView}
          />
        ) : (
          <div>
            <AddRelationalProduct
              onCreateProduct={handleCreateRelatedProduct}
              onClose={handleModalView}
              clientName={clientName}
              allTheProducts={allTheProducts}
              relatedProducts={products}
            />
          </div>
        ))}

      {products &&
        modalType === 'Actualizar productos' &&
        (!relateItems ? (
          <UpdateProduct
            products={products}
            IconButton={IconButton}
            handleUpdateProduct={handleUpdateProduct}
          />
        ) : (
          <div>
            <UpdateRelationalProduct
              handleUpdateRelationalProduct={handleUpdateRelatedProduct}
              products={products}
              IconButton={IconButton}

              // relatedProducts={products}
            />
          </div>
        ))}
      {products &&
        removeItemsOfAnyKind &&
        (!relateItems ? (
          <DeleteProduct
            products={products}
            IconButton={IconButton}
            ConfirmDialog={ConfirmDialog}
            handleDeleteProduct={handleDeleteProduct}
          />
        ) : (
          <DeleteRelationalProduct
            products={products}
            IconButton={IconButton}
            ConfirmDialog={ConfirmDialog}
            handleDeleteRelationalProduct={handleDeleteRelatedProduct}
          />
        ))}
    </div>
  )
}

export default AdminProducts
