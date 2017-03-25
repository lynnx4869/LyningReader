import * as React from 'react';
import {render} from 'react-dom';
import {
    Router,
    hashHistory
} from 'react-router';

import '../UI/css/css.css';

const appNode = document.getElementById('app');

import Routes from './Routes';

const routes = (
    <Router history={hashHistory} routes={Routes}></Router>
);

render(routes, appNode);