import { PostgrestError } from '@supabase/supabase-js'
import React, { ReactNode } from 'react'

const Modal = ({
  onClose,
  children,
  title,
  screenMessage,
}: {
  onClose: Function
  children: ReactNode
  title: string
  screenMessage?: PostgrestError | string | null
}) => {
  const handleCloseClick = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    onClose()
  }

  return (
    <div className="modal-overlay">
      <div className="modal-wrapper relative">
        <div className="modal">
          <div className="modal-header absolute top-8 right-8">
            <a
              href="#"
              onClick={handleCloseClick}
              className="text-gray-400 link-with-style"
            >
              Cerrar
            </a>
          </div>
          {title && <h2>{title}</h2>}
          <div className="modal-body ">{children}</div>
          <p className="text-red-500">
            {typeof screenMessage !== 'string'
              ? screenMessage?.message
              : screenMessage}
          </p>
          <div className="modal-header absolute bottom-8 right-8">
            <a
              href="#"
              onClick={handleCloseClick}
              className="text-gray-400 link-with-style"
            >
              Volver
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
