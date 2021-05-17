import React, { useState } from 'react'

const error = () => {
  let [title, setTitle] = useState('hello word again')

  let handler = () => {
    setTitle('hello melo')
  }

  return (
    <>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handler}>
        random text
      </button>
    </>
  )
}

export default error
