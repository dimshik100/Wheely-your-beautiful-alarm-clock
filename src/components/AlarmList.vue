<template>
 <div>
    <q-list separator>
          <q-item v-bind:key="alarm.id" v-for="alarm in alarms" class="alarm-item">
            <q-item-section>
              <q-item-label class="alarm-time">{{alarm.time}}</q-item-label>
              <q-item-label class="alarm-occurrence" caption><AlarmOccurrence :repeat="alarm.occurrence"/></q-item-label>
            </q-item-section>
            <q-item-section side center>
              <q-toggle color="white" :value="alarm.active" @input="alarmChanged($event, alarm)"/>
            </q-item-section>
          </q-item>
    </q-list>
    </div>
</template>

<script>
import AlarmOccurrence from './AlarmOccurrence.vue'

export default {
  name: 'AlarmList',
  props: {
    alarms: {
      type: Array, // TODO: Change later to Alarm object,
      required: true
    }
  },
  components: {
    AlarmOccurrence
  },
  data () {
    return {
    }
  },
  methods: {
    alarmChanged(event, alarm) {
      console.log(event, alarm.id);
    }
  }
}
</script>

<style lang="scss" scoped>
.alarm-time {
  font-family: Roboto, Helvetica, sans-serif;
  font-size: 24px;
  letter-spacing: 1.2px;
  font-weight: bold;
  color: #7284fc;
}
.alarm-occurrence {
  font-family: Roboto, Helvetica, sans-serif;
  font-size: 16px;
  letter-spacing: 0.8px;
  color: $white;
}
.alarm-item {
  height: 77px;
  border-bottom: solid 1.5px rgba(0, 0, 0, 0.16);
}

.q-list--separator > .q-item-type + .q-item-type {
  border-top: none;
}

</style>
