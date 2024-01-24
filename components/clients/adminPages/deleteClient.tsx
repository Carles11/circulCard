import React, { Key } from 'react'
import TrashIcon from 'components/icons/trashIcon'

const DeleteClient = ({
  clients,
  IconButton,
  ConfirmDialog,
  setConfirmOpen,
  confirmOpen,
  handleDeleteClient,
}: {
  clients: any
  IconButton: any
  ConfirmDialog: any
  setConfirmOpen: React.Dispatch<React.SetStateAction<boolean>> // Specify the type argument
  confirmOpen: boolean
  handleDeleteClient: Function
}) => {
  return (
    <div className="flex flex-col p-4 text-foreground  ">
      <h4>Pulsa sobre el icono para eliminarlo de la lista.</h4>
      <div className="flex flex-col items-center gap-2 mt-16">
        {clients?.length > 0 &&
          clients?.map((item: any, index: Key | null | undefined) => (
            <div
              key={index}
              className="w-full flex items-baseline justify-between border border-gray-600 rounded-sm p-2"
            >
              <h5 className="text-foreground" key={item.id}>
                {item.client_name}
              </h5>
              <div>
                <IconButton
                  aria-label="delete"
                  onClick={() => setConfirmOpen(true)}
                >
                  {/* <FontAwesomeCustomIcon icon={faTrashCan} /> */}
                  <TrashIcon />
                </IconButton>
                <ConfirmDialog
                  title={`Eliminar ${item.client_name.toUpperCase()}?`}
                  open={confirmOpen}
                  onClose={() => setConfirmOpen(false)}
                  onConfirm={() =>
                    handleDeleteClient(item.id, item.client_name)
                  }
                >
                  <h6 className="text-grey-400">Esto es irreversible.</h6>
                </ConfirmDialog>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default DeleteClient
