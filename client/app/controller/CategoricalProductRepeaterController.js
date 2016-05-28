/** @jsx React.DOM */
var React = require("react");
var Promise = require('es6-promise').Promise;
var AsyncState = require('react-router').AsyncState;
var ProductRepeaterController = require('./productRepeaterController');
var CategoryListController = require('./categoryListController');
var ProductStore = require('../flux/ProductStore')

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
            products: ProductStore.listProducts(this.state.category, function () {
            })
        });
    },

    render: function () {
/*        if (!this.state.products) {
            return (
                <div>Loading ... </div>
            );
        }*/

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
            <div>
                <ProductRepeaterController products={this.state.products}/>
                <CategoryListController categories={this.state.categories}/>
            </div>
        );
    }
});

module.exports = CategoricalProductRepeaterController;

