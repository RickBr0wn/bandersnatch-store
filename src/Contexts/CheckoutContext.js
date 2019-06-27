import React from 'react'
import { ADD_ITEM_TO_BASKET } from '../Constants/ActionConstants'

export const CheckoutContext = React.createContext()

const initialState = {
  items: []
}

function withLogger(dispatch) {
  return function(action) {
    console.log(
      '\x1b[43m%s\x1b[0m',
      'Action Type:',
      `{ action.type: ${action.type} }`
    )
    return dispatch(action)
  }
}

function useReducerWithLogger(...args) {
  let prevState = React.useRef(initialState)
  const [state, dispatch] = React.useReducer(...args)

  const dispatchWithLogger = React.useMemo(() => {
    return withLogger(dispatch)
  }, [dispatch])

  React.useEffect(() => {
    if (state !== initialState) {
      console.log('\x1b[33m%s\x1b[0m', 'Prev ch state: ', prevState.current)
      console.log('\x1b[33m%s\x1b[0m', 'Current ch state: ', state)
      console.groupEnd()
    }
    prevState.current = state
  }, [state])

  return [state, dispatchWithLogger]
}

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_BASKET:
      return Object.assign({}, state, state.items.push(action.newItem))
    default:
      return state
  }
}

export default function CheckoutContextProvider({ children }) {
  const [state, dispatch] = useReducerWithLogger(reducer, initialState)
  return (
    <CheckoutContext.Provider value={{ state, dispatch }}>
      {children}
    </CheckoutContext.Provider>
  )
}
