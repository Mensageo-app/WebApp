import React from "react";
import {connect} from "react-redux";
import {fetchCategories} from "../../actions";
import CategoryCard from "./CategoryCard";

class CategoryList extends React.Component {
    componentDidMount() {
        this.props.fetchCategories();
    }

    renderList() {
        const categories = this.props.categories;
        if (categories && categories.length > 0) {
            return categories.map(category => {
                return <div key={category.id}><CategoryCard category={category}/><br/></div>
            })
        } else {
            return <div>Loading ...</div>
        }
    }


    render() {
        return (<div>
            <div className="ui celled list">{this.renderList()}</div>
        </div>)
    }
}

const mapStateToProps = (state) => {
    return {categories: Object.values(state.categories)}
}

export default connect(mapStateToProps, {fetchCategories})(CategoryList);