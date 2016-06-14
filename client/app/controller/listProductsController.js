var React = require("react");
var Promise = require('es6-promise').Promise;
var AsyncState = require('react-router').AsyncState;
var ProductRepeator = require('../components/productRepeator');
var ProductStore = require('../flux/ProductStore')
var CategoryList = require('../components/CategoryList');

export default React.createClass({
    //mixins: [AsyncState],
    //statics: {
    //    getInitialAsyncState (path, query, setState) {
    //        return new Promise(function (resolve, reject) {
    //            ProductStore.listProducts(null, function (products) {
    //                setState({
    //                    category: null,
    //                    products: products
    //                })
    //                resolve();
    //            })
    //        });
    //    }
    //},
    getInitialState(){
        return {
            category: null,
            products: ProductStore.initProducts()
        };
    },
    componentDidMount () {
        ProductStore.addChangeListener(this.handleChange);
    },

    componentWillUnmount () {
        ProductStore.removeChangeListener(this.handleChange);
    },

    handleChange () {
        ProductStore.listProducts(this.state.category, function (products) {
            this.setState({
                category: this.state.category,
                products: products
            });
        });
    },

    render () {
        if (!this.state || !this.state.products) {
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