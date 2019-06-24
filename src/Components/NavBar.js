import React from 'react'
import { Link } from 'react-router-dom'
import { HOME, ADD_PRODUCT } from '../Constants/RouteConstants'

export default function NavBar() {
  return (
    <ul>
      <li>
        <Link to={HOME}>Home</Link>
      </li>
      <li>
        <Link to={ADD_PRODUCT}>Add New Product</Link>
      </li>
    </ul>
  )
}
