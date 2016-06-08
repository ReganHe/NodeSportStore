import React from 'react';
import ProductRepeator from '../components/productRepeator';
import ProductStore from '../flux/ProductStore'
import CategoryList from '../components/CategoryList';

var Promise = require('es6-promise').Promise;
var AsyncState = require('react-router').AsyncState;
export default React.createClass({
    mixins: [AsyncState],
    statics: {
        getInitialAsyncState (path, query, setState) {
            return new Promise(function (resolve, reject) {
                ProductStore.listProducts(null, function (products) {
                    setState({
                        category: null,
                        products: products
                    })
                    resolve();
                })
            });
        }
    },
    componentDidMount () {
        ProductStore.addChangeListener(this.handleChange);
    },

    componentWillUnmount () {
        ProductStore.removeChangeListener(this.handleChange);
    },

    handleChange () {
        this.setState({
            products: ProductStore.listProducts(this.state.category, function () {
            })
        });
    },

    render () {
        if (!this.state.products) {
            return <div>Loading ... </div>
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
                <div className="col-xs-3">
                    <CategoryList categories={productCategories}/>
                </div>
                <div className='col-xs-8'>
                    <ProductRepeator products={this.state.products}/>
                </div>
            </div>
        );
    }
});