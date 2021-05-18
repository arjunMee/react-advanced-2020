import React, { useState, useEffect } from 'react'
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  let [value, setValue] = useState(0)
  useEffect(() => {
    console.log('initial redner')
    if (value > 1) {
      document.title = `new message(${value})`
    }
  }, [value]) //dependency only run once
  console.log('previours')

  let handler = () => {
    setValue(value + 1)
  }
  return (
    <>
      <h1>
        {value}
        {console.log('render')}
      </h1>
      <button className='btn' onClick={handler}>
        increase
      </button>
    </>
  )
}

export default UseEffectBasics
