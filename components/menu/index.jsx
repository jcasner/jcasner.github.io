import React from 'react';
import { Link } from 'react-router-dom';

import SocialLink from './SocialLink';

const Menu = () => {
  const generateMapMenu = () => (
    <span>
      <Link to="/">Home</Link>
      <br />
      <Link to="/resume">Resume</Link>
    </span>
  );

  return (
    <header id="ignorePDF">
      <h1>Jared Casner</h1>
      <img src="images/jared-250-250-avatar.jpg" alt="Headshot of Jared" />
      <nav>
        {generateMapMenu()}
      </nav>
      <table className="view">
        <tbody>
          <SocialLink name="Github" icon="images/github-mark-32px.png" link="https://github.com/jcasner" />
          <SocialLink name="LinkedIn" icon="images/in-2c-14px.png" link="https://www.linkedin.com/in/jaredmcasner" />
          <SocialLink name="Twitter" icon="images/twitter_logo_blue.png" link="https://twitter.com/jaredcaz" />
          <SocialLink name="StackOverflow" icon="images/so-icon.png" link="http://stackoverflow.com/story/jcasner" />
          <SocialLink name="Medium" icon="images/medium_logo32.png" link="https://medium.com/@jaredcaz" />
        </tbody>
      </table>
    </header>
  );
};

export default Menu;
