import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import Home from './home';
import Resume from './resume';
import PageNotFound from './not-found';

const routes = (
  <Routes>
    <Route exact path="/" title="Home" element={<Home />} />
    <Route path="/resume" title="Resume" element={<Resume />} />
    <Route element={<PageNotFound />} />
  </Routes>
);

const App = () => {
  return (
    <Router>
      {routes}
    </Router>
  );
}

export default App;
