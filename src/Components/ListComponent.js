import React from 'react'
import { Link, withRouter, Route } from 'react-router-dom'
import { PRODUCT_PAGE } from '../Constants/RouteConstants'
import ProductDetail from './ProductDetail'
import ProductPage from './ProductPage'
import { StoreContext } from '../Contexts/StoreContext'
import { Container, Header, Divider } from 'semantic-ui-react'

const ListComponent = ({ match }) => {
  const { state } = React.useContext(StoreContext)
  return (
    <>
      <Container text textAlign='center' style={{ marginTop: '7em' }}>
        <Header as='h1'>TuckerSoft&#8482; catalogue</Header>
        <Divider />
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
      </Container>
    </>
  )
}

export default withRouter(ListComponent)
