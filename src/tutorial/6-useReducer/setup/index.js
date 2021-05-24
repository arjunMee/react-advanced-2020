import React, { useState, useReducer } from 'react'
import Modal from './Modal'
import { data } from '../../../data'
// reducer function
let reducer = (state, action) => {
  const newAr = [...state.people, action.payLoad]
  if (action.type === 'ADD_ITEM') {
    return {
      ...state,
      people: newAr,
      isModelOpen: true,
      modelaContent: 'item added',
    }
  }

  if (action.type === 'NO_VALUE') {
    return { ...state, isModelOpen: true, modelaContent: 'please ad dsgdg' }
  }
  // return state
  throw new Error('np match found')
}
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
  }

  return (
    <>
      {state.isModelOpen && <Modal modelaContent={state.modelaContent} />}
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
        return (
          <div key={id}>
            <h3>'hello' + {name} + 'plus'</h3>
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
