import React from 'react'
import StoreContext from './StoreContext'
import { GET_ALL_PRODUCTS, ADD_NEW_PRODUCT } from '../Constants/ActionConstants'
import BANDERSNATCH from '../Images/bandersnatch.gif'
import NOHZDYVE from '../Images/nohzdyve.gif'

const initialState = {
  catalogue: [
    {
      name: 'BANDERSNATCH',
      price: 0,
      image: BANDERSNATCH,
      description:
        'A morbid turn of events would lead to the company shuttering its doors before the anticipated release of Bandersnatch, an ambitious title in development by the now infamous Stefan Butler.'
    },
    {
      name: 'Nohzdyve',
      price: 19.99,
      image: NOHZDYVE,
      description: `You're falling fast through the sky! Collect eyeballs and avoid the buildings and other hazards. Perfection is key. This was truly a five star game by none other than Colin Ritman.`
    }
  ]
}

const reducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return state
    case ADD_NEW_PRODUCT:
      return Object.assign({}, state, state.catalogue.push(action.product))
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
