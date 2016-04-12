/** @jsx React.DOM */
var React = require("react");
var Link = require('react-router').Link;
var Sparkline = require('./sparkLine');

var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var formatDate = function (date) {
  return MONTHS[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
};

function integerWithThousandsSeparator(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

var ProductTableRow = React.createClass({
  propTypes: {
   product: React.PropTypes.shape({
      id: React.PropTypes.string.isRequired,
      title: React.PropTypes.string.isRequired,
      publishedDate: React.PropTypes.instanceOf(Date).isRequired,
      modifiedDate: React.PropTypes.instanceOf(Date).isRequired,
      activity: React.PropTypes.array.isRequired
    }).isRequired
  },

  render: function() {
    var product = this.props.product;

    var total = product.activity.reduce(function (memo, n) {
      return memo + n;
    }, 0);

    return (
      <tr>
        <td>
          <Link to='take' surveyId={product.id} className='title'>
            {product.title}
          </Link>
        </td>
        <td className='published'>{formatDate(product.publishedDate)}</td>
        <td className='modified'>{formatDate(product.modifiedDate)}</td>
        <td className='total'>{integerWithThousandsSeparator(total)}</td>
        <td className='activity'>
          <Sparkline points={product.activity} />
        </td>
        <td>
          <Link to='edit' surveyId={product.id} className="btn btn-link btn-editSurvey edit">
            <i className="glyphicon glyphicon-pencil"></i>
          </Link>
        </td>
      </tr>
    );
  }
});

module.exports = ProductTableRow;
