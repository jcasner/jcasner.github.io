import React, { PropTypes } from 'react';
import _ from 'lodash';

const propTypes = {
  icon: PropTypes.element.isRequired,
  link: PropTypes.element.isRequired,
}

const SocialLink = ({ icon, link }) => {
  const getUserName = (link) => {
    return _.last(link.split('/'));
  }

  return(
    <tr>
      <td width="20px">
        <a class="icon" href={link}>
          <img src={icon} class="inline" />
        </a>
      </td>
      <td>
        <a class="label" href={link}>
          {getUserName(link)}
        </a>
      </td>
    </tr>
  )
}

SocialLink.propTypes = propTypes;

export default SocialLink;
