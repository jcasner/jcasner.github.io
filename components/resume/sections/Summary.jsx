import React from 'react';

const Summary = () => {
  const today = new Date();
  const oneYear = 1000 * 60 * 60 * 24 * 365;
  const startWork = new Date(2004, 1, 1);
  const startMgmt = new Date(2009, 10, 1);
  const yearsWork = Math.floor((today.getTime() - startWork.getTime()) / oneYear);
  const yearsMgmt = Math.floor((today.getTime() - startMgmt.getTime()) / oneYear);

  return (
    <table>
      <tbody>
        <tr>
          <td>
            <h2>Professional Summary</h2>
            <ul>
              <li key='yearsWorking'>{yearsWork}+ years designing and developing software</li>
              <li key='yearsManaging'>{yearsMgmt}+ years managing software developers and other technical resources</li>
              <li key='pear'>At Pear, grew my teams from 15 to 40 while increasing diversity</li>
              <li key='cnote'>At CNote, ran Product, Engineering, Design, and Security</li>
              <li key='sindeo'>At Sindeo, turned around a dysfunctional engineering organization</li>
              <li key='opengov'>At OpenGov, led OpenGov Budget Builder engineering effort from MVP through GA</li>
              <li key='numenta'>At Numenta, managed design and development for 4 new products from start to finish</li>
              <li key='aprimo'>At Aprimo, oversaw delivery of a $5M+ .Net Web Development project, on time and on budget</li>
              <li key='sapient'>At Sapient, developed a bespoke Agile methodology based on Scrum, RUP and XP</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default Summary;
