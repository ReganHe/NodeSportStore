
var React = require("react");
var ProductDetail = require('./productDetail');

var ProductRepeater = React.createClass({
    propTypes: {
        products: React.PropTypes.array.isRequired
    },

    render: function () {
        var details = this.props.products.map(function (product, i) {
            return <ProductDetail key={i} product={product}/>;
        });

        return (
            <div className='col-xs-8'>
                {details}
            </div>
        );
    }
});

module.exports = ProductRepeater;
