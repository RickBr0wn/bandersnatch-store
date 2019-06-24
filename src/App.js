// TuckerSoft&#8482;
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Home, ProductPage, NavBar, Topics } from './Components'
import { HOME, PRODUCT_PAGE, TOPICS } from './Constants/RouteConstants'

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path={HOME} component={Home} />
        <Route path={`${PRODUCT_PAGE}/:id`} component={ProductPage} />
        <Route path={TOPICS} component={Topics} />
      </div>
    </Router>
  )
}

export default App
