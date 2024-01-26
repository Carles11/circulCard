import React, { Dispatch, SetStateAction } from 'react'

const AdminTitles = ({
  handleModalView,
  setModalType,
  title,
}: {
  handleModalView: Function
  setModalType: Dispatch<SetStateAction<string>>
  title: string
}) => {
  return (
    <div className="mt-16 flex flex-col items-center gap-4">
      <h4>
        <u>Sección {title}</u>
      </h4>
      <div className="flex items-center justify-center w-72 px-4 bg-green-500 rounded-sm cursor-pointer shadow shadow-xs shadow-gray-500">
        <button
          onClick={() => {
            handleModalView()
            setModalType(`Añadir ${title}`)
          }}
        >
          <h5 className="text-foreground p-2"> {`Añade ${title}`} </h5>
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
          <h5 className="text-foreground p-2"> {`Elimina ${title}`} </h5>
        </button>
      </div>
    </div>
  )
}

export default AdminTitles
