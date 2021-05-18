import React, { useState, useEffect } from 'react'

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth)
  let checkSize = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', checkSize)
  })
  return (
    <>
      <h2>useEffect cleanup</h2>
      <h2>{size}</h2>
    </>
  )
}

export default UseEffectCleanup
