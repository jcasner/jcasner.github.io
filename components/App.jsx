import React, { PropTypes } from 'react';

const propTypes = {
  children: PropTypes.element.isRequired
};

const App = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
}

App.propTypes = propTypes;

export default App;
