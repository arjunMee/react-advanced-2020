import React, { useEffect } from 'react'

const Modal = ({ modelaContent, closeModel }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModel()
    }, 3000)
  }, [])

  return (
    <div className='model'>
      <p>{modelaContent}</p>
    </div>
  )
}

export default Modal
