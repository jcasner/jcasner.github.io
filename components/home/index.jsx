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
          <h2>Bio</h2>
          <p>
            Jared is a Senior Director of Engineering at Pear Therapeutics where he leads the global initiative engineering
            teams.
          </p>
          <p>
            In his roughly 20 years in industry, Jared has worked for companies from 3 to 30,000 employees across a
            variety of industries. His work has taken him to more than 20 countries. He's worked across the stack from
            pulling cables and configuring networks to tweaking CSS for pixel perfect UI, both as an individual
            contributor and as a leader.
          </p>
          <p>
            Jared holds a BS in Computer Science from the University of Denver and an MBA from the University of
            Colorado. He lives in the Bay Area with his wife and 2 daughters.
          </p>
          <h2>At Home</h2>
          <p>
            I generally spend my weekends playing with my kids or getting my hands dirty (literally) in our garden. When
            I'm not at home or a local park, you can find me on the softball field, golf course, or a camp ground. I also
            enjoy tinkering with DIY electronics projects using a RaspberryPi or Arduino, reading (mostly Sci Fi), and
            playing board games with friends and family.
          </p>
          <h2>In the Community</h2>
          <p>
            To stay active in the community, I volunteered for the Alzheimer's Association's <a href="https://www.alz.org/bvb">RivALZ</a>
            program from 2013 through 2020 and with the South San Francisco{' '}
            <a href="https://www.ssf.net/departments/fire/emergency-preparedness/community-emergency-response-team-cert">{' '}
            Community Emergency Response Team (CERT)</a> since 2018. In 2021, I joined the board of the Industry Advisory
            Council at the University of Denver's Ritchie School for Engineering and Computer Science.
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
