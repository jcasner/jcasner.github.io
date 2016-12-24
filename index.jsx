import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import 'current-input';

import App from './components/App';
import Home from './components/Home';
import Resume from './components/Resume';
import PageNotFound from './components/PageNotFound';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute title="Home" component={Home} />
    <Route path="" title="Home" component={Home} />
    <Route path="resume" title="Resume" component={Resume} />
    <Route path="*" component={PageNotFound} />
  </Route>
);


render(
  <Router
    history={browserHistory}
    routes={routes}
  />,
  document.getElementById('root')
);
