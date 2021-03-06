import React from 'react';

const Summary = () => {
  const skills = {
    Languages: [
      'Python',
      'Java (J2EE, Android)',
      'C#',
      'JavaScript (React.js, Angular, Node)',
      'VB',
      'C++',
      'Ruby/Rails',
    ],
    Databases: [
      'PostgreSQL',
      'MySQL',
      'SQL Server',
      'Oracle',
      'Teradata',
      'DynamoDB (NoSQL)'
    ],
    Tools: [
      'Jira',
      'Jenkins',
      'Travis CI',
      'AWS',
      'Azure',
      'Gradle',
      'Salt',
      'Chef',
      'git',
      'svn'
    ],
  };

  const getSkillsList = () => {
    const result = [];
    Object.keys(skills).forEach(function(key) {
      result.push(<li key={key}><strong>{key}:</strong>&nbsp;{skills[key].join(', ')}</li>)
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

export default Summary;
