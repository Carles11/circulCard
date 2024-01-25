import React, { useState } from 'react'
import EditIcon from 'components/icons/editIcon'
import UpdateClientForm from './updateClientForm'

const UpdateClient = ({
  clients,
  IconButton,
  handleUpdateClient,
}: {
  clients: any
  IconButton: any
  handleUpdateClient: Function
}) => {
  const [confirmOpen, setConfirmOpen] = useState<number | null>(null)
  // const [openUpdateForm, setOpenUpdateForm] = useState<boolean>(false)

  return (
    <div className="flex flex-col p-4 text-foreground  ">
      <h4>
        Pulsa sobre el icono para actualizar los datos básicos de ese cliente.
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
                {confirmOpen !== index && (
                  <IconButton
                    aria-label="update"
                    onClick={() => setConfirmOpen(index)}
                  >
                    <EditIcon />
                  </IconButton>
                )}

                <UpdateClientForm
                  client={item}
                  open={confirmOpen === index}
                  onClose={() => setConfirmOpen(null)}
                  onUpdate={handleUpdateClient}
                ></UpdateClientForm>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default UpdateClient
