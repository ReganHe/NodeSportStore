import Flux from 'flux'
import {ProductStore} from './ProductStore';
import {ProductConstants} from './ProductConstants';

var ProductDispatcher = new Flux.Dispatcher();
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
