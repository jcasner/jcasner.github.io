import React from 'react';
import PropTypes from 'prop-types';

import { getDateCell } from './dateUtils';

export const JobPropType = PropTypes.shape({
  title: PropTypes.string,
  location: PropTypes.string,
  start: PropTypes.instanceOf(Date),
  end: PropTypes.instanceOf(Date),
  notes: PropTypes.arrayOf(PropTypes.string),
});

const propTypes = {
  job: JobPropType.isRequired,
};

const Position = ({ job }) => (
  <tr key={job.title}>
    <td><strong>{job.title}</strong></td>
    <td>{job.location}</td>
    <td>{job.start ? getDateCell(job.start, job.end, false) : ''}</td>
  </tr>
);

Position.propTypes = propTypes;

export default Position;
