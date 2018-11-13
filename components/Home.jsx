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
            My wife, Lisa, and I live in South San Francisco, CA with our beautiful daughters.
            Together, we're active in the community through programs like <a target="_blank" href="http://act.alz.org/site/TR/BvB/CA-NorthernCaliforniaandNorthernNevada?pg=entry&fr_id=9559">
            Blondes vs Brunettes</a>, enjoy the outdoors, and have a healthy social life. I ran the local <a href="http://www.bayareapioneers.org/" target="_blank">University of Denver alumni chapter</a>,
            hosting 6-8 events per year until March 2018.
            In fact, I was featured as the <a href="https://www.youtube.com/watch?v=3KTlZ-feS8w" target="_blank">Alum of the Month</a> for DU in March 2016.
            At this point, I've retired from rugby, but I continue to see a lot of the older guys on the softball field and golf course. I am an active member
            of <a target="_blank" href="http://www.ssf.net/departments/fire/emergency-preparedness/community-emergency-response-team-cert">SSF CERT</a>.
          </p>
          <h2>At Work</h2>
          <p>
            I am a technology generalist, having worked professionally in Python, C#, Java (J2EE &amp; Android), Ruby, and Javascript.
            In my career, I've built custom web applications, integrated enterprise software, developed mobile apps, and published
            open source software. Lately, I've been thinking much more about security and implementing defense-in-depth solutions at
            every layer of the application. I spend as much time deep in the code and architecture as I do managing people, and enjoy both equally.
          </p>
        </section>
      </div>
      <script src="javascripts/scale.fix.js"></script>
    </div>
  );
}

export default Home;
