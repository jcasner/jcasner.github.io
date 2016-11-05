import React from 'react';
import _ from 'lodash';

function SocialLink({ icon, link }) {

  function getUserName(link) {
    return _.last(link.split('/'));
  }

  return(
    <tr>
      <td width="20px">
        <a href={link}>
          <img src={icon} class="inline" />
        </a>
      </td>
      <td>
        <a href={link}>
          {getUserName(link)}
        </a>
      </td>
    </tr>
  )
}

export default SocialLink;
