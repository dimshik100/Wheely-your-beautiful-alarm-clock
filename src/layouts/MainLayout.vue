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
      <AlarmList :editMode="editMode" :alarms="alarms" @deleteAlarm="deleteAlarmClicked" @editAlarm="editAlarmClicked"/>

      <q-dialog
      v-model="alarmDialog"
      persistent
      :maximized="true"
      transition-show="slide-left"
      transition-hide="slide-right"
    >
      <AlarmDialogCard @alarmSet="setAlarm"/>
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
        new Alarm(1, 24, "PM", true, new Repeat(new Date())), // once
        new Alarm(14, 30, "PM", true, new Repeat([3])), // repeatOneDay (local days of the week)
        new Alarm(1, 24, "AM", true, new Repeat([2, 5])), // repeatMultipleDays
        new Alarm(13, 24, "PM", true, new Repeat([0, 1, 2, 3, 4])), // repeatWeekdays
        new Alarm(3, 50, "AM", true, new Repeat([5, 6])) // repeatWeekend
      ]
    }
  },
  methods: {
    editClick() {
      this.editMode = !this.editMode;
    },
    deleteAlarmClicked(alarmId) {
      console.log("deleteAlarm -> alarmId", alarmId);
      this.confirmDelete(alarmId);
    },
    editAlarmClicked(alarmId) {
      console.log("editAlarm -> alarmId", alarmId);

      // TODO: set currentAlarm to be according to alarmId
      this.alarmDialog = true;
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
        // TODO: delete the alarm from alarms list
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    },
    setAlarm(alarm) {
      console.log("setAlarm -> alarm", alarm.time);
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
