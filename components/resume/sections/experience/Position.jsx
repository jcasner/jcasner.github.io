import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-mini';

import { getDateCell } from './dateUtils';

const propTypes = {
  job: PropTypes.shape({
    location: PropTypes.string.isRequired,
    start: PropTypes.instanceOf(moment).isRequired,
    end: PropTypes.instanceOf(moment),
    positions: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      start: PropTypes.instanceOf(moment).isRequired,
      end: PropTypes.instanceOf(moment),
      notes: PropTypes.arrayOf(PropTypes.string).isRequired,
    })).isRequired
  }).isRequired,
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
