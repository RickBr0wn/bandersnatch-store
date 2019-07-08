import React from 'react'
import styled from 'styled-components'

const StyledImage = styled.img`
  height: 300px;
`

export default function ProductDetail({ product }) {
  return <StyledImage src={product.image} alt='game' />
}
