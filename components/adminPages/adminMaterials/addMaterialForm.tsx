import React, { useState } from 'react'

const AddMaterialForm = ({
  onCreateMaterial,
  onClose,
}: {
  onClose: Function
  onCreateMaterial: Function
}) => {
  const [materialName, setMaterialName] = useState<string>('')

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaterialName(e.target.value)
  }

  const handleSubmit = () => {
    onCreateMaterial(materialName)
    // Reset Inputs
    setMaterialName('')
  }

  return (
    <div>
      <div className="mb-4">
        {/* Label for the Name input */}
        <label
          htmlFor="materialName"
          className="block text-sm font-medium text-gray-400"
        >
          Nombre del Material
        </label>
        <input
          id="materialName"
          type="text"
          value={materialName}
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

export default AddMaterialForm
