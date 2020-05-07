import React from 'react'
import { connect } from 'react-redux'
import { fetchProducts, fetchHospitalNeeds } from '../../actions'
import { calculateProductQuantity } from '../../selectors/hospitalNeeds'
import ProductCard from './ProductCard'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Loader from '../Loader'

class ProductList extends React.Component {
  componentDidMount () {
    this.props.fetchProducts()
    this.props.fetchHospitalNeeds()
  }

  renderContainer (products, hospitalNeeds) {
    return <Container maxWidth="lg">
      <Grid container spacing={4} >
        {products.map(product => {
          return <ProductCard product={product} key={product.id} quantity={calculateProductQuantity(product.id, hospitalNeeds)}/>
        })}
      </Grid>
    </Container>
  }

  renderList () {
    const {products, hospitalNeeds} = this.props
    if (products && products.length > 0) {
      return this.renderContainer(products, hospitalNeeds)
    } else {
      return <Loader />
    }
  }

  render () {
    return this.renderList()
  }
}

const mapStateToProps = (state) => {
  return {
    products: Object.values(state.products), 
    hospitalNeeds: state.hospitalNeeds 
  }
}

export default connect(mapStateToProps, { fetchProducts, fetchHospitalNeeds })(ProductList)
