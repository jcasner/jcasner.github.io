import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string.isRequired,
};

const LocalLink = ({ name }) => {
  const linkName = name.toLowerCase();
  const target = `/${linkName === 'home' ? '' : linkName}`;
  return (
    <tr>
      <td width="20px">
        <Link className="icon" to={target}>
          <img className="inline" src={`images/icons8-${linkName}.png`} alt={name} />
        </Link>
      </td>
      <td>
        <Link className="label" to={target}>{name}</Link>
      </td>
    </tr>
  );
};

LocalLink.propTypes = propTypes;

export default LocalLink;
