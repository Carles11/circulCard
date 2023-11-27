import React from 'react'

const ProductListInfoLabel = () => {
  return (
    <div className="w-full p-8">
      <h1 className="w-full rounded-md p-4 text-gray-700 border border-1 rounded rounded-sm">
        Detalles del producto
      </h1>
      <div>
        <ul className="text-gray-700 pl-4">
          <li>Unidades gestionadas:</li>
          <li>Total kilos:</li>
        </ul>
      </div>
    </div>
  )
}

export default ProductListInfoLabel
