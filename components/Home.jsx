import React from 'react';
import PropTypes from 'prop-types';

import Menu from './Menu';

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
            My wife, Lisa, and I live in South San Francisco, CA with our beautiful daughter.
            Together, we're active in the community through programs like <a target="_blank" href="http://act.alz.org/site/TR/BvB/CA-NorthernCaliforniaandNorthernNevada?pg=entry&fr_id=9559">
            Blondes vs Brunettes</a>, enjoy the outdoors, and have a healthy social life.
            I run the local <a href="http://www.bayareapioneers.org/" target="_blank">University of Denver alumni chapter</a>, hosting 6-8 events per year.
            In fact, I was featured as the <a href="https://www.youtube.com/watch?v=3KTlZ-feS8w" target="_blank">Alum of the Month</a> for DU in March 2016.
            At this point, I've retired from rugby, but am still advising the Board of <a target="_blank" href="http://www.babaracusrugby.com/">BA Baracus Rugby Club</a> and
            I continue to see a lot of the older guys on the softball field and golf course.
          </p>
          <h2>At Work</h2>
          <p>
            I am a technology generalist, having worked professionally in Python, C#, Java (J2EE &amp; Android), Ruby, and Javascript.
            In my career, I've built custom web applications, integrated enterprise software, developed mobile apps, and published
            open source software. These days, I'm fairly hands off of the codebase, specializing in people and process management.
            I've been happily managing cross-functional technical resources since late 2009.
          </p>
          <h2>Coding for Fun</h2>
          <p>
            I enjoy playing with new technology and will occasionally spin up a project to learn something new.
            One example of this is a <a href="http://jared.casner.us/EarthDawnDiceRoller/" target="_blank">simple dice roller</a> I
            wrote for the table top RPG Earthdawn using React Native.
          </p>
        </section>
      </div>
      <script src="javascripts/scale.fix.js"></script>
    </div>
  );
}

export default Home;
