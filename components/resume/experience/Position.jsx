import React, { PropTypes } from 'react';

import { getDateCell } from './dateUtils';

const propTypes = {
  job: PropTypes.element.isRequired,
};

const Position = ({ job }) => {
  return (
    <tr key={job.title}>
      <td><strong>{job.title}</strong></td>
      <td>{job.location ? job.location : ''}</td>
      <td>{job.start ? getDateCell(job.start, job.end, false) : ''}</td>
    </tr>
  );
}

Position.propTypes = propTypes;

export default Position;
