import React from 'react'
import { withRouter } from 'react-router-dom'
import { StoreContext } from '../Store/StoreContext'
import { PRODUCT_PAGE } from '../Constants/RouteConstants'

export function ProductPage({ match, history }) {
  const { state } = React.useContext(StoreContext)
  const { catalogue } = state
  const product = catalogue.filter(item => item.id === match.params.id)[0]

  const currentIndex = catalogue.findIndex(item => item.id === match.params.id)

  const getNextProduct = () => {
    const newIndex = () => {
      if (currentIndex === catalogue.length - 1) {
        return 0
      }
      return currentIndex + 1
    }
    history.push(`${PRODUCT_PAGE}/${catalogue[newIndex()].id}`)
  }

  const getPrevProduct = () => {
    const newIndex = () => {
      if (currentIndex === 0) {
        return catalogue.length - 1
      }
      return currentIndex - 1
    }
    history.push(`${PRODUCT_PAGE}/${catalogue[newIndex()].id}`)
  }

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <i onClick={() => getPrevProduct()} className='fas fa-chevron-left' />
        <h1>product Page</h1>
        <i onClick={() => getNextProduct()} className='fas fa-chevron-right' />
      </div>
      <p>{currentIndex}</p>
      <p>{product.id}</p>
      <p>{product.name}</p>
      <p>£{product.price}</p>
      <img src={product.image} alt='the game' />
      <p>{product.description}</p>
    </div>
  )
}

export default withRouter(ProductPage)
