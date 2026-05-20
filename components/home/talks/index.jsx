
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
    title: 'Bootstrapping Security',
    conference: 'BSidesSF 2026',
    confLink: 'http://bsidessf.org/',
    about: `How to build a security program on day 1, before funding or having a dedicated security budget.
            Updated for 2026.`,
    video: 'https://www.youtube.com/embed/s2l9UyCPpk0',
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
    title: 'Get NIST-y',
    conference: 'Podcast by Blacksmith InfoSec',
    confLink: 'https://open.spotify.com/show/4739fFvJc3qkPrg8iSxOtx?si=27d74ae7111442a1',
    about: `Get NIST-y is a podcast that breaks compliance out of the checkbox trap and turns it into a real security
      advantage. No fluff, no FUD—just practical strategies to make compliance work for your MSP. Each week, we dive
      into compliance topics based on real questions from our MSP partners and subscribers.`,
    video: 'https://open.spotify.com/embed/show/4739fFvJc3qkPrg8iSxOtx?utm_source=generator',
  },
];

const Talks = () => (
  <div>
    <h2>Talks</h2>
    {talks.map((talk, index) => <Talk talk={talk} key={talk.title} last={talks.length - index === 1} />)}
  </div>
);

export default Talks;
