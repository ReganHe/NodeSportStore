var EventEmitter = require("event-emitter");
var assign = require('object-assign');
var CHANGE_EVENT = "changeEvent";

var ProductStore = assign({}, EventEmitter.prototype, {
// Survey-specific methods
    listProducts: function () {
        return [
            {
                productId: 123,
                name: 'asd123',
                description: 'Superhero mashup',
                category: 'ad123',
                prize:88.88
            }
        ];
    },

// Basic event handling functions
    emitChange: function () {
        this.emitter.emit(CHANGE_EVENT);
    },

    addChangeListener: function (callback) {
        this.emitter.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
        this.emitter.removeListener(CHANGE_EVENT, callback);
    }
});

// The ProductStore is a singleton, so export only the one instance.
module.exports = ProductStore;
