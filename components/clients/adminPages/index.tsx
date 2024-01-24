import { useState } from 'react'

import { PostgrestError } from '@supabase/supabase-js'

import Modal from 'components/modals'
import UpdateClient from './updateClient'
import DeleteClient from './deleteClient'

import ConfirmDialog from 'components/confirmDialog/confirmDialog'
import IconButton from 'components/icons/iconButton'

const AdminSection = ({
  userName,
  handleModalView,
  handleDeleteClient,
  showModal,
  screenMessage,
  clients,
}: {
  userName: string
  handleModalView: Function
  handleDeleteClient: Function
  showModal: boolean
  screenMessage: PostgrestError | null | string | undefined
  clients: any
}) => {
  const [confirmOpen, setConfirmOpen] = useState<boolean>(false)
  const [modalType, setModalType] = useState<string>('')

  return (
    <div className="flex flex-col my-16 px-8">
      <hr className="w-full h-1 mx-auto my-4 bg-gray-400 border-0 rounded md:my-10 dark:bg-gray-700" />
      <h2>{userName}, esta es tu sección como administrador.</h2>
      <h6>
        (No te preocupes, <u>solo administradores</u> pueden ver los contenidos
        más allá de la línea gris.)
      </h6>
      <div className="mt-16 flex flex-col items-center gap-4">
        <div className="flex items-center justify-center w-72 px-4 bg-green-500 rounded-full cursor-pointer shadow shadow-lg shadow-gray-500">
          <button
            onClick={() => {
              handleModalView()
              setModalType('Añadir cliente')
            }}
          >
            <h4 className="text-foreground">Añade un cliente </h4>
          </button>
        </div>
        <div className="flex items-center justify-center w-72 px-4 bg-green-500 rounded-full cursor-pointer shadow shadow-lg shadow-gray-500">
          <button
            onClick={() => {
              handleModalView()
              setModalType('Actualizar cliente')
            }}
          >
            <h4 className="text-foreground">Actualiza un cliente </h4>
          </button>
        </div>
        <div className="flex items-center justify-center w-72 px-4 bg-green-500 rounded-full cursor-pointer shadow shadow-lg shadow-gray-500">
          <button
            onClick={() => {
              handleModalView()
              setModalType('Eliminar cliente')
            }}
          >
            <h4 className="text-foreground">Elimina un cliente </h4>
          </button>
        </div>
        {showModal && (
          <Modal
            onClose={handleModalView}
            title={modalType}
            screenMessage={screenMessage}
          >
            {modalType === 'Actualizar cliente' && (
              <UpdateClient
                clients={clients}
                IconButton={IconButton}
                ConfirmDialog={ConfirmDialog}
                setConfirmOpen={setConfirmOpen}
                confirmOpen={confirmOpen}
                handleDeleteClient={handleDeleteClient}
              />
            )}

            {modalType === 'Eliminar cliente' && (
              <DeleteClient
                clients={clients}
                IconButton={IconButton}
                ConfirmDialog={ConfirmDialog}
                setConfirmOpen={setConfirmOpen}
                confirmOpen={confirmOpen}
                handleDeleteClient={handleDeleteClient}
              />
            )}
          </Modal>
        )}
      </div>
    </div>
  )
}

export default AdminSection
