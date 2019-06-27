import React from 'react'
import {
  GET_ALL_PRODUCTS,
  ADD_NEW_PRODUCT,
  DISPLAY_NEXT_IN_CATALOGUE
} from '../Constants/ActionConstants'
import BANDERSNATCH from '../Images/bandersnatch.gif'
import NOHZDYVE from '../Images/nohzdyve.gif'
import METLHEDD from '../Images/metlhedd.gif'
import ROACHBUSTERS from '../Images/roachbusters.gif'

export const StoreContext = React.createContext()

const initialState = {
  catalogue: [
    {
      id: '61dae8f-32d8-fbcc-04f6-b747a2c8e',
      name: 'BANDERSNATCH',
      price: 0,
      image: BANDERSNATCH,
      description:
        'A morbid turn of events would lead to the company shuttering its doors before the anticipated release of Bandersnatch, an ambitious title in development by the now infamous Stefan Butler.'
    },
    {
      id: 'df28317-0c8-ef6-7153-e731f33ced5f',
      name: 'Nohzdyve',
      price: 19.99,
      image: NOHZDYVE,
      description: `You're falling fast through the sky! Collect eyeballs and avoid the buildings and other hazards. Perfection is key. This was truly a five star game by none other than Colin Ritman.`
    },
    {
      id: 'df25387-ab8-ef6-7153-e956f33cfc2',
      name: 'Metl Hedd',
      price: 19.99,
      image: METLHEDD,
      description: `Metl Hedd was another smash hit by Colin Ritman, released for the ZX Spectrum 48K. It was a most impressive title. Challenging, and with quite a big learning curve, so you die a lot and have to try again. Can you escape from the deadly dogs? You must make your way through this monochrome world. Watch out for the mechanical dogs - if they catch up with you, you're in real trouble! Do you control your destiny, or do the chrome dogs call the shots? `
    },
    {
      id: '52bae8f-3e5e-fbcc-04f6-b747a4d5a',
      name: 'Roachbusters',
      price: 0,
      image: ROACHBUSTERS,
      description:
        'You are responsible for the wellbeing of mankind. You must protect everyone. Kill the Roaches and collect the stars.'
    }
  ]
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

const reducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return state
    case ADD_NEW_PRODUCT:
      return Object.assign({}, state, state.catalogue.push(action.product))
    case DISPLAY_NEXT_IN_CATALOGUE:
      const id = action.id
      return state
    default:
      throw new Error('Please use a valid action with a type property.')
  }
}

export default function StoreContextProvider({ children }) {
  const [state, dispatch] = useReducerWithLogger(reducer, initialState)
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  )
}
