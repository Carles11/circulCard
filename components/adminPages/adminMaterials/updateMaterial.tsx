import React, { useState } from 'react'

import EditIcon from 'components/icons/editIcon'

import UpdateMaterialForm from './updateMaterialForm'

const UpdateMaterial = ({
  materials,
  IconButton,
  handleUpdateMaterial,
}: {
  materials: any
  IconButton: any
  handleUpdateMaterial: Function
}) => {
  const [confirmOpen, setConfirmOpen] = useState<number | null>(null)

  return (
    <div className="flex flex-col p-4 text-foreground  ">
      <h4>Pulsa sobre el icono para actualizar un material.</h4>
      <div className="flex flex-col items-center gap-2 mt-16">
        {materials?.length > 0 &&
          materials?.map((item: any, index: number) => (
            <div
              key={item.id}
              className="w-full flex items-baseline justify-between border border-gray-600 rounded-sm p-2"
            >
              <h5 className="text-foreground">{item.material_name}</h5>
              <div>
                {confirmOpen !== index && (
                  <IconButton
                    aria-label="update"
                    onClick={() => setConfirmOpen(index)}
                  >
                    <EditIcon />
                  </IconButton>
                )}

                <UpdateMaterialForm
                  material={item}
                  open={confirmOpen === index}
                  onClose={() => setConfirmOpen(null)}
                  onUpdate={handleUpdateMaterial}
                ></UpdateMaterialForm>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default UpdateMaterial
