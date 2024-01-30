import React, { useState } from 'react'

const AddRelationalProductForm = ({
  onCreateProduct,
  onClose,
  clientName,
  allTheProducts,
  relatedProducts,
}: {
  onClose: Function
  clientName: String
  onCreateProduct: Function
  allTheProducts: any
  relatedProducts: any
}) => {
  const [productName, setProductName] = useState<string>('')
  const [productId, setProductId] = useState<string>('')
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
    onCreateProduct(productName, productId, clientName, totalWeight, units)
    // Reset Inputs
    setProductName('')
  }

  // Compare both arrays and return products that are not in both arrays
  const notRelatedProducts = allTheProducts?.filter((product1: any) => {
    // Check if the product from the first array is not present in the second array
    return !relatedProducts?.some(
      (product2: any) => product2.id === product1.id
    )
  })
  return (
    <div>
      <div className="mb-4">
        <div>
          {notRelatedProducts?.length > 0 ? (
            <div className="flex flex-col gap-2 p-4">
              {/* Label for the Name input */}
              <label
                htmlFor="productName"
                className="block text-sm font-medium text-gray-400"
              >
                Vincula a {clientName} un nuevo producto. Te mostramos a
                continuación los productos disponibles (solo podrás añadir uno a
                la vez).
              </label>
              <div className="flex gap-1">
                {notRelatedProducts.map((notRelProd: any) => {
                  const isSelected = productName === notRelProd?.product_name
                  return (
                    <div className="w-fit">
                      <div
                        className={`${
                          isSelected ? 'bg-green-700' : 'bg-gray-700'
                        } relative grid select-none items-center whitespace-nowrap rounded-full  py-1.5 px-3 font-sans text-xs font-bold uppercase text-white`}
                      >
                        <button
                          onClick={() => {
                            setProductName(notRelProd?.product_name)
                            setProductId(notRelProd?.id)
                          }}
                        >
                          <span className="">{notRelProd?.product_name} +</span>
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ) : (
            <p>Este cliente ya tiene todos los productos vinculados</p>
          )}
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
          disabled
        />
        {/* Label for the Name input */}
        <label
          htmlFor="units"
          className="mt-2 block text-sm font-medium text-gray-400"
        >
          Unidades gestionadas de {productName}
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
          className="mt-2 block text-sm font-medium text-gray-400"
        >
          Peso total del producto retirado
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
