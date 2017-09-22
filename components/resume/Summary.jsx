import React, { PropTypes } from 'react';

const propTypes = {

};

const Summary = () => {
  const today = new Date();
  const oneYear = 1000 * 60 * 60 * 24 * 365;
  const startWork = new Date(2004, 1, 1);
  const startMgmt = new Date(2009, 10, 1);
  const yearsWork = Math.floor((today.getTime() - startWork.getTime()) / oneYear);
  const yearsMgmt = Math.floor((today.getTime() - startMgmt.getTime()) / oneYear);

  return (
    <table>
      <tr>
        <td>
          <h2>Professional Summary</h2>
          <ul>
            <li>{yearsWork}+ years designing and developing software</li>
            <li>{yearsMgmt}+ years managing software developers and other technical resources</li>
            <li>Experience delivering production software on time and on budget, both standalone and SaaS</li>
            <li>At Sindeo, turned around a dysfunctional engineering organization</li>
            <li>At OpenGov, oversaw OpenGov Budget Builder engineering effort from MVP through GA</li>
            <li>At Numenta, managed design and development for multiple new products from start to finish</li>
            <li>At Aprimo, oversaw delivery of a $5M+ .Net Web Development project, on time and on budget</li>
            <li>At Sapient, developed a bespoke Agile methodology based on Scrum, RUP and XP for a customer</li>
          </ul>
        </td>
      </tr>
    </table>
  )
}

Summary.propTypes = propTypes;

export default Summary;
