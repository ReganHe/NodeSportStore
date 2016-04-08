var merge = require('merge');

// this just emulates an in memory database with a super
// simple api
function DataStore(name) {
    if (!this instanceof DataStore) {
        return new DataStore(name);
    }

    var store = this;
    DataStore.instances[name] = store;
    store.items = [];

    store.getAll = function () {
        return store.items;
    };

    return store;
}

DataStore.instances = {};

module.exports = DataStore;