import React, { PropTypes } from 'react';

const propTypes = {
  details: PropTypes.element.isRequired,
};

const Degree = ({ details }) => {
  return (
    <table>
      <tr>
        <td><big><strong>{details.degree}</strong></big></td>
        <td>{details.minors ? <strong>Minors: {details.minors}</strong> : ''}</td>
      </tr>
      <tr>
        <td>{details.school}</td>
        <td>{details.graduation}</td>
      </tr>
    </table>
  );
};

Degree.propTypes = propTypes;

export default Degree;
