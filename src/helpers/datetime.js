import moment from 'moment';

export const shouldUpdateEndTime = (start_time, end_time) => {
  const start = moment(start_time);
  const end = moment(end_time);
  const diffInHours = end.diff(start, 'hours', true);
  return Math.abs(diffInHours) > 24
};
