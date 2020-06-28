<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="shadow-2">
      <q-toolbar>
          <q-btn no-caps flat color="secondary" label="Edit" icon="create"/>
          <q-space />
          <div class="header-title">Wheely</div>
          <q-space />
          <q-btn no-caps flat color="secondary" label="+Add" icon="add_alert"/>
      </q-toolbar>
  </q-header>

    <q-page-container>
    <AlertsList v-bind:alerts = "alerts"/>
      <AlarmOccurrence :repeat="repeatOneDay2" />
      <br>
      <br>
      <!-- <AlarmOccurrence :repeat="repeatWeekend" />
      <br>
      <AlarmOccurrence :repeat="repeatWeekdays" />
      <br>
      <AlarmOccurrence :repeat="repeatOneDay" />
      <br>
      <AlarmOccurrence :repeat="repeatMultipleDays" />
      <br>
      <AlarmOccurrence :repeat="once" /> -->
    </q-page-container>
  </q-layout>
</template>

<script>
import AlertsList from '../components/AlertsList'
import AlarmOccurrence from 'components/AlarmOccurrence.vue'
import { Repeat } from '../classes/Repeat.js';

export default {
  name: 'MainLayout',

  components: {
    AlertsList,
    AlarmOccurrence
  },

  data () {
    return {
      alerts: [
        {
          id: 1,
          time: '13:30 PM',
          occurrence: 'once'
        },
        {
          id: 2,
          time: '14:30 PM',
          occurrence: 'mon'
        },
        {
          id: 3,
          time: '16:50 PM',
          occurrence: 'weekends'
        }
      ],
      repeatOneDay2: new Repeat([3]),
      repeatOneDay: {
        days: [2] // local days of the week
      },
      repeatMultipleDays: {
        days: [2, 4]
      },
      repeatWeekdays: {
        days: [0, 1, 2, 3, 4]
      },
      repeatWeekend: {
        days: [5, 6]
      },
      once: {
        date: new Date()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .header-title {
    font-family: Roboto, Helvetica, sans-serif;
    font-size: 16px;
    font-weight: bold;
    color: $white;
  }

</style>
