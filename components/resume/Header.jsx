import React, { PropTypes } from 'react';

const propTypes = {

};

const Header = () => {
  return (
    <div>
      <h1>Jared Casner</h1>
      <table>
        <tr>
          <td>South San Francisco, CA</td>
          <td>jared [at] casner.us</td>
        </tr>
      </table>
    </div>
  );
}

Header.propTypes = propTypes;

export default Header;
