import React from 'react';

const Summary = () => {
  const skills = {
    Languages: [
      'Python',
      'Java (J2EE, Android)',
      'C#',
      'JavaScript / Typescript (React.js, Angular, Node, ReactNative)',
      'VB',
      'C++',
      'Ruby/Rails',
    ],
    Databases: [
      'PostgreSQL',
      'MySQL',
      'Redshift',
      'SQL Server',
      'Oracle',
      'Teradata',
      'DynamoDB (NoSQL)',
    ],
    Tools: [
      'Jira',
      'Jenkins',
      'Travis CI',
      'CircleCI',
      'AWS',
      'Azure',
      'Gradle',
      'Salt',
      'Chef',
      'Terraform',
      'Pulumi',
      'kubernetes',
      'Datadog',
      'NewRelic',
      'Kafka',
      'RabbitMQ',
      'git',
      'svn',
    ],
  };

  const getSkillsList = () => {
    const result = [];
    /* eslint-disable react/jsx-closing-tag-location */
    Object.keys(skills).forEach((key) => result.push(<li key={key}>
      <strong>
        {`${key}: `}
      </strong>
      {skills[key].join(', ')}
    </li>));
    /* eslint-enable react/jsx-closing-tag-location */
    return result;
  };

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
  );
};

export default Summary;
