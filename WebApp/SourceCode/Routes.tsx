import * as React from 'react';
import {
    Router,
    Route
} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import HomePage from './Pages/HomePage';

const history = createBrowserHistory()

export default class Routes extends React.Component<undefined, undefined> {
    render() {
        return (
            <Router history={history}>
                <div>
                    <Route exact path="/" component={HomePage as any}/>
                    <Route path="/homePage" component={HomePage as any}/>
                </div>
            </Router>
        );
    }
}
