import React from 'react'
import {Route,IndexRoute} from 'react-router'
import App from './controller/appController';
import ListProducts from './controller/ListProductsController';
import NotFound from './components/notFound';

module.exports = (
    <Route path="/" component={App}>
        <IndexRoute component={ListProducts}/>
        <Route name="edit" path="/products/:productId/edit" component={NotFound}/>
    </Route>

);
