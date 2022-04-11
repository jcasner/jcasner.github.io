import React from 'react';
import moment from 'moment-mini';

/* eslint-disable import/prefer-default-export */
export const getDateCell = (start, end, includeDuration) => {
  const startStr = start.format('MM/YY');

  const endDate = end || moment();
  const endStr = end ? endDate.format('MM/YY') : 'present';

  let diff = '';
  if (includeDuration) {
    const duration = moment.duration(endDate.diff(start));
    const years = duration.years();
    const months = duration.months();
    diff = years ? `${years} year${years === 1 ? '' : 's'}` : '';
    diff = years && months ? `${diff}, ` : diff;
    diff = months ? `${diff}${months} month${months === 1 ? '' : 's'}` : diff;
  }

  /* eslint-disable react/jsx-one-expression-per-line */
  return (
    <div>
      {startStr} - {endStr}{<div><small><i>{diff}</i></small></div>}
    </div>
  );
  /* eslint-enable react/jsx-one-expression-per-line */
};
