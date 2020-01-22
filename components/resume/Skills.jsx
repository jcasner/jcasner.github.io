import React from 'react';
import PropTypes from 'prop-types';

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
      'Jira',
      'Jenkins',
      'Travis CI',
      'AWS',
      'Azure',
      'Gradle',
      'Salt',
      'Chef',
      'Git/github',
      'Bitbucket',
      'svn'
    ],
  };

  const getSkillsList = () => {
    const result = [];
    Object.keys(skills).forEach(function(key) {
      result.push(<li key={key}><strong>{_.capitalize(key)}:</strong>&nbsp;{skills[key].join(', ')}</li>)
    });
    return result;
  }

  return (
    <table>
      <tbody>
        <tr>
          <td>
            <h2>Skills</h2>
            <ul>
              {getSkillsList()}
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

Summary.propTypes = propTypes;

export default Summary;
