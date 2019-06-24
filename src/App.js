// TuckerSoft&#8482;
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Home, ProductPage, NavBar, Topics, AddProduct } from './Components'
import {
  HOME,
  PRODUCT_PAGE,
  TOPICS,
  ADD_PRODUCT
} from './Constants/RouteConstants'

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path={HOME} component={Home} />
        <Route path={`${PRODUCT_PAGE}/:id`} component={ProductPage} />
        <Route path={TOPICS} component={Topics} />
        <Route path={ADD_PRODUCT} component={AddProduct} />
      </div>
    </Router>
  )
}

export default App
