import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
    propTypes: {
        product: React.PropTypes.shape({
            productId: React.PropTypes.number.isRequired,
            name: React.PropTypes.string.isRequired,
            Description: React.PropTypes.string.isRequired,
            Category: React.PropTypes.string.isRequired,
            Price: React.PropTypes.number.isRequired
        }).isRequired
    },

    render () {
        var product = this.props.product;
        return (
            <tr>
                <td className='title'>{product.productId}</td>
                <td className='title'>{product.name}</td>
                <td className='title'>{product.Description}</td>
                <td className='title'>{product.Category}</td>
                <td className='title'>{product.Price}</td>
                <td>
                    <Link to='edit' productId={product.productId} className="btn btn-link btn-editSurvey edit">
                        <i className="glyphicon glyphicon-pencil"></i>
                    </Link>
                </td>
            </tr>
        );
    }
});
