<template>
  <span v-html="occurrence"></span>
</template>

<script>
import { containsOnly, getWeekDays } from "../utils.js";
import { format } from 'date-fns'
import { Repeat } from '../classes/Repeat.js';

export default {
  name: 'AlarmOccurrence',
  props: {
    repeat: {
      type: Repeat,
      required: true
    }
  },
  computed: {
    occurrence() {
      // If we get a specific date, this means that we want to play the alarm only once
      if (this.repeat.date) {
        return `Once (${format(this.repeat.date, 'dd/MM/yyyy')})`;
      }

      const repeatDays = this.repeat.days;

      // If we have only one day in the repeat days array, The full name of the day should be presented
      if (repeatDays.length === 1) {
        const weekdaysLongText = getWeekDays('iiii'); // Monday, Tuesday, ..., Sunday
        return `${weekdaysLongText[repeatDays[0]]}`;
      }

      const weekdays = [0, 1, 2, 3, 4];
      if (containsOnly(repeatDays, weekdays)) {
        return "Weekdays";
      }

      const weekend = [5, 6];
      if (containsOnly(repeatDays, weekend)) {
        return "Weekend";
      }

      // If we have varous days of the week, we should show all week days and emphesize
      // the relavant repeat days.
      let html = '';

      const weekdaysShortText = getWeekDays('iiiii'); // M, T, W, T, F, S, S

      for (let dayNumber = 0; dayNumber < 7; dayNumber++) {
        if (repeatDays.includes(dayNumber)) {
          html += `<strong class="selected-day-of-the-week">${weekdaysShortText[dayNumber]}</strong> `;
        } else {
          html += `<span class="day-of-the-week">${weekdaysShortText[dayNumber]} </span>`;
        }
      }

      return html;
    }
  }
};
</script>

<style lang="scss" scoped>
::v-deep {
  .selected-day-of-the-week {
    color: $secondary;
  }
  .day-of-the-week {
    opacity: 0.3;
  }
}
</style>
