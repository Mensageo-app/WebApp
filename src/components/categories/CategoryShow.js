import React from 'react'
import { connect } from 'react-redux'
import { fetchCategory } from '../../actions'
import Loader from '../Loader'
import Product from '../Product'

class CategoryShow extends React.Component {
  componentDidMount () {
    this.props.fetchCategory(this.props.match.params.id)
  }

  render () {
    if (!this.props.category) {
      return <Loader />
    }

    return (
      <Product/>
    )
  }
};
const mapStateToProps = (state, ownProps) => {
  return { category: state.categories[ownProps.match.params.id] }
}
export default connect(mapStateToProps, { fetchCategory })(CategoryShow)
