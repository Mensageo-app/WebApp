import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Footer from './Footer'
import Header from './Header'
import CategoryList from './categories/CategoryList'
import BrandToolBar from './BrandToolBar'
import NeedUpdate from './NeedUpdate'

const Home = () => {
  return (
    <React.Fragment>
      <CssBaseline/>
      <BrandToolBar/>
      <main>
        <Header/>
        <NeedUpdate/>
        <CategoryList/>
      </main>
      <Footer/>
    </React.Fragment>
  )
}

export default Home
