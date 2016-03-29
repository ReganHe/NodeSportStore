var express, path, favicon, logger, cookieParser, bodyParser, ejs, routes, products;
express = require('express');
path = require('path');
favicon = require('serve-favicon');
logger = require('morgan');
cookieParser = require('cookie-parser');
bodyParser = require('body-parser');
ejs = require('ejs');
routes = require('./routes/index');
products = require('./routes/products');
var mongoskin = require('mongoskin');
var dbUrl = process.env.MONGOHQ_URL || 'mongodb://@localhost:27017/sportStore';
var db = mongoskin.db(dbUrl, {safe: true});
var collections = {
    products: db.collection('products')
};

var app = express();
app.locals.appTitle = "sportStore";

app.use(function (req, res, next) {
    if (!collections.products) return next(new Error("No collections."))
    req.collections = collections;
    return next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');
app.engine('.html', ejs.__express);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes.index);

//REST API ROUTES
//app.all('/api', authorize);
app.get('/api/products', products.list)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
