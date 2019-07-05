import React from 'react'
import { withRouter } from 'react-router-dom'
import { StoreContext } from '../Contexts/StoreContext'
import { PRODUCT_PAGE } from '../Constants/RouteConstants'
import AddToCart from '../Components/AddToCart'
import { Container, Card, Image } from 'semantic-ui-react'

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
    <div className='ui one column stackable center aligned page grid'>
      <div className='column twelve wide'>
        <Container text>
          <div style={{ marginTop: '2em' }}>
            <i
              onClick={() => getPrevProduct()}
              className='fas fa-chevron-left'
              style={{
                position: 'relative',
                right: '135px',
                top: '58px',
                fontSize: '24px'
              }}
            />
            <h1>{product.name.toUpperCase()}</h1>
            <i
              onClick={() => getNextProduct()}
              className='fas fa-chevron-right'
              style={{
                position: 'relative',
                left: '135px',
                bottom: '44px',
                fontSize: '24px'
              }}
            />
          </div>
          <AddToCart product={product} />
          <Card centered style={{ padding: '20px' }}>
            <Image circular src={product.image} centered alt='the game' />
            <Card.Content>
              <Card.Header>{product.name}</Card.Header>
            </Card.Content>
            <p>£{product.price}</p>
            <p>{product.description}</p>
          </Card>

          {/* <AddToCart product={product} /> */}
        </Container>
      </div>
    </div>

    // <div>
    //   <Container text style={{ marginTop: '7em' }}>
    //     <div style={{ display: 'flex' }}>
    //       <i onClick={() => getPrevProduct()} className='fas fa-chevron-left' />
    //       <h1>product Page</h1>
    //       <i
    //         onClick={() => getNextProduct()}
    //         className='fas fa-chevron-right'
    //       />
    //     </div>
    //     <Card centered>
    //       <Image circular src={product.image} centered alt='the game' />
    //       <Card.Content>
    //         <Card.Header>{product.name}</Card.Header>
    //       </Card.Content>
    //       <p>{product.name}</p>
    //       <p>£{product.price}</p>
    //       <p>{product.description}</p>
    //     </Card>
    //     <AddToCart product={product} />
    //   </Container>
    // </div>
  )
}

export default withRouter(ProductPage)
