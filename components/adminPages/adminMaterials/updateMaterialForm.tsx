import React, { useState } from 'react'

const UpdateMaterialForm = ({
  material,
  open,
  onClose,
  onUpdate,
}: {
  material: any
  open: boolean
  onClose: Function
  onUpdate: Function
}) => {
  if (!open) {
    return <></>
  }

  const [materialName, setMaterialName] = useState<string>(
    material.material_name
  )

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaterialName(e.target.value)
  }

  const handleUpdate = () => {
    // Call the onUpdate function with the updated values
    onUpdate(material.id, materialName)
    // Close the form after updating
    onClose()
  }

  return (
    <>
      <div className="mb-4">
        {/* Label for the Name input */}
        <label
          htmlFor="materialName"
          className="block text-sm font-medium text-gray-400"
        >
          Nombre del material
        </label>
        <input
          id="materialName"
          type="text"
          value={materialName}
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

export default UpdateMaterialForm
