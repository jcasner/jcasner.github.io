import React from 'react';
import { useSearchParams } from 'react-router-dom';

import Menu from '../menu';

import Body from './sections/Body';
import Header from './sections/Header';

const menuObject = { menu: 'false' };

const Resume = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const hideMenu = searchParams.get('menu') === 'false';

  const handleClick = (event) => {
    event.preventDefault();
    setSearchParams(menuObject);
  };

  return (
    <div>
      {hideMenu
        ? (
          <div>
            <Header />
            <Body />
          </div>
        )
        : (
          <div>
            <div>
              <Menu />
            </div>
            <div className="wrapper">
              <section>
                <h2>Resume</h2>
                <a href="/resume" onClick={handleClick}>Printer Friendly</a>
                <Body />
              </section>
            </div>
            <script src="javascripts/scale.fix.js" />
          </div>
        )}
    </div>
  );
};

export default Resume;
