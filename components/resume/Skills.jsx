import React, { PropTypes } from 'react';

import _ from 'lodash';

const propTypes = {

};

const Summary = () => {
  const skills = {
    languages: [
      'Python',
      'Java (J2EE, Android)',
      'C#',
      'JavaScript (React.js, Angular, Node)',
      'VB',
      'C++',
      'Ruby/Rails',
      'Bash'
    ],
    databases: [
      'PostgreSQL',
      'MySQL',
      'SQL Server',
      'Oracle',
      'Teradata',
      'DynamoDB (NoSQL)'
    ],
    tools: [
      'JIRA',
      'Jenkins',
      'Travis CI',
      'AWS',
      'Azure',
      'Gradle',
      'Salt',
      'Chef',
      'Git/github',
      'svn'
    ],
    methodologies: [
      'Agile (Kanban, Scrum, RUP, XP, TDD)',
      'Waterfall'
    ]
  };

  const getSkillsList = () => {
    const result = [];
    Object.keys(skills).forEach(function(key) {
      result.push(<li><strong>{_.capitalize(key)}:</strong>&nbsp;{skills[key].join(', ')}</li>)
    });
    return result;
  }

  return (
    <table>
      <tr>
        <td>
          <h2>Skills</h2>
          <ul>
            {getSkillsList()}
          </ul>
        </td>
      </tr>
    </table>
  )
}

Summary.propTypes = propTypes;

export default Summary;
