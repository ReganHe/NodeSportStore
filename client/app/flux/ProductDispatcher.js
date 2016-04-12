var Dispatcher = require('flux').Dispatcher;
var ProductDispatcher = new Dispatcher();
var ProductStore = require('./ProductStore');
var ProductConstants = require("./ProductConstants");

ProductDispatcher.register(function (action) {
  switch(action.actionType) {
    case ProductConstants.RECORD_PRODUCT:
      //ProductStore.addNewItemHandler(action.text);
      ProductStore.emitChange();
      break;
    default:
    // no op
  }
})

module.exports = ProductDispatcher;
