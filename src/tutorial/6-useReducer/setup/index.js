import React, { useState, useReducer } from 'react'
import Modal from './Modal'
import { data } from '../../../data'
// reducer function

let reducer = (state, action) => {}
let defaultState = {
  //inintial state
  people: [],
  isModelOpen: false,
  modelaContent: 'hello word',
}
const Index = () => {
  const [name, setName] = useState('')
  const [state, dispatch] = useReducer(reducer, defaultState)

  let handleSubmit = (e) => {
    e.preventDefault()
    if (name) {
      setshowModel(true)
      setPeople([...people, { id: new Date().getTime().toString(), name }])
    } else {
      setshowModel(true)
    }
  }

  return (
    <>
      {showModel && <Modal />}
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <button type='submit'>add</button>
      </form>
      {people.map(({ id, name }) => {
        return (
          <div>
            <h3>{name}</h3>
          </div>
        )
      })}
    </>
  )
}

export default Index
