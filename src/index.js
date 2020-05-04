import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'

import App from './components/App'
import reducers from './reducers'
import thunk from 'redux-thunk'
import { IntlProvider } from 'react-intl'

import { MuiThemeProvider } from '@material-ui/core/styles'
import Theme from './style/Theme'

// import messagesEs from "./translations/es.json"; // use this to change to spanish
import messagesEn from './translations/en.json'

const logger = createLogger()

ReactDOM.render(
  <Provider store={createStore(reducers, applyMiddleware(thunk, logger))}>
    <MuiThemeProvider theme={Theme}>
      <IntlProvider locale="en" messages={messagesEn}>
        <App/>
      </IntlProvider>
    </MuiThemeProvider>
  </Provider>,
  document.querySelector('#root')
)
