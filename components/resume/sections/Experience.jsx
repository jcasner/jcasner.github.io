import React from 'react';

import moment from 'moment-mini';

import Company from './experience/Company';

/* eslint-disable max-len */
const Experience = () => {
  const experience = {
    'Blacksmith InfoSec': {
      location: 'San Bruno, CA',
      start: moment('2023-09-05'),
      positions: [
        {
          title: 'Cofounder',
          notes: [
            'Built a SaaS application for SMBs to craft and manage their security program',
          ],
        },
      ],
    },
    'Trayt Health': {
      location: 'Palo Alto, CA',
      start: moment('2022-04-15'),
      end: moment('2023-08-15'),
      positions: [
        {
          title: 'CTO',
          notes: [
            'Responsible for engineering, quality, security, data, and IT',
            'Hands on leader for a ~20 person, globally distributed team using Node.js, React, ReactNative, Terraform, and python on AWS',
            'Led the migration of APIs from EC2 to ECS for horizontal scalability, improved reliability, and decreased cost',
            'Rolled out data pipelines and AWS Sagemaker for data science initiatives',
            'Achieved SOC2 Type 2 attestation and HIPAA and TX-RAMP compliance',
          ],
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
          notes: [
            'Responsible for global initiative engineering teams (platform, web, devops, support, salesforce)',
            'Grew my globally distributed engineering teams from 15 to 40 reports with zero regrettable attrition',
            'Led microservices implementation and rollout to increase flexibility and development speed with zero downtime (node.js, React, Pulumi, Kubernetes, AWS EKS, Gitlab)',
            'Fixed data pipeline problems to bulletproof reliability and scalability of Data Lake and Warehouse (python, AWS Glue, Redshift)',
            'Acted as interim head of security for 3 months while hiring a new security team',
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
            'Built a 2-sided loan marketplace, underwriting engine, and loan servicing engine using node.js and React on AWS',
            'Implemented blue/green deployments, full CI/CD, and achieved 99.999% uptime during my tenure',
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
            'Led technical due diligence efforts when Sindeo was acquired by RenRen',
            'Responsible for all of engineering at Sindeo using Python (Django) and React on AWS',
            'Managed multiple 3rd party vendors, contracts, etc',
            'Restructured the engineering team and added several key hires (doubled team size)',
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
            'Recruited, managed, and mentored a team of 12 front-end and full-stack engineers and managers',
            'Managed 3rd party vendors for new product development and maintenance initiatives',
            'Oversaw the new OpenGov Budget Builder engineering effort through successful GA using Ruby/Rails, node, and React on AWS',
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
