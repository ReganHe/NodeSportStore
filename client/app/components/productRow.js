/** @jsx React.DOM */
var React = require("react");
var Link = require('react-router').Link;

var ProductTableRow = React.createClass({
    propTypes: {
        product: React.PropTypes.shape({
            productId: React.PropTypes.number.isRequired,
            name: React.PropTypes.string.isRequired,
            description: React.PropTypes.string.isRequired,
            category: React.PropTypes.string.isRequired,
            prize: React.PropTypes.number.isRequired
        }).isRequired
    },

    render: function () {
        var product = this.props.product;
        return (
            <tr>
                <td className='title'>{product.productId}</td>
                <td className='title'>{product.name}</td>
                <td className='title'>{product.description}</td>
                <td className='title'>{product.category}</td>
                <td className='title'>{product.prize}</td>
                <td>
                    <Link to='edit' productId={product.productId} className="btn btn-link btn-editSurvey edit">
                        <i className="glyphicon glyphicon-pencil"></i>
                    </Link>
                </td>
            </tr>
        );
    }
});

module.exports = ProductTableRow;
