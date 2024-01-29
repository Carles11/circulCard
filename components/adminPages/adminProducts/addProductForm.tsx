import React, { useState } from 'react'

const AddProductForm = ({
  onCreateProduct,
  onClose,
}: {
  onClose: Function
  onCreateProduct: Function
}) => {
  const [productName, setProductName] = useState<string>('')

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductName(e.target.value)
  }

  const handleSubmit = () => {
    onCreateProduct(productName)
    // Reset Inputs
    setProductName('')
  }

  return (
    <div>
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

      <div className="mb-4"></div>

      <button
        className="mt-4 border border-gray-700 p-2 rounded-xl bg-btn-background mr-2"
        onClick={handleSubmit}
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
    </div>
  )
}

export default AddProductForm
