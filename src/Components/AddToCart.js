import React from 'react'
import styled from 'styled-components'
import { CheckoutContext } from '../Contexts/CheckoutContext'
import { ADD_ITEM_TO_BASKET } from '../Constants/ActionConstants'

const StyledButton = styled.button`
  margin: 10px 0 20px 0;
  background: yellow;
  border: none;
  padding: 20px;
  font-size: 24px;
`

export default function AddToCart({ product }) {
  const { dispatch } = React.useContext(CheckoutContext)
  const newItem = {
    name: product.name,
    price: product.price,
    image: product.image,
    quantity: 1
  }
  return (
    <StyledButton
      onClick={() => dispatch({ type: ADD_ITEM_TO_BASKET, newItem })}>
      BUY NOW
    </StyledButton>
  )
}
