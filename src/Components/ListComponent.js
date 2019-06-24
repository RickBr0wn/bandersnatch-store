import React from 'react'
import { Link, withRouter, Route } from 'react-router-dom'
import { PRODUCT_PAGE } from '../Constants/RouteConstants'
import ProductSummary from './ProductSummary'
import ProductPage from './ProductPage'
import { withStore } from '../Store/withStore'
import { compose } from 'recompose'

const _ListComponent = ({ store, match }) => {
  const [state] = store
  return (
    <ul>
      {state.catalogue.map(product => {
        return (
          <div key={product._id}>
            <Link to={`${PRODUCT_PAGE}/${product._id}`}>
              <ProductSummary product={product} />
            </Link>
            <Route path={`${match.path}/:id`} component={ProductPage} />
          </div>
        )
      })}
    </ul>
  )
}

const ListComponent = compose(
  withRouter,
  withStore
)(_ListComponent)

export default ListComponent
