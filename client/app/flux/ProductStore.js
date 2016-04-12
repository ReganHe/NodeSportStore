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

ProductStore.prototype.listProducts = function() {
  return [
    {
      id: 'asd123',
      uri: 'asd123',
      editUri: 'ad123',
      title: 'Superhero mashup',
      publishedDate: new Date(),
      modifiedDate: new Date(),
      activity: [121,32,54,12,546]
    }
  ];
}

// The ProductStore is a singleton, so export only the one instance.
module.exports = new ProductStore();
