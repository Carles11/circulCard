import { Key, useState } from 'react'

import { PostgrestError } from '@supabase/supabase-js'

import Modal from 'components/modals'
import Link from 'next/link'
import ConfirmDialog from 'components/confirmDialog/confirmDialog'
import IconButton from 'components/icons/iconButton'
import TrashIcon from 'components/icons/trashIcon'

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
  return (
    <div className="flex flex-col my-16 px-8">
      <hr className="w-full h-1 mx-auto my-4 bg-gray-400 border-0 rounded md:my-10 dark:bg-gray-700" />{' '}
      <h2>{userName}, esta es tu sección como administrador.</h2>
      <h6>
        (No te preocupes, <u>solo administradores</u> pueden ver los contenidos
        más allá de la línea gris.)
      </h6>
      <div className="mt-16 flex flex-col items-center gap-4">
        <Link
          href="https://www.thecirculart.com"
          target="_blank"
          className="flex items-center justify-center w-72 px-4 bg-green-500 rounded-full cursor-pointer shadow shadow-lg shadow-gray-500"
        >
          <div className="flex items-center align-middle gap-4">
            <h4 className="text-foreground">Añade un cliente</h4>
          </div>
        </Link>
        <Link
          href="https://www.thecirculart.com"
          target="_blank"
          className="flex items-center justify-center w-72 px-4 bg-green-500 rounded-full cursor-pointer shadow shadow-lg shadow-gray-500"
        >
          <div className="flex items-center align-middle gap-4">
            <h4 className="text-foreground">Actualiza un cliente</h4>
          </div>
        </Link>

        <div className="flex items-center justify-center w-72 px-4 bg-green-500 rounded-full cursor-pointer shadow shadow-lg shadow-gray-500">
          <button onClick={() => handleModalView()}>
            <h4 className="text-foreground">Elimina un cliente </h4>
          </button>
        </div>
        {showModal && (
          <Modal
            onClose={handleModalView}
            title={'Eliminar cliente'}
            screenMessage={screenMessage}
          >
            <div className="flex flex-col p-4 text-foreground  ">
              <h4>Pulsa sobre un cliente para eliminarlo de la lista.</h4>
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
                          <h6 className="text-grey-400">
                            Esto es irreversible.
                          </h6>
                        </ConfirmDialog>
                      </div>
                    </div>
                  ))}
              </div>
              {/* <button className="absolute bottom-8 right-8">
            Eliminar cliente
          </button> */}
            </div>
          </Modal>
        )}
      </div>
    </div>
  )
}

export default AdminSection
