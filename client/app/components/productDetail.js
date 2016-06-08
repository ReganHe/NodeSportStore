import React from 'react'
import { Link } from 'react-router'

export default  React.createClass({
    propTypes: {
        product: React.PropTypes.shape({
            productId: React.PropTypes.number.isRequired,
            name: React.PropTypes.string.isRequired,
            Description: React.PropTypes.string.isRequired,
            Category: React.PropTypes.string.isRequired,
            Price: React.PropTypes.number.isRequired
        }).isRequired
    },

    render() {
        var product = this.props.product;
        return (
            <div className="well">
                <h3>
                    <strong>{product.name}</strong>
                    <span className="pull-right label label-primary">{product.Price}</span>
                </h3>
                <span className="lead">{product.Description}</span>
            </div>
        );
    }
});
