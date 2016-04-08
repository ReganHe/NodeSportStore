var router = require('express').Router({caseSensitive: true});
var assert = require('assert');
var products = require('../data-store')("products");

// get all products
router.get('/', function(req, res){
  res.json({products: products.getAll()});
});

module.exports = router;
