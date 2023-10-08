import React from 'react'
import ReactDOM from 'react-dom'

const Modal = ({ open, children }) => {
  if (!open) return null

  return ReactDOM.createPortal(
    <>
      <div className='fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-50 z-50' />
      <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 rounded-lg shadow-sm bg-white p-6 w-full max-w-[400px]'>
        {children}
      </div>
    </>,
    document.getElementById('modal')
  )
}

export default Modal