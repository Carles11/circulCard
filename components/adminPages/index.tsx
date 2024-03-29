import { useState } from 'react'
import { useContext } from 'react'
import { AdminUserContext } from 'context/context'

import { PostgrestError } from '@supabase/supabase-js'

import Modal from 'components/modals'
import AdminTitles from './adminTitles'
import AdminClients from './adminClients'
import AdminProducts from './adminProducts'
import AdminMaterials from './adminMaterials'

import ConfirmDialog from 'components/confirmDialog/confirmDialog'

const AdminSection = ({
  userName,
  clientName,
  handleModalView,
  handleCreateClient,
  handleUpdateClient,
  handleDeleteClient,
  handleCreateProduct,
  handleUpdateProduct,
  handleDeleteProduct,
  handleCreateRelatedProduct,
  handleUpdateRelatedProduct,
  handleDeleteRelatedProduct,
  // handleCreateMaterial,
  // handleUpdateMaterial,
  // handleDeleteMaterial,
  showModal,
  relateItems,
  screenMessage,
  clients,
  products,
  allTheProducts,
  materials,
}: {
  userName: string
  clientName: string
  handleModalView: Function
  handleCreateClient: Function
  handleUpdateClient: Function
  handleDeleteClient: Function
  handleCreateProduct: Function
  handleUpdateProduct: Function
  handleDeleteProduct: Function
  handleCreateRelatedProduct: () => void
  handleUpdateRelatedProduct: () => void
  handleDeleteRelatedProduct: () => void
  // handleCreateMaterial: Function
  // handleUpdateMaterial: Function
  // handleDeleteMaterial: Function
  showModal: boolean
  relateItems: boolean
  screenMessage: PostgrestError | null | string | undefined
  clients?: any
  products?: any
  allTheProducts?: any
  materials?: any
}) => {
  const { showAdminSection } = useContext(AdminUserContext)
  const [modalType, setModalType] = useState<string>('')
  const adminColumns = [
    `${clients && 'clientes'}`,
    `${products && 'productos'}`,
    // `${materials && 'materiales'}`,
  ]
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

          <div className="flex flex-col md:flex-row justify-between gap-4">
            {adminColumns.map((colTitle, i) => {
              if (colTitle !== 'undefined') {
                return (
                  <AdminTitles
                    key={i}
                    handleModalView={handleModalView}
                    setModalType={setModalType}
                    title={colTitle}
                    relateItems={relateItems}
                  />
                )
              }
              return null // Or you can omit this line if you want to skip rendering for undefined values
            })}
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
                {products && (
                  <AdminProducts
                    products={products}
                    allTheProducts={allTheProducts}
                    clientName={clientName}
                    relateItems={relateItems}
                    handleModalView={handleModalView}
                    modalType={modalType}
                    ConfirmDialog={ConfirmDialog}
                    handleCreateProduct={handleCreateProduct}
                    handleUpdateProduct={handleUpdateProduct}
                    handleDeleteProduct={handleDeleteProduct}
                    handleCreateRelatedProduct={handleCreateRelatedProduct}
                    handleUpdateRelatedProduct={handleUpdateRelatedProduct}
                    handleDeleteRelatedProduct={handleDeleteRelatedProduct}
                  />
                )}
                {/* {materials && (
                  <AdminMaterials
                    materials={materials}
                    handleModalView={handleModalView}
                    modalType={modalType}
                    ConfirmDialog={ConfirmDialog}
                    handleCreateMaterial={handleCreateMaterial}
                    handleUpdateMaterial={handleUpdateMaterial}
                    handleDeleteMaterial={handleDeleteMaterial}
                  />
                )} */}
              </Modal>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default AdminSection
