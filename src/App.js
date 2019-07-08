// TuckerSoft&#8482;
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'
import Home from './Components/Home'
import ProductPage from './Components/ProductPage'
import NavBar from './Components/NavBar'
import BasketPage from './Components/BasketPage'
import StoreContextProvider from './Contexts/StoreContext'
import CheckoutContextProvider from './Contexts/CheckoutContext'
import { HOME, PRODUCT_PAGE, BASKET } from './Constants/RouteConstants'

const AppContainer = styled.div`
  max-width: 1020px;
  margin: 0 auto;
  padding: 100px 50px;
`

function App() {
  return (
    <Router>
      <StoreContextProvider>
        <CheckoutContextProvider>
          <NavBar />
          <AppContainer>
            <Route exact path={HOME} component={Home} />
            <Route path={`${PRODUCT_PAGE}/:id`} component={ProductPage} />
            <Route path={BASKET} component={BasketPage} />
          </AppContainer>
        </CheckoutContextProvider>
      </StoreContextProvider>
    </Router>
  )
}

export default App
