import React from 'react'
import { connect } from 'react-redux'
import { fetchCategory } from '../../actions'
import Loader from '../Loader'
import Product from '../product/ProductDetails'
import HospitalList from '../product/HospitalList'

class CategoryShow extends React.Component {
  componentDidMount () {
    this.props.fetchCategory(this.props.match.params.id)
  }

  render () {
    if (!this.props.category) {
      return <Loader />
    }

    return (
      <React.Fragment>
        <Product/>
        <HospitalList/>
      </React.Fragment>

    )
  }
};
const mapStateToProps = (state, ownProps) => {
  return { category: state.categories[ownProps.match.params.id] }
}
export default connect(mapStateToProps, { fetchCategory })(CategoryShow)
