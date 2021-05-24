// reducer function
export let reducer = (state, action) => {
  console.log(action)
  if (action.type === 'ADD_ITEM') {
    const newAr = [...state.people, action.payLoad]
    console.log(action.payLoad.name)
    return {
      ...state,
      people: newAr,
      isModelOpen: true,
      modelaContent: 'item added',
    }
  }

  if (action.type === 'NO_VALUE') {
    console.log(state)
    return { ...state, isModelOpen: true, modelaContent: 'please enter value' }
  }

  if (action.type === 'CLOSE_MODEL') {
    return { ...state, isModelOpen: false }
  }

  if (action.type === 'REMOVE_NAME') {
    console.log(action)
    const updatePeople = state.people.filter(
      (name) => name.id !== action.payLoad
    )
    return { ...state, people: updatePeople }
  }

  // return state
  throw new Error('np match found')
}
