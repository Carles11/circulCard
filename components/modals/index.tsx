import React, { ReactNode } from 'react'

const Modal = ({
  onClose,
  children,
  title,
}: {
  onClose: Function
  children: ReactNode
  title: string
}) => {
  const handleCloseClick = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    onClose()
  }

  return (
    <div className="modal-overlay">
      <div className="modal-wrapper">
        <div className="modal">
          <div className="modal-header">
            <a
              href="#"
              onClick={handleCloseClick}
              className="text-gray-700 border rounded-full border-gray-700 p-2"
            >
              Cerrar
            </a>
          </div>
          {title && <h1>{title}</h1>}
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default Modal
