import React from 'react'
import StoreContext from './StoreContext'
import { GET_ALL_PRODUCTS } from '../Constants/ActionConstants'
import { JSON_Data } from './initialState'

const initialState = {
  length: JSON_Data.length,
  catalogue: JSON_Data
}

const reducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return state
    default:
      return state
  }
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
      console.log('\x1b[33m%s\x1b[0m', 'Prev state: ', prevState.current)
      console.log('\x1b[33m%s\x1b[0m', 'Current state: ', state)
      console.groupEnd()
    }
    prevState.current = state
  }, [state])

  return [state, dispatchWithLogger]
}

export const withStore = WrappedComponent => props => {
  const [state, dispatch] = useReducerWithLogger(reducer, initialState)
  return (
    <StoreContext.Provider>
      <WrappedComponent {...props} store={[state, dispatch]} />
    </StoreContext.Provider>
  )
}
