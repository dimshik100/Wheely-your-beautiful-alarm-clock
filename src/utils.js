import { eachDayOfInterval, startOfWeek, endOfWeek, format } from 'date-fns';

export const containsOnly = function (array1, array2) {
  return array2.every(elem => array1.includes(elem))
}

export const getWeekDays = function(formatPattern = 'iiiii') {
  const now = new Date();
  const arr = eachDayOfInterval({ start: startOfWeek(now), end: endOfWeek(now) });

  const weekDays = [];
  arr.forEach(date => weekDays.push(format(date, formatPattern)))

  return weekDays;
}
