import React, { useState } from 'react'
import { data } from '../../../data'

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data)
  const removePerson = (id) => {
    setPeople((people) =>
      people.filter((person) => {
        return person.id !== id
      })
    )
  }

  return (
    <div className='container'>
      <h3>Prop Drilling</h3>
      <List people={people} removePerson={removePerson} />
    </div>
  )
}

const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
            removePerson={removePerson}
          />
        )
      })}
    </>
  )
}

const SinglePerson = ({ id, name, removePerson }) => {
  return (
    <div className='item'>
      <h3 key={id}>{name}</h3>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  )
}

export default PropDrilling
