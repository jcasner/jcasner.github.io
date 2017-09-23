import React from 'react';
import PropTypes from 'prop-types';

import _ from 'lodash';

import Degree from './education/Degree';

const propTypes = {
};

const Education = () => {
  const degrees = [
    {
      degree: 'Master of Business Administration',
      school: 'University of Colorado at Denver',
      graduation: 'August, 2008'
    },
    {
      degree: 'B.S. Computer Science',
      minors: 'Math & Business Administration',
      school: 'University of Denver',
      graduation: 'March, 2004'
    }
  ];

  const getEducation = () => {
    const result = [];
    _.forEach(degrees, (degree) => {
      result.push(<Degree key={degree.degree} details={degree} />);
    });
    return result;
  }

  return (
    <div>
      <h2>Education</h2>
      {getEducation()}
    </div>
  );
};

Education.propTypes = propTypes;

export default Education;
