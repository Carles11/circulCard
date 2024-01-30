import IconButton from 'components/icons/iconButton'
import React from 'react'
import AddProduct from './addProduct'
import AddRelationalProduct from './addRelationalProduct'
import UpdateRelationalProduct from './updateRelationalProduct'
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
  console.log({ relateItems, products, modalType })

  return (
    <div>
      {products &&
        modalType === 'Añadir productos' &&
        (!relateItems ? (
          <AddProduct
            onCreateProduct={handleCreateProduct}
            onClose={handleModalView}
          />
        ) : (
          <div>
            <AddRelationalProduct
              onCreateProduct={handleRelateNewProduct}
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
              handleUpdateProduct={handleRelateNewProduct}
              products={allTheProducts}
              IconButton={IconButton}

              // relatedProducts={products}
            />
          </div>
        ))}
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
