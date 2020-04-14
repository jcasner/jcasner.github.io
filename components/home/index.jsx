import React from 'react';

import Menu from '../menu';
import Talks from './talks';

const Home = () => {
  return (
    <div>
      <div>
        <Menu />
      </div>
      <div className="wrapper">
        <section>
          <h1>About Me</h1>
          <h2>At Home</h2>
          <p>
            I generally spend my weekends playing with my kids or getting my hands dirty (literally) in our garden. When
            I'm not at home or a local park, you can find me on the softball field, golf course, or a camp ground. I also
            enjoy tinkering with DIY electronics projects using a RaspberryPi or Arduino, reading (mostly Sci Fi), and
            playing board games with friends and family.
          </p>
          <h2>In the Community</h2>
          <p>
            To stay active in the community, I have been volunteering for the Alzheimer's Association's{' '}
            <a href="https://www.alz.org/bvb">RivALZ</a> program since 2013 and with the South San Francisco{' '}
            <a href="https://www.ssf.net/departments/fire/emergency-preparedness/community-emergency-response-team-cert">{' '}
            Community Emergency Response Team (CERT)</a> since 2018.
          </p>
          <h2>At Work</h2>
          <p>
            I consider myself a technology generalist, having worked professionally in Python, C#, Java (J2EE &amp; Android),
            Ruby, and Javascript. I've built custom web applications, integrated enterprise software, developed mobile apps,
            and published open source software. Lately, I've been thinking much more about security and implementing
            defense-in-depth solutions at every layer of the application. I am comfortable having a deep technical
            conversation or discussing business strategy. I particularly enjoy people and process manaagement. I have had
            the opportunity to pitch my company and our larger mission to legislators and their aides on Capitol Hill.
          </p>
          <Talks />
        </section>
      </div>
      <script src="javascripts/scale.fix.js"></script>
    </div>
  );
}

export default Home;
