import React from 'react'
import { CheckoutContext } from '../Contexts/CheckoutContext'
import { ADD_ITEM_TO_BASKET } from '../Constants/ActionConstants'

export default function AddToCart({ product }) {
  const { dispatch } = React.useContext(CheckoutContext)
  const newItem = {
    name: product.name,
    price: product.price,
    image: product.image,
    quantity: 1
  }
  return (
    <button onClick={() => dispatch({ type: ADD_ITEM_TO_BASKET, newItem })}>
      BUY NOW
    </button>
  )
}
