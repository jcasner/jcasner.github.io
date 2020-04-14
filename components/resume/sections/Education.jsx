import React from 'react';

import Degree from './education/Degree';

const Education = () => {
  const degrees = [
    {
      degree: 'Master of Business Administration',
      school: 'University of Colorado at Denver',
      graduation: '2008'
    },
    {
      degree: 'B.S. Computer Science',
      minors: 'Math & Business Administration',
      school: 'University of Denver',
      graduation: '2004'
    }
  ];

  const getEducation = () => {
    return degrees.map(degree => <Degree key={degree.degree} details={degree} />)
  }

  return (
    <div>
      <h2>Education</h2>
      {getEducation()}
    </div>
  );
};

export default Education;
