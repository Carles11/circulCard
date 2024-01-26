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
      <div className="flex items-center justify-center w-72 px-4 bg-green-500 rounded-sm cursor-pointer shadow shadow-md shadow-gray-500">
        <button
          onClick={() => {
            handleModalView()
            setModalType(`Añadir clientes`)
          }}
        >
          <h4 className="text-foreground"> {`Añade clientes`} </h4>
        </button>
      </div>
      <div className="flex items-center justify-center w-72 px-4 bg-green-500 rounded-sm cursor-pointer shadow shadow-md shadow-gray-500">
        <button
          onClick={() => {
            handleModalView()
            setModalType(`Actualizar clientes`)
          }}
        >
          <h4 className="text-foreground"> {`Actualiza clientes`} </h4>
        </button>
      </div>
      <div className="flex items-center justify-center w-72 px-4 bg-green-500 rounded-sm cursor-pointer shadow shadow-md shadow-gray-500 mb-16">
        <button
          onClick={() => {
            handleModalView()
            setModalType(`Eliminar clientes`)
          }}
        >
          <h4 className="text-foreground"> {`Elimina clientes`} </h4>
        </button>
      </div>
    </div>
  )
}

export default AdminTitles
