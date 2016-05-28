var EventEmitter = require("event-emitter");
var assign = require('object-assign');
var CHANGE_EVENT = "changeEvent";
var mongoskin = require('mongoskin'),
    dbUrl = process.env.MONGOHQ_URL || 'mongodb://@localhost:27017/sportStore',
    db = mongoskin.db(dbUrl, {safe: true}),
    collections = {
        products: db.collection('products')
    };
var ProductStore = assign({}, EventEmitter.prototype, {
// Survey-specific methods
    listProducts: function (category, callback) {
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
    listProducts2: function (category) {
        collections.products.find({"Category": category}, {sort: {productId: 1}}, function (error, products) {
            return new Promise(function (resolve, reject) {
                if (error) {
                    reject(error);
                }
                resolve(products);
            })
        })
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
