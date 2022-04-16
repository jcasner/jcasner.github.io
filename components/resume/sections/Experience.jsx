import React from 'react';

import moment from 'moment-mini';

import Company from './experience/Company';

/* eslint-disable max-len */
const Experience = () => {
  const experience = {
    'Trayt Health': {
      location: 'Menlo Park, CA',
      start: moment('2022-04-18'),
      positions: [
        {
          title: 'CTO',
          notes: [],
        },
      ],
    },
    'Pear Therapeutics': {
      location: 'San Francisco, CA',
      start: moment('2020-06-15'),
      end: moment('2022-04-15'),
      positions: [
        {
          title: 'Sr. Director, Engineering',
          start: moment('2021-07-01'),
          end: moment('2022-04-15'),
          notes: [
            'Responsible for global initiative engineering teams (platform, web, devops, support, salesforce)',
            'Grew my engineering teams from 25 to 40 direct and indirect reports (FTEs + Contractors) in 6 months with zero regrettable attrition',
            'Instituted and standardized recruiting processes to focus on DEI and standardized onboarding across engineering',
            'Oversaw rollout of our first microservices, BFFs, and micro-frontends the transition from ElasticBeanstalk to kubernetes',
            'Acted as interim head of security for 3 months while hiring a new security team',
          ],
        },
        {
          title: 'Director, Engineering',
          start: moment('2020-06-15'),
          end: moment('2021-06-30'),
          notes: [
            'Responsible for global initiative engineering teams (platform, web, devops, data, salesforce)',
            'Grew my engineering teams from 15 to 25 direct and indirect reports, including heads of DevOps and Data',
            'Introduced incident response plans and standardized development practices across engineering',
          ],
        },
      ],
    },
    CNote: {
      location: 'San Francisco, CA',
      start: moment('2017-09-25'),
      positions: [
        {
          title: 'Advisor, Technology and Strategy',
          start: moment('2020-06-15'),
          notes: [
            'Advise engineering team on architecture and growth',
            'Advise CEO and Product team on technical strategy',
          ],
        },
        {
          title: 'VP, Engineering',
          start: moment('2017-09-25'),
          end: moment('2020-06-15'),
          notes: [
            'Responsible for product, engineering, design, and security',
            'Managed a lean, distributed organization with high quality, rapid releases',
            'Built a 2-sided loan marketplace, underwriting engine, and loan servicing engine',
            'Implemented blue/green deployments, full CI/CD, and achieved 99.999%+ uptime since 2018',
            'Actively involved in fundraising and pitching to Angels and VCs',
          ],
        },
      ],
    },
    Sindeo: {
      location: 'San Francisco, CA',
      start: moment('2017-02-14'),
      end: moment('2017-06-20'),
      positions: [
        {
          title: 'Director, Engineering',
          notes: [
            'Company ceased operating in June 2017 after running out of capital',
            'Led technical due diligence efforts when Sindeo was acquired by RenRen',
            'Responsible for all of engineering at Sindeo',
            'Managed multiple 3rd party vendors, contracts, etc',
            'Restructured the engineering team and added several key hires (doubled team size)',
            'Managed and mentored 8 engineers',
          ],
        },
      ],
    },
    OpenGov: {
      location: 'Redwood City, CA',
      start: moment('2015-11-02'),
      end: moment('2017-02-03'),
      positions: [
        {
          title: 'Director, Engineering',
          notes: [
            'Pioneered and championed internal, company-wide hackathons',
            'Developed a career skills matrix and salary bands for Engineering',
            'Recruited, managed, and mentored a team of 12 front-end and full-stack engineers and managers',
            'Managed 3rd party vendors for new product development and maintenance initiatives',
            'Worked closely with Product and Design to analyze customer needs, define requirements, and scope projects',
            'Oversaw the OpenGov Budget Builder engineering effort from concept through successful GA',
          ],
        },
      ],
    },
    Numenta: {
      location: 'Redwood City, CA',
      start: moment('2012-10-01'),
      end: moment('2015-10-31'),
      positions: [
        {
          title: 'Director, Application Engineering',
          start: moment('2013-07-01'),
          end: moment('2015-10-31'),
          notes: [
            'Led development of 4 applications, 2 of which were subsequently licensed commercially',
            'Managed full-stack engineering efforts of all commercial software',
            'Led the transition to open source for all commercial software',
            'Drove continuous data-driven refinement of engineering processes',
          ],
        },
        {
          title: 'Director, Solutions Engineering',
          start: moment('2012-10-01'),
          end: moment('2013-06-30'),
          notes: [
            'Owned the engineering of client libraries (python, .net, javascript, etc) and all customer facing development activity',
            'Served as the internal voice of the customer and user champion',
            'Spoke at conferences and special interest groups to advocate new approaches to data science and evangelize technology',
          ],
        },
      ],
    },
    Aprimo: {
      location: 'US and UK',
      start: moment('2007-10-01'),
      end: moment('2012-10-01'),
      positions: [
        {
          title: 'Regional Manager, Technical Services, EMEA',
          start: moment('2010-02-01'),
          end: moment('2012-10-01'),
          location: 'London, UK',
          notes: [
            'Oversaw all custom software development activities in Europe, the Middle East, and Africa (EMEA), from design through delivery',
            'Managed all field-based software developers and managers, QA engineers, infrastructure specialists and data analysts in EMEA',
            'Built the technical team in EMEA, growing the team from 1 to 11',
            'Defined and refined methodology and processes across the technical services practice globally',
            'Developed a new offshore software development team, from recruitment through operational management',
          ],
        },
        {
          title: 'Sr. Technical Consultant',
          start: moment('2007-10-01'),
          end: moment('2010-02-01'),
          location: 'Denver, CO',
          notes: [
            'Customers included Xerox, Warner Brothers, Wal-Mart, Ericsson, Kaiser Permanente, Prudential, and Adobe',
            'Custom software and integrations using the .Net stack (C#), MSSQL Server, Oracle, etc.',
            'Led development teams and ensured on time and on budget delivery of enhanced functionality',
          ],
        },
      ],
    },
    Sapient: {
      location: 'Denver, CO',
      start: moment('2005-06-01'),
      end: moment('2007-10-01'),
      positions: [
        {
          title: 'Technical Consultant',
          notes: [
            'Custom software applications for the federal government using Java, Javascript, and Oracle',
            'Led an operations and maintenance team, including planning, tasking and teaching the rest of the team',
            'Held a Top Secret / SCI clearance',
          ],
        },
      ],
    },
    Visa: {
      location: 'Denver, CO',
      start: moment('2004-02-01'),
      end: moment('2005-06-01'),
      positions: [
        {
          title: 'Research Analyst, Client Management',
          notes: [
            'Technical support for banks and other large processors in the Visa global network',
          ],
        },
      ],
    },
  };

  const getExperience = () => {
    const result = [];
    Object.keys(experience).forEach((key) => {
      if (moment().diff(experience[key].start) >= 0) {
        result.push(
          <Company key={key} company={key} details={experience[key]} />,
        );
      }
    });
    return result;
  };

  return (
    <div>
      <h2>Experience</h2>
      {getExperience()}
    </div>
  );
};

export default Experience;
