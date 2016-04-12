/** @jsx React.DOM */
var React = require("react");
var Promise = require('es6-promise').Promise;
var AsyncState = require('react-router').AsyncState;
var ProductTable = require('../components/productTable');
var ProductStore=require('../flux/ProductStore')

var ListProductsController = React.createClass({
    mixins:[AsyncState],
    statics:{
        getInitialAsyncState: function(path, query, setState){
            return new Promise(function(resolve, reject){
                setTimeout(function () {
                    setState({
                        products:ProductStore.listProducts()
                    })
                    resolve();
                }, 100);
            });
        }
    },

    render: function(){
        if(!this.state.products){
            return <div>Loading ... </div>
        }

        return (
            <div className='list-surveys'>
                <h1>Active Products</h1>
                <ProductTable products={this.state.products}/>
            </div>
        );
    }
});

module.exports = ListProductsController;
