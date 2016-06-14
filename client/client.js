import React from 'react'
import { render } from 'react-dom'
import {Router,browserHistory} from 'react-router'
import routes from './app/app_router'

//allow react dev tools work
//window.React = React;

render(
    <Router routes={routes} history={browserHistory}/>,
    document.getElementById('app')
);
