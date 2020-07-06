import { eachDayOfInterval, startOfWeek, endOfWeek, format } from "date-fns";

export const containsOnly = function(array1, array2) {
  return array2.every(elem => array1.includes(elem));
};

export const getWeekDays = function(formatPattern = "iiiii") {
  const now = new Date();
  const arr = eachDayOfInterval({
    start: startOfWeek(now),
    end: endOfWeek(now)
  });

  const weekDays = [];
  arr.forEach(date => weekDays.push(format(date, formatPattern)));

  return weekDays;
};

export const getColorByTime = function(hours, minutes, period) {
  const gradientsArr = [
    {
      fromTime: "00:00",
      toTime: "04:00",
      fromColor: "#4a75e5",
      toColor: "#3c1e84"
    },
    {
      fromTime: "04:01",
      toTime: "07:00",
      fromColor: "#8c57e5",
      toColor: "#eb95b7"
    },
    {
      fromTime: "07:01",
      toTime: "10:00",
      fromColor: "#5aaff9",
      toColor: "#f4a2d9"
    },
    {
      fromTime: "10:01",
      toTime: "14:00",
      fromColor: "#8dfffd",
      toColor: "#1ea3ff"
    },
    {
      fromTime: "04:01",
      toTime: "17:00",
      fromColor: "#fb97ab",
      toColor: "#f42f64"
    },
    {
      fromTime: "17:01",
      toTime: "20:00",
      fromColor: "#8c57e5",
      toColor: "#eb95b7"
    },
    {
      fromTime: "20:01",
      toTime: "23:59",
      fromColor: "#4a75e5",
      toColor: "#3c1e84"
    }
  ];

  hours = parseInt(hours);

  let hoursIn24Format = hours;

  if (period === "PM" && hours < 12) {
    hoursIn24Format = hours + 12;
  }
  if (period === "AM" && hours === 12) {
    hoursIn24Format = hours - 12;
  }

  const minutesFromBeginningOfTheDay = getMinutesFromHourMinuteString(`${hoursIn24Format}:${minutes}`);

  let gradientData = gradientsArr[0]; // setting initial color

  for (const gradData of gradientsArr) {
    const fromMinute = getMinutesFromHourMinuteString(gradData.fromTime);
    const toMinute = getMinutesFromHourMinuteString(gradData.toTime);
    if (minutesFromBeginningOfTheDay >= fromMinute && minutesFromBeginningOfTheDay <= toMinute) {
      gradientData = gradData;
      break;
    }
  }
  console.log(gradientData);
  return gradientData;
};

export const getMinutesFromHourMinuteString = function(hmStr) {
  const parts = hmStr.split(':'); // split it at the colons
  const minutesFromBeginningOfTheDay = (+parts[0]) * 60 + (+parts[1]);
  return minutesFromBeginningOfTheDay;
}
