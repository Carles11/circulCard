import IconButton from 'components/icons/iconButton'
import React from 'react'
import AddMaterial from './addMaterial'
import DeleteMaterial from './deleteMaterial'
import UpdateMaterial from './updateMaterial'

const AdminMaterials = ({
  materials,
  modalType,
  handleCreateMaterial,
  handleUpdateMaterial,
  handleDeleteMaterial,
  handleModalView,
  ConfirmDialog,
}: {
  materials: any
  modalType: string
  handleCreateMaterial: Function
  handleUpdateMaterial: Function
  handleDeleteMaterial: Function
  handleModalView: Function
  ConfirmDialog: any
}) => {
  return (
    <div>
      {' '}
      {materials && modalType === 'Añadir materiales' && (
        <AddMaterial
          onCreateMaterial={handleCreateMaterial}
          onClose={handleModalView}
        />
      )}
      {materials && modalType === 'Actualizar materiales' && (
        <UpdateMaterial
          materials={materials}
          IconButton={IconButton}
          handleUpdateMaterial={handleUpdateMaterial}
        />
      )}
      {materials && modalType === 'Eliminar materiales' && (
        <DeleteMaterial
          materials={materials}
          IconButton={IconButton}
          ConfirmDialog={ConfirmDialog}
          handleDeleteMaterial={handleDeleteMaterial}
        />
      )}
    </div>
  )
}

export default AdminMaterials
