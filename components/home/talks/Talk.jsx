import React from 'react';
import PropTypes from 'prop-types';

const Talk = ({ talk, last }) => (
  <div>
    <h3>
      {talk.title}
      {' '}
      |
      {' '}
      <a href={talk.confLink}>{talk.conference}</a>
    </h3>
    <iframe
      title={talk.title}
      width="448"
      height="252"
      src={talk.video}
      allow="accelerometer; encrypted-media; gyroscope"
      allowFullScreen
    />
    <span style={{ display: 'block', maxWidth: 448 }}>{talk.about}</span>
    {!last && <hr />}
  </div>
);

Talk.defaultProps = {
  last: false,
};

Talk.propTypes = {
  talk: PropTypes.shape({
    title: PropTypes.string.isRequired,
    conference: PropTypes.string.isRequired,
    confLink: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired,
  }).isRequired,
  last: PropTypes.bool,
};

export default Talk;
