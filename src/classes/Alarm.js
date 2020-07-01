var uniqid = require('uniqid');

export class Alarm {
  constructor(hours, minutes, period, active = false, occurrenceData) {
    this.id = uniqid();
    this.hours = hours;
    this.minutes = minutes;
    this.period = period;
    this.active = active;
    this.occurrence = occurrenceData;// type of Repeat
  }
  // TODO:add a function that return the time in 24 hours format
}
