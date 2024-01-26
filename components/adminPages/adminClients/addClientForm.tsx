import React, { useState } from 'react'

const AddClientForm = ({
  onCreateClient,
  onClose,
}: {
  onClose: Function
  onCreateClient: Function
}) => {
  const [clientName, setClientName] = useState<string>('')
  const [clientEmail, setClientEmail] = useState<string>('')

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClientName(e.target.value)
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClientEmail(e.target.value)
  }

  const handleSubmit = () => {
    onCreateClient(clientName, clientEmail)
    // Reset Inputs
    setClientName('')
    setClientEmail('')
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
          id="clientName"
          type="text"
          value={clientName}
          className="rounded-ms w-full p-2 border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
          onChange={handleNameChange}
        />
      </div>

      <div className="mb-4">
        {/* Label for the Email input */}
        <label
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
        />
      </div>

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

export default AddClientForm
