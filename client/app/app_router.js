var React = require("react");
var Router = require("react-router");
var Routes = Router.Routes;
var Route = Router.Route;
var NotFound = Router.NotFound;

// Handlers
var App = require('./components/app');
var ListProducts = require('./components/list_products');
var NotFoundHandler = require('./components/not_found');

var appRouter = (
  <Routes location="history">
    <Route title="ProductBuilder" handler={App}>
      <Route name="list" path="/" handler={ListProducts} />
      <NotFound title="Page Not Found" handler={NotFoundHandler}/>
    </Route>
  </Routes>
);

module.exports = appRouter;
