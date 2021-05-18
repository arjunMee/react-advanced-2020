import React, { useState } from 'react'

const UseStateCounter = () => {
  let [num, setNum] = useState(0)
  const increase = () => {
    setNum((pre) => {
      return ++pre
    })
  }
  const decrease = () => {
    setNum(--num)
  }
  const reset = () => {
    setNum(0)
  }

  let comIncrease = () => {
    setTimeout(() => {
      // setNum(num + 1)
      setNum((num) => {
        return num + 2
      })
    }, 2000)
  }
  return (
    <>
      <h1>counter</h1>
      <h2>{num}</h2>
      <button className='btn' onClick={increase}>
        increase
      </button>
      <button className='btn' onClick={decrease}>
        decrease
      </button>
      <button className='btn' onClick={reset}>
        reset
      </button>
      <h1>complex counter</h1>
      <h2>{num}</h2>
      <button className='btn' onClick={comIncrease}>
        increase
      </button>
    </>
  )
}

export default UseStateCounter
