import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

const SocialLink = ({ icon, link }) => {
  const getUserName = link => {
    return link.split('/').pop();
  }

  return(
    <tr>
      <td width="20px">
        <a className="icon" href={link} target="_blank">
          <img src={icon} className="inline" />
        </a>
      </td>
      <td>
        <a className="label" href={link} target="_blank">
          {getUserName(link)}
        </a>
      </td>
    </tr>
  )
}

SocialLink.propTypes = propTypes;

export default SocialLink;
