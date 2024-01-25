import { useState } from 'react'
import { useContext } from 'react'
import { AdminUserContext } from 'context/context'

import { PostgrestError } from '@supabase/supabase-js'

import Modal from 'components/modals'
import AddClient from './adminClients/addClient'
import UpdateClient from './adminClients/updateClient'
import DeleteClient from './adminClients/deleteClient'

import ConfirmDialog from 'components/confirmDialog/confirmDialog'
import IconButton from 'components/icons/iconButton'

const AdminSection = ({
  userName,
  handleModalView,
  handleCreateClient,
  handleUpdateClient,
  handleDeleteClient,
  showModal,
  screenMessage,
  clients,
}: {
  userName: string
  handleModalView: Function
  handleCreateClient: Function
  handleUpdateClient: Function
  handleDeleteClient: Function
  showModal: boolean
  screenMessage: PostgrestError | null | string | undefined
  clients: any
}) => {
  const { showAdminSection } = useContext(AdminUserContext)
  const [modalType, setModalType] = useState<string>('')

  return (
    <>
      {showAdminSection && (
        <div className="flex flex-col my-16 px-8">
          <hr className="w-full h-1 mx-auto my-4 bg-gray-400 border-0 rounded md:my-10 dark:bg-gray-700" />
          <h2>{userName}, esta es tu sección como administrador.</h2>
          <h6>
            (No te preocupes, <u>solo administradores</u> pueden ver los
            contenidos más allá de la línea gris.)
          </h6>
          <div className="mt-16 flex flex-col items-center gap-4">
            <div className="flex items-center justify-center w-72 px-4 bg-green-500 rounded-sm cursor-pointer shadow shadow-md shadow-gray-500">
              <button
                onClick={() => {
                  handleModalView()
                  setModalType('Añadir cliente')
                }}
              >
                <h4 className="text-foreground">Añade clientes </h4>
              </button>
            </div>
            <div className="flex items-center justify-center w-72 px-4 bg-green-500 rounded-sm cursor-pointer shadow shadow-md shadow-gray-500">
              <button
                onClick={() => {
                  handleModalView()
                  setModalType('Actualizar cliente')
                }}
              >
                <h4 className="text-foreground">Actualiza clientes </h4>
              </button>
            </div>
            <div className="flex items-center justify-center w-72 px-4 bg-green-500 rounded-sm cursor-pointer shadow shadow-md shadow-gray-500 mb-16">
              <button
                onClick={() => {
                  handleModalView()
                  setModalType('Eliminar cliente')
                }}
              >
                <h4 className="text-foreground">Elimina clientes </h4>
              </button>
            </div>
            {showModal && (
              <Modal
                onClose={handleModalView}
                title={modalType}
                screenMessage={screenMessage}
              >
                {modalType === 'Añadir cliente' && (
                  <AddClient
                    onCreateClient={handleCreateClient}
                    onClose={handleModalView}
                  />
                )}
                {modalType === 'Actualizar cliente' && (
                  <UpdateClient
                    clients={clients}
                    IconButton={IconButton}
                    handleUpdateClient={handleUpdateClient}
                  />
                )}

                {modalType === 'Eliminar cliente' && (
                  <DeleteClient
                    clients={clients}
                    IconButton={IconButton}
                    ConfirmDialog={ConfirmDialog}
                    handleDeleteClient={handleDeleteClient}
                  />
                )}
              </Modal>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default AdminSection
