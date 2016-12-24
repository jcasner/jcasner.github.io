import React, { PropTypes } from 'react';

import Menu from './Menu';

const propTypes = {
  routes: PropTypes.array.isRequired,
};

const Home = ({ routes }) => {
  return (
    <div>
      <div>
        <Menu routes={routes[0].childRoutes} />
      </div>
      <div class="wrapper">
        <section>
          <h1>About Me</h1>
          <h2>At Home</h2>
          <p>
            My wife, Lisa, and I live in South San Francisco, CA with our beautiful daughter. Together, we're active in the community through programs like <a href="http://act.alz.org/site/TR/BvB/CA-NorthernCaliforniaandNorthernNevada?pg=entry&fr_id=9559">Blondes vs Brunettes</a>, enjoy the outdoors, and have a healthy social life. In addition, I'm still active with <a href="http://www.babaracusrugby.com/">BA Baracus Rugby Club</a>. While I rarely play anymore, I am still on the Board, serving as Treasurer.
          </p>
          <h2>At Work</h2>
          <p>
            I am a technology generalist, having worked professionally in Python, C#, Java (J2EE &amp; Android), Ruby, and Javascript. In my career, I've built custom web applications, integrated enterprise software, developed mobile apps, and published open source software. These days, I'm fairly hands off of the codebase, specializing in people and process management. I've been happily managing cross-functional technical resources since late 2009.
          </p>
        </section>
      </div>
      <script src="javascripts/scale.fix.js"></script>
    </div>
  );
}

Home.propTypes = propTypes;

export default Home;
