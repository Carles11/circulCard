import { PostgrestError } from '@supabase/supabase-js'
import React, { ReactNode } from 'react'
import { ScrollToTop } from 'utils/autoScrollings'

const Modal = ({
  onClose,
  children,
  title,
  screenMessage,
}: {
  onClose: Function
  children: ReactNode
  title: string
  screenMessage: PostgrestError | null | string | undefined
}) => {
  const handleCloseClick = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    onClose()
  }

  return (
    <div className="modal-overlay">
      <ScrollToTop />
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
          <div className="modal-body mb-4">{children}</div>

          {typeof screenMessage !== 'string' ? (
            <p className="text-red-500">{screenMessage?.message}</p>
          ) : (
            <p className="text-lightgreenBg">{screenMessage}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Modal
