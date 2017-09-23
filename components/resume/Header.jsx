import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {

};

const Header = () => {
  return (
    <div>
      <h1>Jared Casner</h1>
      <table>
        <tbody>
          <tr>
            <td>South San Francisco, CA</td>
            <td>jared [at] casner.us</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

Header.propTypes = propTypes;

export default Header;
