/** @jsx React.DOM */

var React = require("react");
var Router = require("react-router");
var Routes = Router.Routes;
var Route = Router.Route;
var NotFound = Router.NotFound;

// Handlers
var App = require('./controller/appController');
var ListProducts = require('./controller/categoricalProductRepeaterController');
var NotFoundHandler = require('./components/notFound');

var appRouter = (
    <Routes location="history">
        <Route title="ProductBuilder" handler={App}>
            <Route name="list" path="/" handler={ListProducts}/>
            <Route name="edit" path="/products/:productId/edit" handler={NotFoundHandler} />
            <NotFound title="Page Not Found" handler={NotFoundHandler}/>
        </Route>
    </Routes>
);

module.exports = appRouter;
