import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  location: PropTypes.shape({ pathname: PropTypes.string }).isRequired,
};

const PageNotFound = ({ location }) => {
  return (
    <div>
      <div className="wrapper">
        <section>
          Page not found - try heading back <a href="/">home</a> to find the link you're looking for.
        </section>
      </div>
      <script src="javascripts/scale.fix.js"></script>
    </div>
  );
}

PageNotFound.propTypes = propTypes;

export default PageNotFound;
