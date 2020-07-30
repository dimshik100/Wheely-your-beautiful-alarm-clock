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
      fromTime: {
        hour: 0, // 1-12
        minute: 0, // 0-59
        period: "AM" // AM/PM
      },
      toTime: {
        hour: 4, // 1-12
        minute: 0, // 0-59
        period: "AM" // AM/PM
      },
      fromColor: "#7934f3",
      toColor: "#6ea2f1"
    },
    {
      fromTime: {
        hour: 4, // 1-12
        minute: 1, // 0-59
        period: "AM" // AM/PM
      },
      toTime: {
        hour: 7, // 1-12
        minute: 0, // 0-59
        period: "AM" // AM/PM
      },
      fromColor: "#5aaff9",
      toColor: "#f4a2d9"
    },
    {
      fromTime: {
        hour: 7, // 1-12
        minute: 1, // 0-59
        period: "AM" // AM/PM
      },
      toTime: {
        hour: 10, // 1-12
        minute: 0, // 0-59
        period: "AM" // AM/PM
      },
      fromColor: "#8dfffd",
      toColor: "#1ea3ff"
    },
    {
      fromTime: {
        hour: 10, // 1-12
        minute: 1, // 0-59
        period: "AM" // AM/PM
      },
      toTime: {
        hour: 2, // 1-12
        minute: 0, // 0-59
        period: "PM" // AM/PM
      },
      fromColor: "#ffe4a8",
      toColor: "#ff586e"
    },
    {
      fromTime: {
        hour: 2, // 1-12
        minute: 1, // 0-59
        period: "PM" // AM/PM
      },
      toTime: {
        hour: 5, // 1-12
        minute: 0, // 0-59
        period: "PM" // AM/PM
      },
      fromColor: "#fb97ab",
      toColor: "#f42f64"
    },
    {
      fromTime: {
        hour: 5, // 1-12
        minute: 1, // 0-59
        period: "PM" // AM/PM
      },
      toTime: {
        hour: 8, // 1-12
        minute: 0, // 0-59
        period: "PM" // AM/PM
      },
      fromColor: "#8c57e5",
      toColor: "#eb95b7"
    },
    {
      fromTime: {
        hour: 8, // 1-12
        minute: 1, // 0-59
        period: "PM" // AM/PM
      },
      toTime: {
        hour: 11, // 1-12
        minute: 59, // 0-59
        period: "PM" // AM/PM
      },
      fromColor: "#4a75e5",
      toColor: "#3c1e84"
    }
  ];

  // if (period === "PM" && hours < 12) {
  //   console.log("PM");
  //   hours = hours + 12;
  // }
  if (period === "AM" && hours === 12) {
    console.log("AM");
    hours = hours - 12;
  }

  const minutesFromBeginningOfTheDay = getMinutesFromHourMinute(hours, minutes, period);
  console.log("minutesFromBeginningOfTheDay" + minutesFromBeginningOfTheDay);
  let gradientData = gradientsArr[0]; // setting initial color

  for (const gradData of gradientsArr) {
    const fromMinute = getMinutesFromHourMinute(gradData.fromTime.hour, gradData.fromTime.minute, gradData.fromTime.period);
    console.log("fromMinute" + fromMinute);
    const toMinute = getMinutesFromHourMinute(gradData.toTime.hour, gradData.toTime.minute, gradData.toTime.period);
    console.log("toMinute" + toMinute);
    if (minutesFromBeginningOfTheDay >= fromMinute && minutesFromBeginningOfTheDay <= toMinute) {
      gradientData = gradData;
      break;
    }
  }
  console.log("-----------");
  console.log(gradientData);
  return gradientData;
};

export const getMinutesFromHourMinute = function(hours, minutes, period) {
  if (period === "AM" || hours === 12) {
    return hours * 60 + minutes;
  } else { // "PM"
    hours = hours + 12;
    return hours * 60 + minutes;
  }
}
