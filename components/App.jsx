import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Home from './home';
import Resume from './resume';
import PageNotFound from './not-found';

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
