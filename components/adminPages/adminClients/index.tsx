import IconButton from '@/components/icons/iconButton'
import React from 'react'
import AddClient from './addClient'
import DeleteClient from './deleteClient'
import UpdateClient from './updateClient'

const AdminClients = ({
  clients,
  modalType,
  handleCreateClient,
  handleDeleteClient,
  handleUpdateClient,
  handleModalView,
  ConfirmDialog,
}: {
  clients: any
  modalType: string
  handleCreateClient: Function
  handleDeleteClient: Function
  handleUpdateClient: Function
  handleModalView: Function
  ConfirmDialog: any
}) => {
  return (
    <div>
      {' '}
      {clients && modalType === 'Añadir clientes' && (
        <AddClient
          onCreateClient={handleCreateClient}
          onClose={handleModalView}
        />
      )}
      {clients && modalType === 'Actualizar clientes' && (
        <UpdateClient
          clients={clients}
          IconButton={IconButton}
          handleUpdateClient={handleUpdateClient}
        />
      )}
      {clients && modalType === 'Eliminar clientes' && (
        <DeleteClient
          clients={clients}
          IconButton={IconButton}
          ConfirmDialog={ConfirmDialog}
          handleDeleteClient={handleDeleteClient}
        />
      )}
    </div>
  )
}

export default AdminClients
