import React from 'react'
import { withStore } from '../Store/withStore'

export function _ProductPage({ store, match }) {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const id = match.params.id
  const [state] = store
  const catalogue = state.catalogue
  const initialProductToBeDisplayed = catalogue.filter(
    item => item._id === id
  )[0]
  const [productToBeDisplayed, setProductToBeDisplayed] = React.useState(
    initialProductToBeDisplayed
  )

  const next = id => {
    catalogue.map((item, index) => {
      if (item._id === id) {
        setCurrentIndex(index + 1)
      }
      return index
    })
    console.log(catalogue[currentIndex + 2])
    if (catalogue[currentIndex + 2] === undefined) {
      setCurrentIndex(0)
      setProductToBeDisplayed(catalogue[currentIndex + 1])
    } else {
      setProductToBeDisplayed(catalogue[currentIndex + 1])
    }
  }

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <h1>Product Page</h1>
        <i
          onClick={() => next(productToBeDisplayed._id)}
          className='fas fa-chevron-right'
        />
      </div>
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
