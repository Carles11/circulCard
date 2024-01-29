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

  return (
    <div className="w-full text-left">
      <ul className="text-gray-700">
        <li>
          <h6>Unidades gestionadas:</h6>
          {units[0].unidades_gestionadas_total || 'sin datos'}
        </li>
        <li>
          <h6>Total kilos:</h6> {units[0].peso_total || 'sin datos'}
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
