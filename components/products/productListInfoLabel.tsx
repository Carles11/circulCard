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
    // console.log({ conv })
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
          <h5>Hasta hoy hemos gestionado </h5>
          <div className="flex gap-2 items-center">
            <h2 className="text-5xl">
              {' '}
              {units[0].unidades_gestionadas_total || 0}{' '}
            </h2>{' '}
            <p>unidades de {productName} para ti.</p>
          </div>
        </li>
        <hr className="w-full h-px bg-gray-400 border-0 rounded md:my-2 dark:bg-gray-500" />
        <li>
          <div className="flex gap-1 items-center">
            <h5>En total hemos recogido</h5>
            <h2 className="text-6xl">
              {units[0].peso_total ? convertedWeight : 0}
              {weightUnit}
            </h2>
          </div>
          <p>de este producto en tu empresa.</p>
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
