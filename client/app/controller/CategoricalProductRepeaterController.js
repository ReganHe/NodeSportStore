/** @jsx React.DOM */
var React = require("react");
var Promise = require('es6-promise').Promise;
var AsyncState = require('react-router').AsyncState;
var ProductRepeaterController = require('./productRepeaterController');
var CategoryList = require('../components/categoryList');
var ProductStore = require('../flux/ProductStore');
var ProductActions = require('../flux/ProductActions');

var CategoricalProductRepeaterController = React.createClass({
    mixins: [AsyncState],
    statics: {
        getInitialAsyncState: function (path, query, setState) {
            return new Promise(function (resolve, reject) {
                ProductStore.listProducts(null, function (products) {
                    setState({
                        category: null,
                        products: products
                    });
                    resolve();
                })
            });
        }
    },
    componentDidMount: function () {
        ProductStore.addChangeListener(this.handleChange);
    },

    componentWillUnmount: function () {
        ProductStore.removeChangeListener(this.handleChange);
    },

    handleChange: function () {
        this.setState({
            products: ProductStore.listProducts2(this.state.category)
        });
    },
    selectCategory: function (event) {
        var currentCategoryId = event.target.childNodes[0].data;
        this.state.category = currentCategoryId;
        ProductActions.selectCategory(currentCategoryId);
    },
    render: function () {
        if (!this.state.products) {
            return (
                <div>Loading ... </div>
            );
        }

        var productCategories = [];
        var keys = {};
        for (var i = 0; i < this.state.products.length; i++) {
            var val = this.state.products[i].Category;
            if (!keys[val]) {
                keys[val] = true;
                productCategories.push(val);
            }
        }

        return (
            <div className="panel panel-default row">
                <CategoryList categories={productCategories} onClick={this.selectCategory}/>
                <ProductRepeaterController products={this.state.products}/>
            </div>
        );
    }
});

module.exports = CategoricalProductRepeaterController;

