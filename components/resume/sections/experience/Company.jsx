import React from 'react';
import PropTypes from 'prop-types';

import Notes from './Notes';
import Position, { JobPropType } from './Position';
import { getDateCell } from './dateUtils';

const propTypes = {
  company: PropTypes.string.isRequired,
  details: JobPropType.isRequired,
};

const Company = ({ company, details }) => {
  const positions = [];
  let index = 0;
  Object.keys(details.positions).forEach((job) => {
    positions.push(
      <Position key={details.positions[job].title} job={details.positions[job]} />,
    );
    positions.push(
      <Notes key={index} job={details.positions[job]} />,
    );
    index += 1;
  });

  const companyHeader = (
    details.url ? <a href={details.url} target="_blank" rel="noreferrer">{company}</a> : company
  );

  return (
    <table>
      <tbody>
        <tr>
          <td><strong><big>{companyHeader}</big></strong></td>
          <td>{details.location}</td>
          <td>{getDateCell(details.start, details.end, true)}</td>
        </tr>
        {positions}
      </tbody>
    </table>
  );
};

Company.propTypes = propTypes;

export default Company;
