import React from 'react'

export default function ProductDetail({ product }) {
  return (
    <li>
      <p>{product.id}</p>
      <p>{product.name}</p>
      <p>{product.balance}</p>
    </li>
  )
}
