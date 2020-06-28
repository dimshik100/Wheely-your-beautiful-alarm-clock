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
    <AlarmList :alarms="alarms"/>
    </q-page-container>
  </q-layout>
</template>

<script>
import AlarmList from '../components/AlarmList'
import { Repeat } from '../classes/Repeat.js';

export default {
  name: 'MainLayout',

  components: {
    AlarmList
  },

  data () {
    return {
      alarms: [
        {
          id: 1,
          time: '13:30 PM',
          active: true,
          occurrence: new Repeat(new Date()) // once
        },
        {
          id: 2,
          time: '14:30 PM',
          active: false,
          occurrence: new Repeat([3]) // repeatOneDay (local days of the week)
        },
        {
          id: 3,
          time: '16:50 PM',
          active: true,
          occurrence: new Repeat([2, 5]) // repeatMultipleDays
        },
        {
          id: 4,
          time: '16:50 PM',
          active: false,
          occurrence: new Repeat([0, 1, 2, 3, 4]) // repeatWeekdays
        },
        {
          id: 5,
          time: '16:50 PM',
          active: true,
          occurrence: new Repeat([5, 6]) // repeatWeekend
        }
      ]
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
