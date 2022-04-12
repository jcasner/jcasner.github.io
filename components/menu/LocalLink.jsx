import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string.isRequired,
};

const LocalLink = ({ name }) => {
  const target = `/${name.toLowerCase() === 'home' ? '' : name}`;
  return (
    <tr>
      <td width="20">
        <Link className="icon" to={target}>
          <img className="inline" src={`images/icons8-${name}.png`} alt={name} />
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
