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
    <div className="modal-overlay ">
      <div className="modal-wrapper relative">
        <div className="modal">
          <div className="modal-header">
            <a
              href="#"
              onClick={handleCloseClick}
              className="text-gray-500 link-with-style"
            >
              Cerrar
            </a>
          </div>
          {title && <h1 className="text-gray-700">{title}</h1>}
          <div className="modal-body ">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default Modal
