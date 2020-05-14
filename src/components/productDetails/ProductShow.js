import React from 'react'
import { connect } from 'react-redux'
import { fetchProduct } from '../../actions'
import Loader from '../Loader'
import Product from './ProductDetails'
import HospitalList from './HospitalList'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'

class ProductShow extends React.Component {
  componentDidMount () {
    this.props.fetchProduct(this.props.match.params.id)
  }

  render () {
    const { product } = this.props

    if (!product) {
      return <Loader />
    }

    return (
      <React.Fragment>
        <Grid container spacing={2}>
          <Grid item md={2} implementation="css" mdDown component={Hidden} />
          <Grid container sm={8} md={8} lg={8} xl={8}>
            <Product product={product}/>
            <HospitalList product={product}/>
          </Grid>
          <Grid item md={2} implementation="css" mdDown component={Hidden} />
        </Grid>
      </React.Fragment>
    )
  }
};
const mapStateToProps = (state, ownProps) => {
  return { product: state.products[ownProps.match.params.id] }
}
export default connect(mapStateToProps, { fetchProduct })(ProductShow)
