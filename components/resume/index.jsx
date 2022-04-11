import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import queryString from 'query-string';

import Menu from '../menu';

import Body from './sections/Body';
import Header from './sections/Header';

const menuObject = { 'menu': 'false' };

const Resume = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const hideMenu = searchParams.get('menu') === 'false';
  console.error(`test: ${hideMenu}`);

  const handleClick = (event) => {
    event.preventDefault();
    setSearchParams(menuObject);
  };

  return (
    <div>
      {hideMenu ?
        <div>
          <Header />
          <Body />
        </div>
      : <div>
          <div>
            <Menu />
          </div>
          <div className="wrapper">
            <section>
              <h2>Resume</h2>
              <button href='/resume' onClick={handleClick}>Printer Friendly</button>
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
