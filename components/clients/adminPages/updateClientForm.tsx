import React, { useState } from 'react'

const UpdateClientForm = ({
  client,
  open,
  onClose,
  onUpdate,
}: {
  client: any
  open: boolean
  onClose: Function
  onUpdate: Function
}) => {
  if (!open) {
    return <></>
  }

  // Use separate state variables for clientName and clientEmail
  const [clientName, setClientName] = useState<string>(client.client_name)
  const [clientEmail, setClientEmail] = useState<string>(client.client_email)

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClientName(e.target.value)
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClientEmail(e.target.value)
  }

  const handleUpdate = () => {
    // Call the onUpdate function with the updated values
    onUpdate(client.id, clientName, clientEmail)
    // Close the form after updating
    onClose()
  }

  return (
    <>
      <div className="w-full">
        <input
          type="text"
          value={clientName}
          className="rounded-ms w-full p-2"
          onChange={handleNameChange}
        />
      </div>
      <div className="w-full mt-2">
        <input
          type="text"
          value={clientEmail}
          className="rounded-ms w-full p-2"
          onChange={handleEmailChange}
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

export default UpdateClientForm
