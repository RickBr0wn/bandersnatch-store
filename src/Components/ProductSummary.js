import React from 'react'

const ProductSummary = ({ product }) => {
  return (
    <li key={product.id}>
      <p>{product.id}</p>
      <p>{product.name}</p>
      <p>{product.balance}</p>
    </li>
  )
}

export default ProductSummary
