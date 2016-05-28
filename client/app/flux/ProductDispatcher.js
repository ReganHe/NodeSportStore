var Dispatcher = require('flux').Dispatcher;
var ProductDispatcher = new Dispatcher();
var ProductStore = require('./ProductStore');
var ProductConstants = require("./ProductConstants");

ProductDispatcher.register(function (action) {
  switch(action.actionType) {
    case ProductConstants.SELECT_CATEGORY:
      ProductStore.emitChange();
      break;
    default:
    // no op
  }
})

module.exports = ProductDispatcher;
