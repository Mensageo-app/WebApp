import React from "react";
import {connect} from "react-redux";
import {fetchCategories} from "../../actions";

class CategoryList extends React.Component {
    componentDidMount() {
       this.props.fetchCategories();
    }

    renderList() {
        const categories = this.props.categories;
        if (categories && categories.length > 0) {
            return categories.map(category => {
                return (
                    <div className="item" key={category.uid}>
                        <i className="large middle aligned icon camera"/>
                        <div className="content">
                            {category.name}
                        </div>
                        <div className="description">
                            {category.amount}
                        </div>
                    </div>
                )
            })
        }else {
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
    return {categories:  Object.values(state.categories)}
}

export default connect(mapStateToProps, {fetchCategories})(CategoryList);