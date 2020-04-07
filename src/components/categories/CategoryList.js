import React from "react";
import {connect} from "react-redux";
import {fetchCategories} from "../../actions";

class CategoryList extends React.Component {
    componentDidMount() {
       // this.props.fetchCategories();
    }

    render() {
        return <div>Category is loaded</div>
    }
}

const mapStateToProps = (state) => {
    return {categories: state.categories}
}

export default connect(mapStateToProps, {fetchCategories})(CategoryList);