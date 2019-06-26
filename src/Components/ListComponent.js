import React from 'react'
import { Link, withRouter, Route } from 'react-router-dom'
import { PRODUCT_PAGE } from '../Constants/RouteConstants'
import ProductSummary from './ProductSummary'
import ProductPage from './ProductPage'
import { StoreContext } from '../Store/StoreContext'

const ListComponent = ({ match }) => {
  const { state, dispatch } = React.useContext(StoreContext)
  return (
    <ul>
      {state.catalogue.map(product => {
        return (
          <>
            <Link to={`${PRODUCT_PAGE}/${product.id}`}>
              <ProductSummary product={product} />
            </Link>

            <Route path={`${match.path}/:id`} component={ProductPage} />
          </>
        )
      })}
    </ul>
  )
}

export default withRouter(ListComponent)
