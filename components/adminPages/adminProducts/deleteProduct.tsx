import React, { useState } from 'react'
import TrashIcon from 'components/icons/trashIcon'

const DeleteProduct = ({
  products,
  IconButton,
  ConfirmDialog,
  handleDeleteProduct,
}: {
  products: any
  IconButton: any
  ConfirmDialog: any
  handleDeleteProduct: Function
}) => {
  const [confirmOpen, setConfirmOpen] = useState<number | null>(null)

  return (
    <div className="flex flex-col p-4 text-foreground  ">
      <h4>Pulsa sobre el icono para eliminarlo de la lista.</h4>
      <div className="flex flex-col items-center gap-2 mt-16">
        {products?.length > 0 &&
          products?.map((item: any, index: number) => (
            <div
              key={index}
              className="w-full flex items-baseline justify-between border border-gray-600 rounded-sm p-2"
            >
              <h5 className="text-foreground" key={item.id}>
                {item.product_name}
              </h5>
              <div>
                <IconButton
                  aria-label="delete"
                  onClick={() => setConfirmOpen(index)}
                >
                  <TrashIcon />
                </IconButton>
                <ConfirmDialog
                  title={`Eliminar ${item.product_name.toUpperCase()}?`}
                  open={confirmOpen === index}
                  onClose={() => setConfirmOpen(null)}
                  onConfirm={() => handleDeleteProduct(item.id)}
                >
                  <h6 className="text-grey-400">Esto es irreversible.</h6>
                </ConfirmDialog>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default DeleteProduct
