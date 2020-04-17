import React from 'react'
import Header from './Header'
import CategoryList from './categories/CategoryList'
import NeedUpdate from './NeedUpdate'

const Home = () => {
  return (
    <React.Fragment>
      <Header/>
      <NeedUpdate/>
      <CategoryList/>
    </React.Fragment>

  )
}

export default Home
