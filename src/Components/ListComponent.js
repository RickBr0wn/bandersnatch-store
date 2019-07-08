import React from 'react'
import { Link, withRouter, Route } from 'react-router-dom'
import styled from 'styled-components'
import { PRODUCT_PAGE } from '../Constants/RouteConstants'
import ProductDetail from './ProductDetail'
import ProductPage from './ProductPage'
import { StoreContext } from '../Contexts/StoreContext'

const StyledListComponent = styled.div`
  display: flex;
  justify-content: center;
`

const StyledGridComponent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media only screen and (max-width: 1050px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 590px) {
    grid-template-columns: 1fr;
  }
`

const ListComponent = ({ match }) => {
  const { state } = React.useContext(StoreContext)
  return (
    <StyledGridComponent>
      {state.catalogue.map((product, index) => {
        return (
          <StyledListComponent key={product.id}>
            <Link to={`${PRODUCT_PAGE}/${product.id}`}>
              <ProductDetail product={product} index={index} />
            </Link>
            <Route path={`${match.path}/:id`} component={ProductPage} />
          </StyledListComponent>
        )
      })}
    </StyledGridComponent>
  )
}

export default withRouter(ListComponent)
