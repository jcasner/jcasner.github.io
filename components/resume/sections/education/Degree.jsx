import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  details: PropTypes.shape({
    degree: PropTypes.string.isRequired,
    minors: PropTypes.string,
    school: PropTypes.string.isRequired,
    graduation: PropTypes.string.isRequired,
  }).isRequired,
};

const Degree = ({ details }) => (
  <table>
    <tbody>
      <tr>
        <td><big><strong>{details.degree}</strong></big></td>
        <td>
          {details.minors ? (
            <strong>
              {`Minors: ${details.minors}`}
            </strong>
          ) : ''}
        </td>
      </tr>
      <tr>
        <td>{details.school}</td>
        <td>{details.graduation}</td>
      </tr>
    </tbody>
  </table>
);

Degree.propTypes = propTypes;

export default Degree;
