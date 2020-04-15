import React from 'react';
import PropTypes from 'prop-types';

import Notes from './Notes';
import Position from './Position';
import { getDateCell } from './dateUtils';

const propTypes = {
  company: PropTypes.string.isRequired,
  details: PropTypes.object.isRequired,
};

const Company = ({company, details}) => {
  const positions = [];
  var index = 0;
  Object.keys(details.positions).forEach((job) => {
    positions.push(
      <Position key={details.positions[job].title} job={details.positions[job]} />
    );
    positions.push(
      <Notes key={index} job={details.positions[job]} />
    );
    index++;
  });

  return (
    <table>
      <tbody>
        <tr>
          <td><strong><big>{company}</big></strong></td>
          <td>{details.location}</td>
          <td>{getDateCell(details.start, details.end, true)}</td>
        </tr>
        {positions}
      </tbody>
    </table>
  );
}

Company.propTypes = propTypes;

export default Company;
