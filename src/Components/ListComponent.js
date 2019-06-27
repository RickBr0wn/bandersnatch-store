import React from 'react'
import { Link, withRouter, Route } from 'react-router-dom'
import { PRODUCT_PAGE } from '../Constants/RouteConstants'
import ProductDetail from './ProductDetail'
import ProductPage from './ProductPage'
import { StoreContext } from '../Store/StoreContext'

const ListComponent = ({ match }) => {
  const { state } = React.useContext(StoreContext)
  return (
    <>
      {state.catalogue.map((product, index) => {
        return (
          <div key={product.id}>
            <Link to={`${PRODUCT_PAGE}/${product.id}`}>
              <ProductDetail product={product} index={index} />
            </Link>
            <Route path={`${match.path}/:id`} component={ProductPage} />
          </div>
        )
      })}
    </>
  )
}

export default withRouter(ListComponent)
