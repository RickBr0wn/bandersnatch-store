import React from 'react'
import { Link } from 'react-router-dom'
import { HOME, PRODUCT_PAGE, TOPICS } from '../Constants/RouteConstants'

export default function NavBar() {
  return (
    <ul>
      <li>
        <Link to={HOME}>Home</Link>
      </li>
      <li>
        <Link to={PRODUCT_PAGE}>ProductPage</Link>
      </li>
      <li>
        <Link to={TOPICS}>Topics</Link>
      </li>
    </ul>
  )
}
