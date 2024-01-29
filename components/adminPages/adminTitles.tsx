import React, { Dispatch, SetStateAction } from 'react'
import { capitalizeFirstLetter } from 'utils/utils.service'

const AdminTitles = ({
  handleModalView,
  setModalType,
  title,
  relateItems,
}: {
  handleModalView: Function
  setModalType: Dispatch<SetStateAction<string>>
  title: string
  relateItems: boolean
}) => {
  const addItemLegend = relateItems ? 'Vincula' : 'Añade'
  const removeItemLegend = relateItems ? 'Desvincula' : 'Elimina'
  return (
    <div className="mt-16 flex flex-col items-center gap-4">
      <h4>
        <u>{capitalizeFirstLetter(title)}</u>
      </h4>
      <div className="flex items-center justify-center w-72 px-4 bg-green-500 rounded-sm cursor-pointer shadow shadow-xs shadow-gray-500">
        <button
          onClick={() => {
            handleModalView()
            setModalType(`Añadir ${title}`)
          }}
        >
          <h5 className="text-foreground p-2">{`${addItemLegend} ${title}`}</h5>
        </button>
      </div>
      <div className="flex items-center justify-center w-72 px-4 bg-green-500 rounded-sm cursor-pointer shadow shadow-xs shadow-gray-500">
        <button
          onClick={() => {
            handleModalView()
            setModalType(`Actualizar ${title}`)
          }}
        >
          <h5 className="text-foreground p-2"> {`Actualiza ${title}`} </h5>
        </button>
      </div>
      <div className="flex items-center justify-center w-72 px-4 bg-green-500 rounded-sm cursor-pointer shadow shadow-xs shadow-gray-500 mb-16">
        <button
          onClick={() => {
            handleModalView()
            setModalType(`Eliminar ${title}`)
          }}
        >
          <h5 className="text-foreground p-2">
            {`${removeItemLegend} ${title}`}
          </h5>
        </button>
      </div>
    </div>
  )
}

export default AdminTitles
