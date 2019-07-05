// TuckerSoft&#8482;
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Components/Home'
import ProductPage from './Components/ProductPage'
import NavBar from './Components/NavBar'
import BasketPage from './Components/BasketPage'
import StoreContextProvider from './Contexts/StoreContext'
import CheckoutContextProvider from './Contexts/CheckoutContext'
import { HOME, PRODUCT_PAGE, BASKET } from './Constants/RouteConstants'

function App() {
  return (
    <Router>
      <StoreContextProvider>
        <CheckoutContextProvider>
          <NavBar>
            <Route exact path={HOME} component={Home} />
            <Route path={`${PRODUCT_PAGE}/:id`} component={ProductPage} />
            <Route path={BASKET} component={BasketPage} />
          </NavBar>
        </CheckoutContextProvider>
      </StoreContextProvider>
    </Router>
  )
}

export default App
