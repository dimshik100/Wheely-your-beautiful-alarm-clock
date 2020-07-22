const uniqId = require('uniqid');
import { Repeat } from '../classes/Repeat.js';

const DEFAULT_HOURS = 2;
const DEFAULT_MINUTES = 0;
const DEFAULT_PERIOD = 'AM';
export class Alarm {
  constructor(config) {
    this.id = config.id ? config.id : uniqId();
    this.hours = config.hours ? config.hours : DEFAULT_HOURS;
    this.minutes = config.minutes ? config.minutes : DEFAULT_MINUTES;
    this.period = config.period ? config.period : DEFAULT_PERIOD;
    this.active = config.active !== undefined ? config.active : true;
    this.occurrence = config.occurrence ? config.occurrence : new Repeat(new Date());
  }

  getDisplayTime() {
    const hours = this.hours.toString().padStart(2, '0');
    const minutes = this.minutes.toString().padStart(2, '0');
    return `${hours}:${minutes} ${this.period}`;
  }
  // TODO:add a function that return the time in 24 hours format
}
