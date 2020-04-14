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
];

export default () => {
  return (
    <div>
      <h2>Talks</h2>
      {talks.map(talk => <Talk talk={talk} key={talk} />)}
    </div>
  );
};
