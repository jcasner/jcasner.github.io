import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import SocialLink from './SocialLink';

const propTypes = {
  routes: PropTypes.element.isRequired,
}

const Menu = ({ routes }) => {

  const generateMapMenu = () => {
    let path = '';

    const nextPath = (route) => {
      path += (
        (path.slice(-1) === '/' ? '' : '/') +
        (route.path === '/' ? '' : route.path)
      );
      return path;
    }

    return (
      routes.filter(route => route.title)
        .map((route, index, array) => (
          <span key={index}>
            <Link to={nextPath(route)}>{route.title}</Link>
            {(index + 1) < array.length && <br/>}
          </span>
        ))
    );
  }

  return (
    <header id="ignorePDF">
      <h1>Jared Casner</h1>
      <img src="images/jared-250-250-avatar.jpg" />
      <nav>
        {generateMapMenu()}
      </nav>
      <p class="view">
        <table>
          <tbody>
            <SocialLink icon="images/github-mark-32px.png" link="https://github.com/jcasner" />
            <SocialLink icon="images/in-2c-14px.png" link="https://www.linkedin.com/in/jaredmcasner" />
            <SocialLink icon="images/twitter_logo_blue.png" link="https://twitter.com/jaredcaz" />
            <SocialLink icon="images/so-icon.png" link="http://stackoverflow.com/story/jcasner" />
            <SocialLink icon="images/medium_logo32.png" link="https://medium.com/@jaredcaz" />
            <SocialLink icon="images/fb_icon_325.png" link="https://www.facebook.com/jaredmcasner" />
          </tbody>
        </table>
      </p>
    </header>
  );
}

Menu.propTypes = propTypes;

export default Menu;
