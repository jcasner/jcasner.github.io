import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  details: PropTypes.object.isRequired,
};

const Degree = ({ details }) => {
  return (
    <table>
      <tbody>
        <tr>
          <td><big><strong>{details.degree}</strong></big></td>
          <td>{details.minors ? <strong>Minors: {details.minors}</strong> : ''}</td>
        </tr>
        <tr>
          <td>{details.school}</td>
          <td>{details.graduation}</td>
        </tr>
      </tbody>
    </table>
  );
};

Degree.propTypes = propTypes;

export default Degree;
