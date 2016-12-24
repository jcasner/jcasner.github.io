import React, { PropTypes } from 'react';

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
      <Skills />
      <Experience />
      <Education />
    </div>
  );
}

Body.propTypes = propTypes;

export default Body;
