import React, { useState } from 'react'
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  let [name, setName] = useState('')
  let [email, setEmail] = useState('')
  let [people, setpeople] = useState([])

  let handlerForm = (e) => {
    e.preventDefault()
    if (name && email) {
      let person = { name: name, email: email }
      setpeople((people) => {
        return [...people, person]
      })
      setName('')
      setEmail('')
    } else {
      alert('enter something')
    }
  }

  return (
    <>
      <article>
        <form className='form' onSubmit={handlerForm}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name :</label>
            <input
              type='Text'
              id='firstName'
              name='firstname'
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email :</label>
            <input
              type='Text'
              id='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type='submit'>add person</button>
        </form>
        <div>
          {people.map(({ name, email }, index) => {
            return (
              <div key={index}>
                <h3>{name}</h3>
                <h3>{email}</h3>
              </div>
            )
          })}
        </div>
      </article>
    </>
  )
}

export default ControlledInputs
