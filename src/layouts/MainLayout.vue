<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="shadow-2">
      <q-toolbar>
          <q-btn no-caps flat color="secondary" label="Edit" icon="create" @click="editClick"/>
          <q-space />
          <div class="header-title">Wheely</div>
          <q-space />
          <q-btn no-caps flat color="secondary" label="+Add" icon="add_alert" @click="createAlarm"/>
      </q-toolbar>
  </q-header>

    <q-page-container>
      <AlarmList :editMode="editMode" :alarms="alarms" @deleteAlarm="deleteAlarm" @editAlarm="editAlarmClicked" @toggleActiveState="toggleActiveState"/>

      <q-dialog
        v-model="alarmDialog"
        persistent
        :maximized="true"
        transition-show="slide-left"
        transition-hide="slide-right"
      >
      <AlarmDialogCard :alarm="currentAlarm" @alarmSet="setAlarm"/>
    </q-dialog>
    </q-page-container>
  </q-layout>
</template>

<script>
import AlarmList from '../components/AlarmList'
import AlarmDialogCard from '../components/AlarmDialogCard'
import { Repeat } from '../classes/Repeat.js';
import { Alarm } from '../classes/Alarm.js';

export default {
  name: 'MainLayout',
  components: {
    AlarmList,
    AlarmDialogCard
  },
  data () {
    return {
      editMode: false,
      alarmDialog: false,
      currentAlarm: null,
      alarms: [
        new Alarm({ hours: 1, minutes: 24, period: 'PM', active: true, occurrence: new Repeat(new Date()) }), // once
        new Alarm({ hours: 2, minutes: 30, period: 'AM', active: false, occurrence: new Repeat([3]) }), // repeatOneDay (local days of the week)
        new Alarm({ hours: 6, minutes: 15, period: 'PM', active: false, occurrence: new Repeat([2, 5]) }), // repeatMultipleDays
        new Alarm({ hours: 4, minutes: 55, period: 'PM', active: true, occurrence: new Repeat([0, 1, 2, 3, 4]) }), // repeatWeekdays
        new Alarm({ hours: 8, minutes: 20, period: 'PM', active: true, occurrence: new Repeat([5, 6]) }) // repeatWeekend
      ]
    }
  },
  methods: {
    editClick() {
      this.editMode = !this.editMode;
    },
    deleteAlarm(alarmId) {
      console.log("deleteAlarm -> alarmId", alarmId);
      this.confirmDelete(alarmId);
    },
    editAlarmClicked(alarmId) {
      console.log("editAlarm -> alarmId", alarmId);

      this.currentAlarm = this.alarms.find(alarm => alarm.id === alarmId);
      this.alarmDialog = true;
    },
    toggleActiveState(alarmId) {
      console.log("toggleActiveState -> alarmId", alarmId)
      for (const alarm of this.alarms) {
        if (alarm.id === alarmId) {
          alarm.active = !alarm.active;
          break;
        }
      }
    },
    createAlarm() {
      // resetting current alarm
      this.currentAlarm = null;
      this.alarmDialog = true;
    },
    confirmDelete (alarmId) {
      this.$q.dialog({
        title: 'Confirm Deletion',
        message: 'Are you sure you want to delete this Alarm?', // TODO: maybe show the Alarm details in the message?
        cancel: true,
        persistent: true
      }).onOk(() => {
        console.log("confirmDelete -> alarmId", alarmId)
        this.alarms = this.alarms.filter(alarm => alarm.id !== alarmId);
      });
    },
    setAlarm(newAlarm) {
      console.log("setAlarm -> alarm", newAlarm);
      // check if we already have this alarm in the list
      const alarmIndex = this.alarms.findIndex(alarm => alarm.id === newAlarm.id);

      if (alarmIndex !== -1) {
        // replace the old alarm with the new one

        // using splice to trigger Vue reactivity on alarms array
        this.alarms.splice(alarmIndex, 1, newAlarm);
      } else {
        // push new alarm to the alarms array
        this.alarms.push(newAlarm);
      }
    },
    saveAlrams() {
      console.log('Saving alarms');
      // TODO: Save current alarms state to storage
    }
  },
  watch: {
    alarms: {
      deep: true,
      handler (newAlarms, oldAlarms) {
        // console.log("oldAlarms", oldAlarms);
        // console.log("newAlarms", newAlarms);

        this.saveAlrams();
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
