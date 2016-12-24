import React, { PropTypes } from 'react';

import Menu from './Menu';

const propTypes = {
  routes: PropTypes.array.isRequired,
};

const Home = ({ routes }) => {
  return (
    <div>
      <div>
        <Menu routes={routes[0].childRoutes} />
      </div>
      <div class="wrapper">
        <section>
          Coming soon!
        </section>
      </div>
      <script src="javascripts/scale.fix.js"></script>
    </div>
  );
}

Home.propTypes = propTypes;

export default Home;
