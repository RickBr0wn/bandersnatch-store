// TuckerSoft&#8482;
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Components/Home'
import ProductPage from './Components/ProductPage'
import NavBar from './Components/NavBar'
import StoreContextProvider from './Store/StoreContext'
import { HOME, PRODUCT_PAGE } from './Constants/RouteConstants'

function App() {
  return (
    <Router>
      <StoreContextProvider>
        <NavBar />
        <Route exact path={HOME} component={Home} />
        <Route path={`${PRODUCT_PAGE}/:id`} component={ProductPage} />
      </StoreContextProvider>
    </Router>
  )
}

export default App
