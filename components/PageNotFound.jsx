import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  location: PropTypes.object.isRequired,
};

const PageNotFound = ({ location }) => {
  return (
    <div>
      <div className="wrapper">
        <section>
      Page not found - the path, <code>{location.pathname}</code>,
      did not match any known routes.
        </section>
      </div>
      <script src="javascripts/scale.fix.js"></script>
    </div>
  );
}

PageNotFound.propTypes = propTypes;

export default PageNotFound;
