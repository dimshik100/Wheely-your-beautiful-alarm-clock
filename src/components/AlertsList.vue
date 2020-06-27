<template>
 <div>
    <q-list bordered separator v-bind:key = "alert.id" v-for = "alert in alerts" class="flex justify-between alarm-item">
        <div>
          <q-item>
            <q-item-section class="alert-time">{{alert.time}}</q-item-section>
          </q-item>
          <q-item>
            <q-item-section class="alert-occurrence">{{alert.occurrence}}</q-item-section>
          </q-item>
        </div>
        <q-item>
          <q-item-section>
            <q-toggle
              color="white"
              dark
              v-model="toggle"
            />
          </q-item-section>
        </q-item>
    </q-list>
    </div>
</template>

<script>
export default {
  name: 'AlertsList',
  props: ['alerts'],
  data () {
    return {
      toggle: true
    }
  }
}
</script>

<style lang="scss" scoped>
.alert-time {
  width: 120px;
  height: 30px;
  font-family: Roboto, Helvetica, sans-serif;
  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1.2px;
  color: #7284fc;
}
.alert-occurrence {
  width: 39px;
  height: 20px;
  font-family: Roboto, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.8px;
  color: $white;
}
.alarm-item {
  height: 77.2px;
  border: solid 1.5px rgba(0, 0, 0, 0.16);
}
</style>
