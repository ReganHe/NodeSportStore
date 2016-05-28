/** @jsx React.DOM */
var React = require("react");
var ProductRepeater = require('../components/ProductRepeater');

var ProductRepeaterController = React.createClass({
    propTypes: {
        products: React.PropTypes.array.isRequired
    },
    render: function () {
        return (
            <ProductRepeater products={this.props.products}/>
        );
    }
});

module.exports = ProductRepeaterController;
