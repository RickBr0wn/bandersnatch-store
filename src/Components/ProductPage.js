import React from 'react'
import { withStore } from '../Store/withStore'

export function _ProductPage({ store, match }) {
  const id = match.params.id
  const [state] = store

  const productToBeDisplayed = state.catalogue.filter(
    item => item._id === id
  )[0]

  return (
    <div>
      <h1>Product Page</h1>
      <p>{productToBeDisplayed.name}</p>
      <p>{productToBeDisplayed.email}</p>
      <p>{productToBeDisplayed.company}</p>
      <p>{productToBeDisplayed.age}</p>
      <p>{productToBeDisplayed.address}</p>
      <p>{productToBeDisplayed.about}</p>
      <p>{productToBeDisplayed.greeting}</p>
      <img src={productToBeDisplayed.picture} alt='a face' />
      <p>{productToBeDisplayed.registered}</p>
      <p>{productToBeDisplayed.latitude}</p>
      <p>{productToBeDisplayed.longitude}</p>
    </div>
  )
}

const ProductPage = withStore(_ProductPage)

export default ProductPage
