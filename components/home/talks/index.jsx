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
];

export default () => (
  <div>
    <h2>Talks</h2>
    {talks.map((talk, index) => <Talk talk={talk} key={talk.title} last={talks.length - index === 1} />)}
  </div>
);
