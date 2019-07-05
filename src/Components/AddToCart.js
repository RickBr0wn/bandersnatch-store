import React from 'react'
import { CheckoutContext } from '../Contexts/CheckoutContext'
import { ADD_ITEM_TO_BASKET } from '../Constants/ActionConstants'
import { Button } from 'semantic-ui-react'

export default function AddToCart({ product }) {
  const { dispatch } = React.useContext(CheckoutContext)
  const newItem = {
    name: product.name,
    price: product.price,
    image: product.image,
    quantity: 1
  }
  return (
    <Button
      color='red'
      onClick={() => dispatch({ type: ADD_ITEM_TO_BASKET, newItem })}>
      {'I want this!'.toUpperCase()}
    </Button>
  )
}
