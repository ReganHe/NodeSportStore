/** @jsx React.DOM */
var React = require("react");
var MainHeader = require('../components/mainHeader');
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
