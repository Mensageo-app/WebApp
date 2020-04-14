import React from 'react'
import Home from './Home'
import history from '../history'

import { Router, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <div className="ui container">
        <Router history={history}>
          <div>
            <Switch>
              <Route path="/" exact component={Home}/>
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  )
}

export default App
