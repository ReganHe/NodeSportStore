/** @jsx React.DOM */
var React = require("react");
var MainHeader = require('./main_header');
var ProductStore = require("../flux/ProductStore");
var Dispatcher = require("../flux/Dispatcher");
var ProductConstants = require("../flux/ProductConstants");

// Wire up the ProductStore with the action dispatcher
Dispatcher.register(function(payload) {
  switch(payload.actionType) {

    case ProductConstants.RECORD_PRODUCT:
      ProductStore.recordProduct(payload.results);
      break;
  }
});

var App = React.createClass({
  handleChange: function() {
    ProductStore.listProducts(function(products) {
      console.debug("TODO: update app state based on products returned by ProductStore.listProducts (once it actually returns some)");
    });
  },

  componentDidMount: function() {
    ProductStore.addChangeListener(this.handleChange);
  },

  componentWillUnmount: function() {
    ProductStore.removeChangeListener(this.handleChange);
  },

  render: function () {
    return (
      <div className='app'>
        <MainHeader/>
        <div className='main-content container'>
          {<this.props.activeRouteHandler />}
        </div>
      </div>
    );
  }
});

module.exports = App;
