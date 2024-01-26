import { useState } from 'react'
import { useContext } from 'react'
import { AdminUserContext } from 'context/context'
import IconButton from 'components/icons/iconButton'
import EditIcon from 'components/icons/editIcon'

import { PostgrestError } from '@supabase/supabase-js'

import Modal from 'components/modals'
import AdminTitles from './adminTitles'
import AdminClients from './adminClients'

import AddProduct from './adminProducts/addProduct'
import UpdateProduct from './adminProducts/updateProduct'
import DeleteProduct from './adminProducts/deleteProduct'

import ConfirmDialog from 'components/confirmDialog/confirmDialog'

const AdminSection = ({
  userName,
  handleModalView,
  handleCreateClient,
  handleUpdateClient,
  handleDeleteClient,
  handleCreateProduct,
  handleUpdateProduct,
  handleDeleteProduct,
  showModal,
  screenMessage,
  clients,
  products,
  materials,
}: {
  userName: string
  handleModalView: Function
  handleCreateClient: Function
  handleUpdateClient: Function
  handleDeleteClient: Function
  handleCreateProduct: Function
  handleUpdateProduct: Function
  handleDeleteProduct: Function
  showModal: boolean
  screenMessage: PostgrestError | null | string | undefined
  clients?: any
  products?: any
  materials?: any
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
            (Descuida, <u>solo administradores</u> pueden ver el icono de "modo
            administrador" y los contenidos más allá de la línea gris.)
          </h6>
          <div className="flex justify-between gap-4">
            {clients && (
              <AdminTitles
                handleModalView={handleModalView}
                setModalType={setModalType}
                title={'clientes'}
              />
            )}
            {products && (
              <AdminTitles
                handleModalView={handleModalView}
                setModalType={setModalType}
                title={'productos'}
              />
            )}
            {materials && (
              <AdminTitles
                handleModalView={handleModalView}
                setModalType={setModalType}
                title={'materiales'}
              />
            )}
          </div>
          <div className="mt-16 flex flex-col items-center gap-4">
            {showModal && (
              <Modal
                onClose={handleModalView}
                title={modalType}
                screenMessage={screenMessage}
              >
                {clients && (
                  <AdminClients
                    clients={clients}
                    handleModalView={handleModalView}
                    modalType={modalType}
                    ConfirmDialog={ConfirmDialog}
                    handleCreateClient={handleCreateClient}
                    handleUpdateClient={handleUpdateClient}
                    handleDeleteClient={handleDeleteClient}
                  />
                )}

                {products && modalType === 'Añadir productos' && (
                  <AddProduct
                    onCreateProduct={handleCreateProduct}
                    onClose={handleModalView}
                  />
                )}
                {products && modalType === 'Actualizar productos' && (
                  <UpdateProduct
                    products={products}
                    IconButton={IconButton}
                    handleUpdateProduct={handleUpdateProduct}
                  />
                )}

                {products && modalType === 'Eliminar productos' && (
                  <DeleteProduct
                    products={products}
                    IconButton={IconButton}
                    ConfirmDialog={ConfirmDialog}
                    handleDeleteProduct={handleDeleteProduct}
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
