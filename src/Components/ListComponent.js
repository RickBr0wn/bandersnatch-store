import React from 'react'
import { Link, withRouter, Route } from 'react-router-dom'
import styled from 'styled-components'
import { PRODUCT_PAGE } from '../Constants/RouteConstants'
import ProductDetail from './ProductDetail'
import ProductPage from './ProductPage'
import { StoreContext } from '../Contexts/StoreContext'

const StyledListComponent = styled.div`
  display: grid;
  grid-template-columns: 100px 100px 100px;
`

const ListComponent = ({ match }) => {
  const { state } = React.useContext(StoreContext)
  return (
    <>
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
    </>
  )
}

export default withRouter(ListComponent)
