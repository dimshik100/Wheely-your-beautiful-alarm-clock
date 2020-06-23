<template>
    <div>
       <div v-bind:key = "alert.id" v-for = "alert in alerts">
            <div class="flex justify-between rectangle">
              <div>
                <div class="alert-style">{{alert.hour}}</div>
                <div class="text-alert-style">{{alert.text}}</div>
              </div>
                <q-toggle
                  color="white"
                  dark
                  v-model="toggle"
                />
            </div>
       </div>
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
.alert-style {
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
.text-alert-style {
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
.rectangle {
  height: 77.2px;
  border: solid 1.5px rgba(0, 0, 0, 0.16);
  background-color: $primary;
}
</style>
