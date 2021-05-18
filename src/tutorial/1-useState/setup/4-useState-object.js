import React, { useState } from 'react'

const UseStateObject = () => {
  const [people, setPeople] = useState({ name: 'arjun', age: 23 })

  let update = () => {
    setPeople({ ...people, name: 'karan' })
  }
  return (
    <>
      <h2>{people.name}</h2>
      <h2>{people.age}</h2>
      <button type='btn' className='btn' onClick={update}>
        update
      </button>
    </>
  )
}

export default UseStateObject
