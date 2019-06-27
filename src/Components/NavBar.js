import React from 'react'
import { Link } from 'react-router-dom'
import { HOME, BASKET } from '../Constants/RouteConstants'
import { CheckoutContext } from '../Contexts/CheckoutContext'

export default function NavBar() {
  const { state } = React.useContext(CheckoutContext)
  return (
    <ul>
      <li>
        <Link to={HOME}>Home</Link>
      </li>
      <li>
        <Link to={BASKET}>My Basket: {state.items.length} items</Link>
      </li>
    </ul>
  )
}
