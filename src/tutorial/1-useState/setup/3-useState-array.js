import React, { useState } from 'react'
import { data } from '../../../data'

const UseStateArray = () => {
  let [people, setPeople] = useState([])
  let getAllData = () => {
    setPeople(data)
  }

  let removeAllData = (id) => {
    setPeople((pre) => {
      return pre.filter((person) => person.id !== id)
    })
  }
  return (
    <>
      {people.map((person) => {
        const { id, name } = person
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button
              type='button'
              className='btn'
              onClick={() => removeAllData(id)}
            >
              remove
            </button>
          </div>
        )
      })}
      <button type='button' className='btn' onClick={getAllData}>
        referesh
      </button>
    </>
  )
}

export default UseStateArray
