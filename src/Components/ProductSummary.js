import React from 'react'

const ProductSummary = ({ product }) => {
  return (
    <div>
      <p>{product.name}</p>
      <p>{product.balance}</p>
    </div>
  )
}

export default ProductSummary
