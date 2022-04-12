import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-mini';

import { getDateCell } from './dateUtils';

export const JobPropType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  start: PropTypes.instanceOf(moment),
  end: PropTypes.instanceOf(moment),
  notes: PropTypes.arrayOf(PropTypes.string).isRequired,
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
