import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Services from './Services';
import Doors from './Doors';
import Windows from './Windows';
import Contracting from './Contracting';

const AppRouter = () => {
    return (
    <Router>
        <Switch>
        <Route path="/" exact component={Services} />
        <Route path="/doors" component={Doors} />
        <Route path="/windows" component={Windows} />
        <Route path="/contracting" component={Contracting} />
        </Switch>
    </Router>
    );
};

export default AppRouter;