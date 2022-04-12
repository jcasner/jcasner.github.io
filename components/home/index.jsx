import React from 'react';

import Menu from '../menu';
import Talks from './talks';

const Home = () => (
  <div>
    <div>
      <Menu />
    </div>
    <div className="wrapper">
      <section>
        <h1>About Me</h1>
        <h2>Bio</h2>
        <p>
          Jared is the CTO at Trayt Health on a mission to improve patient outcomes in at-risk, dependent populations.
        </p>
        <p>
          In his roughly 20 years pf experience, Jared has worked for companies from 3 to 30,000 employees across a
          variety of industries. His work has taken him to more than 20 countries. He&apos;s worked across the stack from
          pulling cables and configuring networks to tweaking CSS for pixel perfect UI, both as an individual
          contributor and as a leader.
        </p>
        <p>
          Jared holds a BS in Computer Science from the University of Denver and an MBA from the University of
          Colorado. He lives in the Bay Area with his wife and 2 daughters.
        </p>
        <h2>At Home</h2>
        <p>
          Jared generally spends his weekends playing with his kids or getting his hands dirty (literally) in the garden.
          When he&apos;s not at home or a local park, you can find him on the softball field, golf course, or a camp
          ground. He also enjoys tinkering with DIY electronics projects using a RaspberryPi or Arduino, reading (mostly
          Sci Fi), and playing board games with friends and family.
        </p>
        <h2>In the Community</h2>
        <span>
          <ul>
            <li>
              In 2021, Jared joined the Industry Advisory Board at the Ritchie School for Engineering and Computer Science
              at DU. He has been leading the Bay Area Alumni group since 2013.
            </li>
            <li>
              Since 2018, Jared has been a member of the
              {' '}
              <a href="https://www.ssf.net/departments/fire/emergency-preparedness/community-emergency-response-team-cert">
                {' '}
                South San Francisco Community Emergency Response Team (CERT)
              </a>
              .
            </li>
            <li>
              2013 - 2020 Jared volunteered for the Alzheimer&apos;s Association&apos;s
              {' '}
              <a href="https://www.alz.org/bvb">RivALZ</a>
              {' '}
              program as a coach, broadcaster, and committee member.
            </li>
          </ul>
        </span>
        <h2>At Work</h2>
        <p>
          Jared is a technology generalist, having worked professionally in Python, C#, Java (J2EE &amp; Android),
          Ruby, and Javascript. He&apos;s built custom web applications, integrated enterprise software, developed mobile
          apps, and published open source software. Lately, he&apos;s been thinking much more about security and implementing
          defense-in-depth solutions at every layer of the application. He is comfortable having a deep technical
          conversation or discussing business strategy. He particularly enjoys people and process manaagement. He has had
          the opportunity to pitch his company and the larger mission to legislators and their aides on Capitol Hill.
        </p>
        <Talks />
      </section>
    </div>
    <script src="javascripts/scale.fix.js" />
  </div>
);

export default Home;
