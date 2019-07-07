import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { HOME, BASKET } from '../Constants/RouteConstants'
import { CheckoutContext } from '../Contexts/CheckoutContext'

const StyledNavBar = styled.nav`
  border-bottom: 2px #fff solid;
  background-color: #ddd;
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
    color: #333;
  }

  section: {
    padding: 20px;
  }
`

/**
|--------------------------------------------------
| Michelle: Last #1,399,460,237 ::: Me: Last #1,399,461,427
| Last #1,399,462,231
|--------------------------------------------------
*/

export default function NavBar() {
  const { state } = React.useContext(CheckoutContext)
  return (
    <StyledNavBar>
      <ul>
        <li>
          <Link to={HOME}>TuckerSoft&#8482;</Link>
        </li>
        <li>
          <Link to={BASKET}>My Basket: {state.items.length} items.</Link>
        </li>
      </ul>
    </StyledNavBar>
  )
}
