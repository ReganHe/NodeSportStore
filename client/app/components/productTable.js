/** @jsx React.DOM */
var React = require("react");
var ProductTableRow = require('./productRow');

var ProductTable = React.createClass({

  propTypes: {
    products: React.PropTypes.array.isRequired
  },

  render: function () {
    var rows = this.props.products.map(function(product, i) {
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
            <th>Prize</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
});

module.exports = ProductTable;
