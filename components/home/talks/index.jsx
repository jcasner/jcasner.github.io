import React from 'react';

import Talk from './Talk';

const talks = [
  {
    title: 'Bootstrapping Security',
    conference: 'BSidesSF 2020',
    confLink: 'http://bsidessf.org/',
    about: 'How to build a security program on day 1, before funding or having a dedicated security budget',
    video: 'https://www.youtube.com/embed/gtP5OU-8OEk',
  },
  {
    title: 'Insights on Leadership & Mindset',
    conference: 'Joey Pinz Discipline Conversations',
    confLink: 'https://joeypinzconversations.com/',
    about: 'A wide ranging conversation about leadership, discipline, compliance, and sports',
    video: 'https://www.youtube.com/embed/JBgqjho3KLI',
  },
  {
    title: 'MSP Initiative Interview',
    conference: 'MSP Initiative',
    confLink: 'https://www.mspinitiative.com/',
    about: 'Security, compliance, and NFC East Rivalries - what more could you want?',
    video: 'https://www.youtube.com/embed/NzEa2mLYDNk',
  },
  {
    title: 'How I Built it with AWS',
    conference: 'AWS Startups',
    confLink: 'https://aws.amazon.com/startups/showcase/startup-details/bd8931e1-e364-4caf-976e-3b9b2ef068fd',
    about: 'Mike and I were interviewed by AWS about how we built the company, and what we learned along the way',
    video: 'https://player.twitch.tv/?video=2165760314&parent=localhost&parent=jared.casner.us&&autoplay=false',
  },
];

export default () => (
  <div>
    <h2>Talks</h2>
    {talks.map((talk, index) => <Talk talk={talk} key={talk.title} last={talks.length - index === 1} />)}
  </div>
);
