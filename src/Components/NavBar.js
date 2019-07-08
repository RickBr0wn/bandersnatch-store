import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { HOME, BASKET } from '../Constants/RouteConstants'
import { CheckoutContext } from '../Contexts/CheckoutContext'

const StyledNavBar = styled.nav`
  background-color: #ddd;

  position: fixed;
  width: 100%;
  padding: 20px 0;

  a {
    text-decoration: none;
    color: #333;
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
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link to={HOME}>TuckerSoft&#8482;</Link>
        <Link to={BASKET}>
          My Basket: {state.items.length} items. {'  '}
        </Link>
      </div>
    </StyledNavBar>
  )
}
