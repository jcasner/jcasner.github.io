import React from 'react';
import PropTypes from 'prop-types';

import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import Summary from './Summary';

const propTypes = {

};

const Body = () => {
  return (
    <div>
      <Summary />
      <Experience />
      <Education />
      <Skills />
    </div>
  );
}

Body.propTypes = propTypes;

export default Body;
