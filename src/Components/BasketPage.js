import React from 'react'
import { withRouter } from 'react-router-dom'
import { CheckoutContext } from '../Contexts/CheckoutContext'
import { HOME } from '../Constants/RouteConstants'

const BasketPage = ({ history }) => {
  const { state } = React.useContext(CheckoutContext)
  const { items } = state

  return (
    <div>
      <h1>Your Basket</h1>
      <p>Your basket contains {items.length} items</p>
      <h3>Your order:</h3>
      {items &&
        items.map(item => (
          <div>
            <img src={item.image} alt={item.name} style={{ height: '150px' }} />
            <p>{item.quantity}</p>
            <p>{item.price}</p>
          </div>
        ))}
      <button onClick={() => history.push(HOME)}>
        {items.length === 0 ? 'START' : 'CONTINUE'} SHOPPING
      </button>
      <button
        onClick={() => {
          alert('Incomplete feature!')
        }}>
        GO TO PAYMENT
      </button>
    </div>
  )
}

export default withRouter(BasketPage)
