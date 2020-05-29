import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { IntlProvider } from 'react-intl'
const mockStore = configureStore([])

jest.mock('./home/ProductList', () => () => 'ProductList')

it('renders without errors', () => {
  const store = mockStore({})
  const div = document.createElement('div')
  ReactDOM.render(<Provider store={store}><IntlProvider locale='en'><App /></IntlProvider></Provider>, div)
})
