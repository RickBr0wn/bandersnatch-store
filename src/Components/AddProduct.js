import React from 'react'
import {
  NEW_NAME,
  NEW_PRICE,
  NEW_IMAGE,
  NEW_DESC,
  ADD_NEW_PRODUCT
} from '../Constants/ActionConstants'
import { withStore } from '../Store/withStore'
import uuid from 'react-uuid'

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

const initialState = {
  name: '',
  price: '£' + 0,
  imageURL: '',
  description: '',
  _id: uuid()
}

const reducer = (state, action) => {
  switch (action.type) {
    case NEW_NAME:
      return Object.assign({}, state, { name: action.name })
    case NEW_PRICE:
      return Object.assign({}, state, { price: action.price })
    case NEW_IMAGE:
      return Object.assign({}, state, { imageURL: action.imageURL })
    case NEW_DESC:
      return Object.assign({}, state, { description: action.description })
    default:
      return state
  }
}

const _AddProduct = ({ store }) => {
  const [formState, formDispatch] = useReducerWithLogger(reducer, initialState)
  const [storeState, storeDispatch] = store
  return (
    <div>
      <input
        type='text'
        placeholder='name'
        onChange={e => formDispatch({ type: NEW_NAME, name: e.target.value })}
      />
      <input
        type='text'
        placeholder='price'
        onChange={e => formDispatch({ type: NEW_PRICE, price: e.target.value })}
      />
      <input
        type='text'
        placeholder='image-url'
        onChange={e =>
          formDispatch({ type: NEW_IMAGE, imageURL: e.target.value })
        }
      />
      <input
        type='text'
        placeholder='description'
        onChange={e =>
          formDispatch({ type: NEW_DESC, description: e.target.value })
        }
      />
      <button
        onClick={() => {
          storeDispatch({ type: ADD_NEW_PRODUCT, product: formState })
        }}>
        SEND
      </button>
    </div>
  )
}

const AddProduct = withStore(_AddProduct)

export default AddProduct
