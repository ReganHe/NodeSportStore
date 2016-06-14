var EventEmitter = require("event-emitter");
var assign = require('object-assign');
var CHANGE_EVENT = "changeEvent";
var emitter = EventEmitter({}), listener;

var ProductStore = {
// Survey-specific methods
    initProducts: function () {
        return [
            {
                productId: 123,
                name: 'asd123',
                Description: 'Superhero',
                Category: 'ad123',
                Prize: 88.88
            }
        ];
    },
    listProducts: function (category, callback) {
        var mongoskin = require('mongoskin'),
            dbUrl = process.env.MONGOHQ_URL || 'mongodb://@localhost:27017/sportStore',
            db = mongoskin.db(dbUrl, {safe: true}),
            collections = {
                products: db.collection('products')
            };
        if (category) {
            collections.products.find({"Category": category}, {sort: {productId: 1}}).toArray(function (error, products) {
                if (error) return next(error);
                callback(products);
                //return products;
            });
        }
        else {
            collections.products.find({}, {sort: {productId: 1}}).toArray(function (error, products) {
                if (error) return next(error);
                callback(products);
                //return products;
            });
        }

    },

// Basic event handling functions
    emitChange: function () {
        emitter.emit(CHANGE_EVENT);
    },

    addChangeListener: function (callback) {
        emitter.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
        emitter.removeListener(CHANGE_EVENT, callback);
    }
}

// The ProductStore is a singleton, so export only the one instance.
module.exports = ProductStore;
