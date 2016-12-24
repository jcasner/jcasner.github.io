import React, { PropTypes } from 'react';

import Notes from './Notes';
import Position from './Position';
import { getDateCell } from './dateUtils';

const propTypes = {
  company: PropTypes.element.isRequired,
  details: PropTypes.element.isRequired,
};

const Company = ({company, details}) => {
  const positions = [];
  Object.keys(details.positions).forEach((job) => {
    positions.push(
      <Position job={details.positions[job]} />
    );
    positions.push(
      <Notes job={details.positions[job]} />
    );
  });

  return (
    <table>
      <tr>
        <td><strong><big>{company}</big></strong></td>
        <td>{details.location}</td>
        <td>{getDateCell(details.start, details.end, true)}</td>
      </tr>
      <tr>
        <td colSpan='3'><small><i>{details.blurb}</i></small></td>
      </tr>
      {positions}
    </table>
  );
}

Company.propTypes = propTypes;

export default Company;
