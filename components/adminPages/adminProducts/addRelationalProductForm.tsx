import React, { useState } from 'react'

const AddRelationalProductForm = ({
  onCreateProduct,
  onClose,
  clientName,
  allTheProducts,
}: {
  onClose: Function
  clientName: String
  onCreateProduct: Function
  allTheProducts: any
}) => {
  const [productName, setProductName] = useState<string>('')
  const [totalWeight, setTotalWeight] = useState<number>(0)
  const [units, setUnits] = useState<number>(0)

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductName(e.target.value)
  }
  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTotalWeight(parseFloat(e.target.value))
  }
  const handleUnitsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUnits(parseFloat(e.target.value))
  }

  const handleSubmit = () => {
    onCreateProduct(productName, clientName, totalWeight, units)
    // Reset Inputs
    setProductName('')
  }
  const completeListOfProducts = allTheProducts
  console.log({ completeListOfProducts })
  return (
    <div>
      <div className="mb-4">
        {/* Label for the Name input */}
        <label
          htmlFor="productName"
          className="block text-sm font-medium text-gray-400"
        >
          Vincula a {clientName} un nuevo producto. Te mostramos a continuación
          los productos disponibles (solo podrás añadir uno a la vez).
        </label>

        <div className="flex gap-2 p-4">
          {completeListOfProducts.length > 0 &&
            completeListOfProducts.map((fullProds: any) => {
              console.log({ fullProds })
              return (
                <div className="relative grid select-none items-center whitespace-nowrap rounded-full bg-gray-900 py-1.5 px-3 font-sans text-xs font-bold uppercase text-white">
                  <span className="">{fullProds?.product_name}</span>
                </div>
              )
            })}
          {/* <div className="relative grid select-none items-center whitespace-nowrap rounded-full bg-gradient-to-tr from-gray-900 to-gray-800 py-1.5 px-3 font-sans text-xs font-bold uppercase text-white">
            <span className="">chip gradient</span>
          </div>
          <div className="relative grid select-none items-center whitespace-nowrap rounded-full border border-gray-900 py-1.5 px-3 font-sans text-xs font-bold uppercase text-gray-700">
            <span className="">chip outlined</span>
          </div>
          <div className="relative grid select-none items-center whitespace-nowrap rounded-full bg-gray-900/10 py-1.5 px-3 font-sans text-xs font-bold uppercase text-gray-900">
            <span className="">chip ghost</span>
          </div> */}
        </div>

        {/* <div className="flex gap-2">
          <div className="relative grid items-center px-2 py-1 text-xs font-bold text-green-700 uppercase rounded-md select-none whitespace-nowrap bg-green-500/20">
            <div className="absolute w-4 h-4 top-2/4 left-1 -translate-y-2/4">
              <span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-green-700 content-['']"></span>
            </div>
            <span className="ml-4">Desvinculada</span>
          </div>
          <div className="relative grid items-center px-2 py-1 text-xs font-bold text-red-900 uppercase rounded-md select-none whitespace-nowrap bg-red-500/20">
            <div className="absolute w-4 h-4 top-2/4 left-1 -translate-y-2/4">
              <span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-red-900 content-['']"></span>
            </div>
            <span className="ml-4">Sin vincular</span>
          </div>
        </div> */}
        <input
          id="productName"
          type="text"
          value={productName}
          className="rounded-ms w-full p-2 border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
          onChange={handleNameChange}
        />
        {/* Label for the Name input */}
        <label
          htmlFor="units"
          className="block text-sm font-medium text-gray-400"
        >
          Unidades gestionadas del producto
        </label>
        <input
          id="units"
          type="numeric"
          value={units}
          className="rounded-ms w-full p-2 border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
          onChange={handleUnitsChange}
        />
        {/* Label for the WEIGHT input */}
        <label
          htmlFor="totalWeight"
          className="block text-sm font-medium text-gray-400"
        >
          Peso total del producto
        </label>
        <input
          id="totalWeight"
          type="numeric"
          value={totalWeight}
          className="rounded-ms w-full p-2 border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
          onChange={handleWeightChange}
        />
      </div>

      <div className="mb-4"></div>

      <button
        className="mt-4 border border-gray-700 p-2 rounded-xl bg-btn-background mr-2"
        onClick={handleSubmit}
      >
        Guardar cambios
      </button>

      <button
        className="mt-4 border border-gray-700 p-2 rounded-xl"
        onClick={() => {
          onClose()
        }}
      >
        Salir
      </button>
    </div>
  )
}

export default AddRelationalProductForm
