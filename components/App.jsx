import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Home from './Home';
import Resume from './Resume';
import PageNotFound from './PageNotFound';

const routes = (
  <Switch>
    <Route exact path="/" title="Home" component={Home} />
    <Route path="/resume" title="Resume" component={Resume} />
    <Route component={PageNotFound} />
  </Switch>
);

const App = () => {
  return (
    <Router>
      {routes}
    </Router>
  );
}

export default App;
