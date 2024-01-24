import React, { useState } from 'react'
import EditIcon from 'components/icons/editIcon'

const UpdateClient = ({
  clients,
  IconButton,
  ConfirmDialog,
  handleDeleteClient,
}: {
  clients: any
  IconButton: any
  ConfirmDialog: any
  handleDeleteClient: Function
}) => {
  // 1. Introduce local state to manage the confirmation dialog individually for each client.
  const [confirmOpen, setConfirmOpen] = useState<number | null>(null)

  return (
    <div className="flex flex-col p-4 text-foreground  ">
      <h4>
        Pulsa sobre el icono para actualizar los datos relacionados con ese
        cliente.
      </h4>
      <div className="flex flex-col items-center gap-2 mt-16">
        {clients?.length > 0 &&
          clients?.map((item: any, index: number) => (
            <div
              key={item.id}
              className="w-full flex items-baseline justify-between border border-gray-600 rounded-sm p-2"
            >
              <h5 className="text-foreground">{item.client_name}</h5>
              <div>
                {/* 2. Adjust the `onClick` handler for the update button to set the corresponding index. */}
                <IconButton
                  aria-label="update"
                  onClick={() => setConfirmOpen(index)}
                >
                  <EditIcon />
                </IconButton>
                <ConfirmDialog
                  // 3. Modify the `ConfirmDialog`'s `open` prop to check against the client's index.
                  title={`Quieres actualizar ${item.client_name.toUpperCase()}?`}
                  open={confirmOpen === index}
                  // 4. Adjust the `onClose` handler to reset the state variable to `null` instead of `false`.
                  onClose={() => setConfirmOpen(null)}
                  onConfirm={() =>
                    handleDeleteClient(item.id, item.client_name)
                  }
                ></ConfirmDialog>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default UpdateClient
