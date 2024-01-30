import React, { useState } from 'react'

const updateRelationalProductForm = ({
  product,
  open,
  onClose,
  onUpdate,
}: {
  product: any
  open: boolean
  onClose: Function
  onUpdate: Function
}) => {
  if (!open) {
    return <></>
  }

  const [productName, setProductName] = useState<string>(product.product_name)

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductName(e.target.value)
  }

  const handleUpdate = () => {
    // Call the onUpdate function with the updated values
    onUpdate(product.id, productName)
    // Close the form after updating
    onClose()
  }

  return (
    <>
      <div className="mb-4">
        {/* Label for the Name input */}
        <label
          htmlFor="productName"
          className="block text-sm font-medium text-gray-400"
        >
          Nombre del producto
        </label>
        <input
          id="productName"
          type="text"
          value={productName}
          className="rounded-ms w-full p-2 border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
          onChange={handleNameChange}
        />
      </div>

      <button
        className="mt-4 border border-gray-700 p-2 rounded-xl bg-btn-background mr-2"
        onClick={handleUpdate}
      >
        Guardar cambios
      </button>

      <button
        className="mt-4 border border-gray-700 p-2 rounded-xl"
        onClick={() => {
          onClose()
        }}
      >
        Salir
      </button>
    </>
  )
}

export default updateRelationalProductForm
