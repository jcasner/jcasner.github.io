import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import Menu from './Menu';

import Body from './resume/Body';
import Header from './resume/Header';

const propTypes = {
  routes: PropTypes.array.isRequired,
};

const Resume = ({ routes, location: { query } }) => {
  return (
    <div>
      {query && query.menu === 'false' ?
      <div>
        <Header />
        <Body />
      </div> :
      <div>
        <div>
          <Menu routes={routes[0].childRoutes} />
        </div>
        <div class="wrapper">
          <section>
            <h2>Resume</h2>
            <Link to={{  pathname: '/resume', query: { menu: false } }}>Printer Friendly</Link>
            <Body />
          </section>
        </div>
        <script src="javascripts/scale.fix.js"></script>
      </div>
      }
    </div>
  );
}

Resume.propTypes = propTypes;

export default Resume;
