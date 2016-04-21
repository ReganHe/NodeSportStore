/** @jsx React.DOM */
var React = require("react");
var Promise = require('es6-promise').Promise;
var AsyncState = require('react-router').AsyncState;
var ProductRepeator = require('../components/productRepeator');
var ProductStore = require('../flux/ProductStore')

var ListProductsController = React.createClass({
    mixins: [AsyncState],
    statics: {
        getInitialAsyncState: function (path, query, setState) {
            return new Promise(function (resolve, reject) {
                ProductStore.listProducts(function (products) {
                    setState({
                        products: products
                    })
                    resolve();
                })
            });
        }
    },
    //getInitialState: function (s) {
    //    ProductStore.listProducts(function (products) {
    //        return {
    //            products: products
    //        }
    //    })
    //    //return {
    //    //    products: ProductStore.listProducts()
    //    //}
    //},
    componentDidMount: function () {
        ProductStore.addChangeListener(this.handleChange);
    },

    componentWillUnmount: function () {
        ProductStore.removeChangeListener(this.handleChange);
    },

    handleChange: function () {
        this.setState({
            products: ProductStore.listProducts()
        });
    },

    render: function () {
        if (!this.state.products) {
            return <div>Loading ... </div>
        }

        return (
            <ProductRepeator products={this.state.products}/>
        );
    }
});

module.exports = ListProductsController;
