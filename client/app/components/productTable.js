import React from 'react';
import ProductTableRow from './productRow';

export default React.createClass({
    propTypes: {
        products: React.PropTypes.array.isRequired
    },

    render () {
        var rows = this.props.products.map(function (product, i) {
            return <ProductTableRow key={i} product={product}/>;
        });

        return (
            <table className="table product-table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
});