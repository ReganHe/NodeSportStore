/** @jsx React.DOM */
var React = require("react");
var ProductRepeater = require('../components/ProductRepeater');

var ProductRepeaterController = React.createClass({
    propTypes: {
        CurrentCategoryId: React.PropTypes.array.isRequired
    },
    render: function () {
        return (
            <ProductRepeater products={this.props.products}/>
        );
    }
});

module.exports = ProductRepeaterController;
