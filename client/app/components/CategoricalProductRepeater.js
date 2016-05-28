/**
 * Created by heoo442 on 2016/5/28.
 */
/** @jsx React.DOM */
var React = require("react");
var ProductRepeater = require('productRepeater');
var CategoryList = require('categoryList');

var CategoricalProductRepeater = React.createClass({
    propTypes: {
        categories: React.PropTypes.array.isRequired,
        products:React.PropTypes.array.isRequired
    },

    render: function () {
        return (
            <div className="panel panel-default row">
                <div className="col-xs-3">
                    <CategoryList categories={this.props.categories}/>
                </div>
                <div className='col-xs-8'>
                    <ProductRepeater products={this.props.products}/>
                </div>
            </div>
        );
    }
});

module.exports = CategoricalProductRepeater;

