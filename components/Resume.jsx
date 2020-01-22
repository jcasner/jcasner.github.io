import React from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

import Menu from './Menu';

import Body from './resume/Body';
import Header from './resume/Header';

const menuObject = { 'menu': 'false' };

const Resume = ({ location: { search } }) => {
  const hideMenu = queryString.parse(search).menu == 'false';
  return (
    <div>
      {hideMenu ?
      <div>
        <Header />
        <Body />
      </div> :
      <div>
        <div>
          <Menu />
        </div>
        <div className="wrapper">
          <section>
            <h2>Resume</h2>
            <Link to={{ pathname: '/resume', search: queryString.stringify(menuObject) }}>Printer Friendly</Link>
            <Body />
          </section>
        </div>
        <script src="javascripts/scale.fix.js"></script>
      </div>
      }
    </div>
  );
}

export default Resume;
