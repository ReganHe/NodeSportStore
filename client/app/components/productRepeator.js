import React from 'react';
import ProductDetail  from'./productDetail';

export default  React.createClass({
    propTypes: {
        products: React.PropTypes.array.isRequired
    },

    render () {
        var details = this.props.products.map(function (product, i) {
            return <ProductDetail key={i} product={product}/>;
        });

        return (
            <div>{details}</div>
        );
    }
});
