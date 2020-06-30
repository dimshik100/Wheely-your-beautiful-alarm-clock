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

export default {
  name: "AlarmDialogCard",
  data () {
    return {
      hours: 1,
      minutes: 30,
      period: 'AM', // AM | PM
      alarm: { time: '123' }
      // gradientData: null // TODO: init with some data
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
      this.$emit('alarmSet', this.alarm);
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
</style>
