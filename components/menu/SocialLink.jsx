import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

const SocialLink = ({ name, icon, link }) => {
  const getUserName = (userName) => userName.split('/').pop();

  return (
    <tr>
      <td width="20px">
        <a className="icon" href={link} target="_blank" rel="noreferrer">
          <img src={icon} className="inline" alt={`${name} logo`} />
        </a>
      </td>
      <td>
        <a className="label" href={link} target="_blank" rel="noreferrer">
          {getUserName(link)}
        </a>
      </td>
    </tr>
  );
};

SocialLink.propTypes = propTypes;

export default SocialLink;
