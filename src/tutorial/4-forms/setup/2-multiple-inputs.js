import React, { useState } from 'react'
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  // let [name, setName] = useState('')
  // let [email, setEmail] = useState('')
  // let [age, setAge] = useState('')
  let [person, setPerson] = useState({ name: '', email: '', age: '' })
  let [people, setPeople] = useState([])

  const hendleSubmit = (e) => {
    e.preventDefault()
    let { name, email, age } = person

    if (name && email && age) {
      // let peopl = { name, email, age, id: new Date().getTime().toString() }
      // setPeople([...people, peopl])
      // setEmail('')
      // setName('')
      // setAge('')

      setPeople([...people, { ...person, id: new Date().getTime().toString() }])
      setPerson({ name: '', email: '', age: '' })
    } else {
      console.log('hello')
    }
  }

  let handlerChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    // console.log(name, value)
    setPerson((person) => {
      return { ...person, [name]: value }
    })
  }

  return (
    <>
      <article>
        <form className='form'>
          <div className='form-control'>
            <label htmlFor='firstName'>Name :</label>
            <input
              type='Text'
              id='Name'
              name='name'
              onChange={handlerChange}
              value={person.name}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email :</label>
            <input
              type='Text'
              id='email'
              name='email'
              value={person.email}
              onChange={handlerChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='age'>age :</label>
            <input
              type='Text'
              id='age'
              name='age'
              value={person.age}
              onChange={handlerChange}
            />
          </div>
          <button type='submit' onClick={hendleSubmit}>
            add person
          </button>
        </form>
        <div>
          {people.map(({ name, email, age, id }) => {
            return (
              <div key={id}>
                <h3>{name}</h3>
                <h3>{email}</h3>
                <h3>{age}</h3>
              </div>
            )
          })}
        </div>
      </article>
    </>
  )
}

export default ControlledInputs
