import React, { useState } from 'react'

import EditIcon from 'components/icons/editIcon'

import UpdateProductForm from './updateProductForm'

const UpdateProduct = ({
  products,
  IconButton,
  handleUpdateProduct,
}: {
  products: any
  IconButton: any
  handleUpdateProduct: Function
}) => {
  const [confirmOpen, setConfirmOpen] = useState<number | null>(null)

  return (
    <div className="flex flex-col p-4 text-foreground  ">
      <h4>
        Pulsa sobre el icono para actualizar los datos básicos de ese cliente.
      </h4>
      <div className="flex flex-col items-center gap-2 mt-16">
        {products?.length > 0 &&
          products?.map((item: any, index: number) => (
            <div
              key={item.id}
              className="w-full flex items-baseline justify-between border border-gray-600 rounded-sm p-2"
            >
              <h5 className="text-foreground">{item.product_name}</h5>
              <div>
                {confirmOpen !== index && (
                  <IconButton
                    aria-label="update"
                    onClick={() => setConfirmOpen(index)}
                  >
                    <EditIcon />
                  </IconButton>
                )}

                <UpdateProductForm
                  product={item}
                  open={confirmOpen === index}
                  onClose={() => setConfirmOpen(null)}
                  onUpdate={handleUpdateProduct}
                ></UpdateProductForm>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default UpdateProduct
