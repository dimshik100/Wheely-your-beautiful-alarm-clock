<template>
 <div>
    <q-list separator :class="{'edit-mode': editMode}">
        <transition-group name="list">
          <q-item v-bind:key="alarm.id" v-for="alarm in alarms" class="alarm-item">
            <q-item-section side center class="edit-mode-actions">
              <q-btn size="12px" flat dense stack label="Delete" @click="deleteAlarm(alarm)" icon="delete" />
              <q-btn size="12px" flat dense stack label="Edit" @click="editAlarm(alarm)" icon="edit" />
            </q-item-section>
            <q-item-section>
              <q-item-label class="alarm-time">{{alarm.getDisplayTime()}}</q-item-label>
              <q-item-label class="alarm-occurrence" lines="1" caption><AlarmOccurrence :repeat="alarm.occurrence"/></q-item-label>
            </q-item-section>
            <q-item-section side center>
              <q-toggle color="white" :value="alarm.active" @input="alarmActiveStateChanged($event, alarm)"/>
            </q-item-section>
          </q-item>
        </transition-group>
    </q-list>
    </div>
</template>

<script>
import AlarmOccurrence from './AlarmOccurrence.vue'

export default {
  name: 'AlarmList',
  props: {
    alarms: {
      type: Array,
      required: true
    },
    editMode: {
      type: Boolean,
      default: true
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
    alarmActiveStateChanged(event, alarm) {
      console.log(event, alarm.id);
      this.$emit('toggleActiveState', alarm.id);
    },
    deleteAlarm(alarm) {
      this.$emit('deleteAlarm', alarm.id);
    },
    editAlarm(alarm) {
      this.$emit('editAlarm', alarm.id);
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
  overflow: hidden;
  border-bottom: solid 1.5px rgba(0, 0, 0, 0.16);
}

.q-list--separator > .q-item-type + .q-item-type {
  border-top: none;
}

.edit-mode-actions {
  width: 0;
  overflow: hidden;
  padding: 0;
  transition: width 0.2s ease-in-out;
  .edit-mode & {
    width: 100px;

  }
}

.list-enter-active, .list-leave-active {
  transition: all 0.3s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
