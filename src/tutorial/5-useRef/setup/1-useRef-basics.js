import React, { useEffect, useRef } from 'react'

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  let refContainer = useRef(null)
  let onSubmit = (e) => {
    e.preventDefault()
    console.log(refContainer.current.value)
  }

  useEffect(() => {
    refContainer.current.focus()
  })

  return (
    <>
      <form className='form' onSubmit={onSubmit}>
        <input type='text' name='name' ref={refContainer} />
        <button type='submit' className='btn'>
          usmit
        </button>
      </form>
    </>
  )
}

export default UseRefBasics
