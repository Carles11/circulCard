import React, { useState } from 'react'

const AddProductForm = ({
  onCreateProduct,
  onClose,
}: {
  onClose: Function
  onCreateProduct: Function
}) => {
  const [productName, setProductName] = useState<string>('')
  const [clientEmail, setClientEmail] = useState<string>('')

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductName(e.target.value)
  }

  //   const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setClientEmail(e.target.value)
  //   }

  const handleUpdate = () => {
    // Call the onUpdate function with the updated values
    onCreateProduct(productName)
    // Close the form after updating
    onClose()
  }

  return (
    <div>
      <div className="mb-4">
        {/* Label for the Name input */}
        <label
          htmlFor="clientName"
          className="block text-sm font-medium text-gray-400"
        >
          Nombre del cliente
        </label>
        <input
          id="productName"
          type="text"
          value={productName}
          className="rounded-ms w-full p-2 border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
          onChange={handleNameChange}
        />
      </div>

      <div className="mb-4">
        {/* Label for the Email input */}
        {/* <label
          htmlFor="clientEmail"
          className="block text-sm font-medium text-gray-400"
        >
          Correo electrónico del cliente
        </label>
        <input
          id="clientEmail"
          type="text"
          value={clientEmail}
          className="rounded-ms w-full p-2 border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
          onChange={handleEmailChange}
        />*/}
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
    </div>
  )
}

export default AddProductForm
