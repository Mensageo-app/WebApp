import React from 'react'
import { connect } from 'react-redux'
import { fetchProduct } from '../../actions'
import Loader from '../Loader'
import Product from './ProductDetails'
import HospitalList from './HospitalList'

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
        <Product product={product}/>
        <HospitalList productId={this.props.match.params.id}/>
      </React.Fragment>
    )
  }
};
const mapStateToProps = (state, ownProps) => {
  return { product: state.products[ownProps.match.params.id] }
}
export default connect(mapStateToProps, { fetchProduct })(ProductShow)
