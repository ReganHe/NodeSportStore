var EventEmitter = require("event-emitter");
var CHANGE_EVENT = "changeEvent";

var ProductStore = function() {
  this.emitter = new EventEmitter();
};

// Basic event handling functions

ProductStore.prototype.emitChange = function() {
  this.emitter.emit(CHANGE_EVENT);
};

ProductStore.prototype.addChangeListener = function(callback) {
    this.emitter.on(CHANGE_EVENT, callback);
};

ProductStore.prototype.removeChangeListener = function(callback) {
  this.emitter.removeListener(CHANGE_EVENT, callback);
};



// Survey-specific methods
ProductStore.prototype.saveSurvey = function(survey) {
  console.debug("TODO: fire XHR to persist survey, then invoke this.emitChange() after the XHR has completed.");

  this.emitChange();
}

ProductStore.prototype.deleteSurvey = function(id) {
  console.debug("TODO: delete survey", id);

  this.emitChange();
}

ProductStore.prototype.recordProduct = function(results) {
  console.debug("TODO: record the survey results", results);

  this.emitChange();
}

ProductStore.prototype.listProducts = function(callback) {
  console.debug("TODO: fetch products from server via XHR");

  callback([]);
}

// The ProductStore is a singleton, so export only the one instance.
module.exports = new ProductStore();
