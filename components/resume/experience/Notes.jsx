import React, { PropTypes } from 'react';

const propTypes = {
  job: PropTypes.element.isRequired,
};

const Notes = ({ job }) => {
  const notes = [];
  Object.keys(job.notes).forEach((note) => {
    notes.push(
      <li>{job.notes[note]}</li>
    );
  });

  return (
    <tr key={job.title}>
      <td colSpan='3'>{notes}</td>
    </tr>
  );
}

Notes.propTypes = propTypes;

export default Notes;
