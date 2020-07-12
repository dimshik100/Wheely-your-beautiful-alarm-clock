<template>
  <q-card class="card-wrapper q-pa-lg" :style="styleObject">

      <div class="text-h6">Alarm dialog card</div>

<q-slider
      v-model="hours"
      :min="1"
      :max="12"
      :step="1"
      label
      label-always
      color="light-green"
    />

    <q-slider
      v-model="minutes"
      :min="0"
      :max="59"
      :step="1"
      label
      label-always
      color="light-blue"
    />

  <div class="selected-time">
    {{selectedTime}}
  </div>

  <q-toggle
      :label="period"
      false-value="PM"
      true-value="AM"
      v-model="period"
      size="100px"
      />
      <div class="container">
        <div>
          <input type="checkbox" id="check_1" name="check_1" value="check_1">
          <label for="check_1">sun</label>
          <input type="checkbox" id="check_2" name="check_2" value="check_2">
          <label for="check_2">mon</label>
          <input type="checkbox" id="check_3" name="check_3" value="check_3">
          <label for="check_3">tue</label>
          <input type="checkbox" id="check_4" name="check_4" value="check_4">
          <label for="check_4">wed</label>
          <input type="checkbox" id="check_5" name="check_5" value="check_5">
          <label for="check_5">thu</label>
        </div>
        <div>
          <input type="checkbox" id="check_6" name="check_6" value="check_6">
          <label for="check_6">fri</label>
          <input type="checkbox" id="check_7" name="check_7" value="check_7">
          <label for="check_7">sat</label>
        </div>
      </div>
      <q-btn class="close-btn" :size="'md'" round icon="close" v-close-popup>
        <!-- <q-tooltip content-class="bg-red text-primary">Close</q-tooltip> -->
      </q-btn>

      <q-btn class="close-btn" round icon="close" v-close-popup>
        <!-- <q-tooltip content-class="bg-red text-primary">Close</q-tooltip> -->
      </q-btn>

      <q-btn class="submit-btn" round :label="'OK'" v-close-popup @click="submitAlarm">
        <!-- <q-tooltip content-class="bg-red text-primary">Close</q-tooltip> -->
      </q-btn>

  </q-card>
</template>

<script>
// TODO: consider using Granim.js to animate the gradients transition
// https://qiita.com/07JP27/items/1f134b5e16fecde628dd
// it usess canvas :)

import { getColorByTime } from '../utils';
import { Alarm } from '../classes/Alarm';
import { Repeat } from '../classes/Repeat';

export default {
  name: "AlarmDialogCard",
  props: {
    alarm: {
      type: Alarm,
      required: false
    }
  },
  data () {
    return {
      hours: 1,
      minutes: 30,
      period: 'AM', // AM | PM
      // gradientData: null // TODO: init with some data
      selection: ['teal', 'red']
    }
  },
  created() {
    // init
    if (this.alarm) {
      this.hours = this.alarm.hours;
      this.minutes = this.alarm.minutes;
      this.period = this.alarm.period;
    } else {
      // default alarm time
      this.hours = 6;
      this.minutes = 0;
      this.period = 'AM';
    }
  },
  computed: {
    selectedTime() {
      const hours = this.hours.toString().padStart(2, '0');
      const minutes = this.minutes.toString().padStart(2, '0');
      return `${hours}:${minutes}`
    },
    styleObject() {
      const gradientData = getColorByTime(this.hours, this.minutes, this.period);
      const angle = 135;
      const style = { border: '2px solid red;', backgroundImage: `linear-gradient(${angle}deg, ${gradientData.fromColor}, ${gradientData.toColor})` };

      return style;
    }
  },
  methods: {
    submitAlarm() {
      // TODO: complete Repeat
      const alarmConfig = { hours: this.hours, minutes: this.minutes, period: this.period, active: true, occurrence: new Repeat(new Date()) };

      // Check if we are editing an existing alarm
      if (this.alarm && this.alarm.id) {
        alarmConfig.id = this.alarm.id;
      }
      const alarm = new Alarm(alarmConfig);
      this.$emit('alarmSet', alarm);
    }
  }
};
</script>

<style lang="scss" scoped>
.card-wrapper {
  position: relative;
}
.close-btn {
  position: absolute;
  bottom: 95px;
  left: 60px;
  width: 42px;
  height: 42px;
  border: solid 1px rgba(0, 0, 0, 0.19);
  background-color: rgba(0, 0, 0, 0.15);
  color: $white;
}
.days-btn{
  width: 43px;
  height: 43px;
  display: inline-block;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.18);
  border-radius: 50%;
}
.submit-btn {
  position: absolute;
  bottom: -20px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 135px;
  height: 135px;
  border: solid 1px rgba(0, 0, 0, 0.19);
  background-color: rgba(0, 0, 0, 0.15);

  font-size: 25px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1.25px;
  color: $white;
}
.container{
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}

input[type="checkbox"]:not(:checked),input[type="checkbox"]:checked {
  position: absolute;
  left: -9999%;
}

input[type="checkbox"] + label {
  display: inline-block;
  padding-top: 15px;
  cursor: pointer;
  width: 50px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.18);
  color: white;
  margin-bottom: 10px;
  margin-right: 50px;
  border-radius: 50%;
}

input[type="checkbox"]:checked + label {
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  color: #606060;
}
  </style>
