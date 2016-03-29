exports.products = require('./products');

/*
 * GET home page.
 */

exports.index = function(req, res, next){
  req.collections.products.find({}).toArray(function(error, products){
    if (error) return next(error);
    res.render('index', { products: products,title:"SportStore"});
  })
};
