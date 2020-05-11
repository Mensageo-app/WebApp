import React from 'react'
import Header from '../header/Header'
import ProductList from './ProductList'
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
