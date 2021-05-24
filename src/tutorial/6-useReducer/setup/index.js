import React, { useState, useReducer } from 'react'
import Modal from './Modal'
import { reducer } from './reducer'
import { data } from '../../../data'

//inintial state
let defaultState = {
  people: [],
  isModelOpen: false,
  modelaContent: '',
}
const Index = () => {
  const [name, setName] = useState('')
  const [state, dispatch] = useReducer(reducer, defaultState)

  let handleSubmit = (e) => {
    e.preventDefault()
    if (name) {
      dispatch({
        type: 'ADD_ITEM',
        payLoad: { id: new Date().getTime().toString(), name },
      })
    } else {
      dispatch({ type: 'NO_VALUE' })
    }
    setName('')
  }

  const closeModel = () => {
    dispatch({ type: 'CLOSE_MODEL' })
  }

  // const remove

  return (
    <>
      {state.isModelOpen && (
        <Modal closeModel={closeModel} modelaContent={state.modelaContent} />
      )}
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
      {state.people.map(({ id, name }) => {
        console.log(name, id)
        return (
          <div key={id} className='item'>
            <h3>{name}</h3>
            <button
              onClick={() => dispatch({ type: 'REMOVE_NAME', payLoad: id })}
            >
              remove
            </button>
          </div>
        )
      })}
    </>
  )
}

export default Index

// import React, { useState, useReducer } from 'react'
// import Modal from './Modal'
// import { data } from '../../../data'
// // reducer function

// const Index = () => {
//   const [name, setName] = useState('')
//   const [people, setPeople] = useState(data)
//   const [showModel, setshowModel] = useState(false)

//   let handleSubmit = (e) => {
//     e.preventDefault()
//     if (name) {
//       setshowModel(true)
//       setPeople([...people, { id: new Date().getTime().toString(), name }])
//     } else {
//       setshowModel(true)
//     }
//   }

//   return (
//     <>
//       {showModel && <Modal />}
//       <form className='form' onSubmit={handleSubmit}>
//         <div>
//           <input
//             type='text'
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           ></input>
//         </div>
//         <button type='submit'>add</button>
//       </form>
//       {people.map(({ id, name }) => {
//         return (
//           <div>
//             <h3>{name}</h3>
//           </div>
//         )
//       })}
//     </>
//   )
// }

// export default Index
