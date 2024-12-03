import React from 'react';

export const getDateDiff = (start, endDate) => {
  let diff = '';

  const startDate = new Date(start);
  const totalMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12
                      + (endDate.getMonth() - startDate.getMonth());
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  diff = years ? `${years} year${years === 1 ? '' : 's'}` : '';
  diff = years && months ? `${diff}, ` : diff;
  diff = months ? `${diff}${months} month${months === 1 ? '' : 's'}` : diff;

  return diff;
};

export const getDateCell = (start, end, includeDuration) => {
  const formatDate = (date) => {
    const options = { year: '2-digit', month: '2-digit' };
    return new Date(date).toLocaleDateString('en-US', options);
  };

  const startStr = formatDate(start);

  const endDate = end ? new Date(end) : new Date();
  const endStr = end ? formatDate(endDate) : 'present';

  let diff = '';
  if (includeDuration) {
    diff = getDateDiff(start, endDate);
  }

  /* eslint-disable react/jsx-one-expression-per-line */
  return (
    <div>
      {startStr} - {endStr}{<div><small><i>{diff}</i></small></div>}
    </div>
  );
  /* eslint-enable react/jsx-one-expression-per-line */
};
