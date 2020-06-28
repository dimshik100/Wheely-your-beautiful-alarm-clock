<template>
 <div>
    <q-list separator>
          <q-item v-bind:key="alert.id" v-for="alert in alerts" class="alarm-item">
            <q-item-section>
              <q-item-label class="alert-time">{{alert.time}}</q-item-label>
              <q-item-label class="alert-occurrence" caption>{{alert.occurrence}}</q-item-label>
            </q-item-section>
            <q-item-section side center>
              <q-toggle color="white" v-model="toggle" />
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
  font-family: Roboto, Helvetica, sans-serif;
  font-size: 24px;
  letter-spacing: 1.2px;
  font-weight: bold;
  color: #7284fc;
}
.alert-occurrence {
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
