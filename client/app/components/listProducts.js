/** @jsx React.DOM */
var React = require("react");
var Promise = require('es6-promise').Promise;
var AsyncState = require('react-router').AsyncState;

var ProductTable = require('./productTable');

var ListProducts = React.createClass({
  mixins:[AsyncState],

  statics:{
    getInitialAsyncState: function(path, query, setState){
      return new Promise(function(resolve, reject){
        setTimeout(function () {
          setState({
            products:[
              {
                id: 'asd123',
                uri: 'asd123',
                editUri: 'ad123',
                title: 'Superhero mashup',
                publishedDate: new Date(),
                modifiedDate: new Date(),
                activity: [121,32,54,12,546]
              }
            ]
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

module.exports = ListProducts;
