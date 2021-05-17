import React, { useState } from 'react'

const UseStateBasics = () => {
  let [title, setTitle] = useState('hello')

  let handler = () => {
    setTitle('hello baby')
  }

  return (
    <>
      <h1>{title}</h1>
      <button className='btn' type='button' onClick={handler}>
        change color
      </button>
    </>
  )
}

export default UseStateBasics
