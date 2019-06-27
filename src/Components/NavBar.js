import React from 'react'
import { Link } from 'react-router-dom'
import { HOME } from '../Constants/RouteConstants'

export default function NavBar() {
  return (
    <ul>
      <li>
        <Link to={HOME}>Home</Link>
      </li>
    </ul>
  )
}
