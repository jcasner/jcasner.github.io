import React from 'react';

import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import Summary from './Summary';

const Body = () => (
  <div>
    <Summary />
    <Experience />
    <Education />
    <Skills />
  </div>
);

export default Body;
