import React, { PropTypes } from 'react';
import moment from 'moment';

import Company from './experience/Company';

const propTypes = {

};

const Experience = () => {
  const experience = {
    Sindeo: {
      location: 'San Francisco, CA',
      start: moment('2017-02-14'),
      end: moment('2017-06-20'),
      blurb: 'Sindeo is changing the mortgage industry from the ground up by offering homebuyers a straightforward path to home ownership and refinancing.',
      positions: [
        {
          title: 'Director, Engineering',
          notes: [
            'Responsible for all of engineering at Sindeo',
            'Managed multiple 3rd party vendors, contracts, etc',
            'Restructured the engineering team and added several key hires',
            'Managed, mentored, and developed engineers',
            'Instituted process within product and engineering, moving from no process to Scrum and increasing predictability in delivery',
            'Roughly 40% hands on in Python and DevOps'
          ]
        },
      ]
    },
    OpenGov: {
      location: 'Redwood City, CA',
      start: moment('2015-11-02'),
      end: moment('2017-02-03'),
      blurb: 'OpenGov is a cloud-based platform that governments use to collaborate more effectively, make smarter, data-driven decisions and achieve greater transparency.',
      positions: [
        {
          title: 'Director, Engineering',
          notes: [
            'Manage 3rd party vendors for new product development and maintenance initiatives',
            'Recruit, manage, and mentor a team of front-end and full-stack engineers',
            'Work closely with Product and Design to analyze customer needs, define requirements, and scope projects',
            'Oversaw the new OpenGov Budget Builder engineering effort from concept through successful GA',
            'Pioneered an internal, company-wide hackathon',
            'Developed a career skills matrix and salary bands for Engineering',
            'Tech stack is PostgreSQL, Ruby/Rails, and Javascript (React, Redux)'
          ]
        }
      ]
    },
    Numenta: {
      location: 'Redwood City, CA',
      start: moment('2012-10-01'),
      end: moment('2015-10-31'),
      blurb: 'Numenta, Inc., was founded in 2005 to be a catalyst in the emerging field of machine intelligence. Its biologically inspired machine learning technology is based on a theory of the neocortex first described in co-founder Jeff Hawkins’ book, On Intelligence. The technology can be applied to anomaly detection in servers and applications, human behavior, and geo-spatial tracking data, and to the predication and classification of natural language. In addition, Numenta has created NuPIC (Numenta Platform for Intelligent Computing) as an open source project.',
      positions: [
        {
          title: 'Director, Engineering',
          start: moment('2013-07-01'),
          end: moment('2015-10-31'),
          location: 'Redwood City, CA',
          notes: [
            'Delivered a 1.0 product, available in the Amazon Webservices (AWS) Marketplace and managed subsequent updates',
            'Delivered a 1.0 SaaS application (python) with a web client (Javascript) and Android app (native java)',
            'Managed full-stack engineering efforts of all commercial software',
            'Led the transition to open source all commercial software',
            'Liaised with Product Management to define direction and scope of the product',
            'Discussed features and beta programs with customers and prospects',
            'Directly managed infrastructure, web, and QA engineering teams',
            'Transitioned engineering from Scrum to Kanban, increasing efficiency and throughput of the team'
          ]
        },
        {
          title: 'Director, Solutions Engineering',
          start: moment('2012-10-01'),
          end: moment('2013-06-30'),
          location: 'Redwood City, CA',
          notes: [
            'Responsible for all post-sales engineering activity, from scoping through delivery',
            'Owned the engineering of client libraries and all customer facing development activity',
            'Managed customer-facing and customer-focused applications',
            'Served as the internal voice of the customer and user champion',
            'Spoke at conferences and special interest groups to advocate new approaches to data science and evangelize Grok technology'
          ]
        }
      ]
    },
    Aprimo: {
      location: 'US and UK',
      start: moment('2007-10-01'),
      end: moment('2012-10-01'),
      blurb: 'Aprimo provides solutions in both consumer marketing with Aprimo Marketing Studio B2C™ and business-to-business marketing with Aprimo Marketing Studio B2B™. Aprimo was acquired by Teradata',
      positions: [
        {
          title: 'Regional Manager, Technical Services, EMEA',
          start: moment('2010-02-01'),
          end: moment('2012-10-01'),
          location: 'London, UK',
          notes: [
            'Oversaw all custom software development activities in Europe, the Middle East and Africa (EMEA), from design through delivery',
            'Architected and scoped large (>£1M) custom .Net web development projects, including the largest in Aprimo history ($5M+)',
            'Managed all field-based software developers and managers, QA engineers, infrastructure specialists and data analysts in EMEA',
            'Built the technical team in EMEA, growing the team from 1 to 11 cross-functional engineers in under 3 years',
            'Defined and refined methodology and processes across the technical services practice',
            'Developed a new offshore software development team, from recruitment through operational management'
          ]
        },
        {
          title: 'Sr. Technical Consultant',
          start: moment('2007-10-01'),
          end: moment('2010-02-01'),
          location: 'Denver, CO',
          notes: [
            'Customers included Xerox, Warner Brothers, Wal-Mart, Ericsson, Kaiser Permanente, Prudential, and Adobe',
            'Designed and developed integrations between Aprimo and third-party applications focusing on high-availability and scalability',
            'Led development teams (C#) and ensured on time and on budget delivery of enhanced functionality',
            'Developed tools for internal consumption which save significant amounts of time in standard processes'
          ]
        }
      ]
    },
    Sapient: {
      location: 'Denver, CO',
      start: moment('2005-06-01'),
      end: moment('2007-10-01'),
      blurb: 'Sapient Government Services is a leading provider of consulting and technology  services to a wide array of governmental agencies.',
      positions: [
        {
          title: 'Technical Consultant',
          notes: [
            'Consulted for multiple governmental agencies under the Directorate of National Intelligence (DNI)',
            'Defined a custom agile development process for a program, combining pieces of Scrum, RUP, and XP and including TDD',
            'Developed and maintained custom J2EE web applications and Java based thick clients attached to Oracle DBs',
            'Led an operations and maintenance team, including planning, tasking and teaching the rest of the team',
            'Held a Top Secret / SCI clearance'
          ]
        }
      ]
    },
    Visa: {
      location: 'Denver, CO',
      start: moment('2004-02-01'),
      end: moment('2005-06-01'),
      blurb: 'Visa Debit Processing Service',
      positions: [
        {
          title: 'Research Analyst, Client Management',
          notes: [
            'Evaluated problem reports, interacted with Visa’s worldwide customer base, and performed root cause analysis of problems',
            'Prioritized customer problems based on impact and severity and drove issues to closure'
          ]
        }
      ]
    },
  };

  const getExperience = () => {
    const result = [];
    Object.keys(experience).forEach((key) => {
      result.push(
        <Company key={key} company={key} details={experience[key]} />
      );
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

Experience.propTypes = propTypes;

export default Experience;
