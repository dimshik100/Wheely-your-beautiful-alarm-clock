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
      <q-card class="bg-primary text-white">

        <q-card-section>
          <div class="text-h6">Alarm dialog</div>
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
        </q-card-section>
      </q-card>
    </q-dialog>
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
      editMode: false,
      alarmDialog: false,
      currentAlarm: null,
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
