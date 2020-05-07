import React from 'react'
import Header from './Header'
import ProductList from './products/ProductList'
import NeedUpdate from './NeedUpdate'

const Home = () => {
  return (
    <React.Fragment>
      <Header/>
      <NeedUpdate/>
      <ProductList/>
    </React.Fragment>

  )
}

export default Home
