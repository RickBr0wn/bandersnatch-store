import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { StoreContext } from '../Contexts/StoreContext'
import { PRODUCT_PAGE } from '../Constants/RouteConstants'
import AddToCart from '../Components/AddToCart'

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0.9) 100%
    ),
    url(${({ product }) => product.image});
  background-repeat: none;
  background-size: cover;
  height: 100vh;
  text-align: center;
`

const StyledDescription = styled.p`
  max-width: 400px;
`

const StyledImage = styled.img`
  max-width: 400px;
`

const StyledButtonWrapper = styled.div`
  width: 600px;
  display: flex;
  justify-content: space-between;
  font-size: 64px;
  position: absolute;
  top: 40%;
`

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
    <StyledWrapper product={product}>
      <StyledButtonWrapper style={{ display: 'flex' }}>
        <i onClick={() => getPrevProduct()} className='fas fa-chevron-left' />
        <i onClick={() => getNextProduct()} className='fas fa-chevron-right' />
      </StyledButtonWrapper>
      <StyledDescription>{product.description}</StyledDescription>
      <p>£{product.price}</p>
      <AddToCart product={product} />
      <StyledImage src={product.image} alt='the game' />
    </StyledWrapper>
  )
}

export default withRouter(ProductPage)
