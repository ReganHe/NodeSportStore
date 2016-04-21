/** @jsx React.DOM */
var React = require("react");
var ProductDetail = require('./productDetail');

var ProductRepeator = React.createClass({
    propTypes: {
        products: React.PropTypes.array.isRequired
    },

    render: function () {
        var details = this.props.products.map(function (product, i) {
            return <ProductDetail key={i} product={product}/>;
        });
        
        return (
            <div>{details}</div>
        );
    }
});

module.exports = ProductRepeator;
