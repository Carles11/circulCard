import { useState } from 'react'
import { convertToTons } from 'utils/utils.service'

const ProductListInfoLabel = ({
  certificates,
  productName,
  units,
}: {
  certificates: string[]
  productName: String
  units: any
}) => {
  const handleDownload = (pdfPath: string) => () => {
    const link = document.createElement('a')
    link.href = pdfPath
    link.download = pdfPath.split('/').pop() || 'thecirculart_certificado.pdf'
    link.click()
  }
  const handleConversion = (weight: number) => {
    const conv = convertToTons(weight)
    console.log({ conv })
    return {
      convertedWeight: conv.isInTons ? conv.weight : weight,
      weightUnit: conv.isInTons ? 'T.' : 'Kg.',
    }
  }

  const { convertedWeight, weightUnit } = handleConversion(
    units[0].peso_total || 0
  )

  return (
    <div className="w-full text-left">
      <ul className="text-gray-700">
        <li>
          <h5>Unidades gestionadas:</h5>
          <div className="flex gap-2 items-baseline">
            <h2> {units[0].unidades_gestionadas_total || 0} </h2>{' '}
            <p>{productName}</p>
          </div>
        </li>
        <li>
          <h5>Hemos recogido</h5>
          <div className="flex gap-2 items-center">
            <h2>
              {units[0].peso_total ? convertedWeight : 0}
              {weightUnit}
            </h2>
            <p>de este producto en tu empresa.</p>
          </div>
        </li>
        {productName === 'tarjetas' &&
          certificates &&
          certificates.length > 0 && (
            <li>
              <h2 className="text-xl mt-4">
                <u>Descarga los certificados:</u>
              </h2>
              <ul>
                {certificates.map((pdfPath, index) => (
                  <li key={index}>
                    <button onClick={handleDownload(pdfPath)}>
                      {pdfPath.split('/').pop() ||
                        'thecirculart_certificado.pdf'}
                    </button>
                  </li>
                ))}
              </ul>
            </li>
          )}
      </ul>
    </div>
  )
}

export default ProductListInfoLabel
