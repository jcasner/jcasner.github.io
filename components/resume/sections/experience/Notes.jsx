import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  job: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const Notes = ({ job }) => {
  const notes = [];
  Object.keys(job.notes).forEach((note) => {
    notes.push(
      <li key={job.notes[note]}>{job.notes[note]}</li>,
    );
  });

  return (
    <tr key={job.title}>
      <td colSpan="3">{notes}</td>
    </tr>
  );
};

Notes.propTypes = propTypes;

export default Notes;
