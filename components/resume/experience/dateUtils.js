import React from 'react';

import moment from 'moment';
import util from 'util';

export const getDateCell = (start, end, includeDuration) => {
  const endDate = end ? end : moment();
  const startStr = start.format('MM/YY');
  const endStr = end ? endDate.format('MM/YY') : 'present';
  const duration = moment.duration(endDate.diff(start));
  const years = duration.years(), months = duration.months();
  let diff = years ? util.format('%d year%s', years, years === 1 ? '' : 's') : '';
  diff = years && months ? diff + ', ' : diff;
  diff = months ? diff + util.format('%d month%s', months, months === 1 ? '' : 's') : diff;
  return (
    <div>
      {startStr} - {endStr}{includeDuration ? <div><small><i>{diff}</i></small></div> : ''}
    </div>);
};
