/** @jsx React.DOM */
var React = require("react");
var CategoryList = require('../components/categoryList');

var CategoryListController = React.createClass({
    propTypes: {
        categories: React.PropTypes.array.isRequired
    },

    render: function () {
        return (
            <CategoryList categories={this.props.categories}/>
        );
    }
});

module.exports = CategoryListController;
