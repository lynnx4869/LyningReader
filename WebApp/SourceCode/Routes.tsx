import * as React from 'react';
import {
    Route,
    IndexRoute
} from 'react-router';

import HomePage from './Pages/HomePage';

class MainView extends React.Component<undefined, undefined> {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default (
    <Route path="/" component={MainView}>
        <IndexRoute component={HomePage}/>
        <Route path="/homePage" component={HomePage}/>
    </Route>
);