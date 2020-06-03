import React from 'react'
import Home from './home/Home'
import history from '../history'

import { HashRouter, Switch, Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import BrandToolBar from './BrandToolBar'
import Footer from './Footer'
import ProductShow from './productDetails/ProductShow'
import AboutUs from './info/AboutUs'
import FeedBack from './info/Feedback'
import JoinUs from './info/JoinUs'

const App = () => {
  return (
    <div>
      <div className="ui container">
        <React.Fragment>
          <CssBaseline />
          <BrandToolBar />
          <main>
            <HashRouter basename='/'>
              <div>
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/products/:id" exact component={ProductShow} />
                  <Route path="/aboutus" exact component={AboutUs} />
                  <Route path="/feedback" exact component={FeedBack} />
                  <Route path="/joinus" exact component={JoinUs} />
                </Switch>
              </div>
            </HashRouter>
          </main>
          <Footer />
        </React.Fragment>
      </div>
    </div>
  )
}

export default App
