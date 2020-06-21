<template>
    <div>
       <div v-bind:key = "time.id" v-for = "time in times">
            <div class="container">
                <div class="left">
                    <div class="-AM">{{time.hour}}</div>
                    <div class="text">{{time.text}}</div>
                </div>
                <div class="right">
                    <q-toggle
                        v-model="value"
                        color="grey"
                    />
                </div>
            </div>
       </div>
    </div>
</template>

<script>
export default {
  name: 'Hours',
  props: ['times'],
  data () {
    return {
      value: true
    }
  }
}
</script>

<style scoped>
.-AM {
  width: 120px;
  height: 30px;
  font-family: CircularStd;
  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1.2px;
  color: #7284fc;
}
.text {
  width: 39px;
  height: 20px;
  font-family: CircularStd;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.8px;
  color: #d2d2d2;
}
.container {
   display: flex;
   flex-direction: row;
}
.right{
     width: 56px;
        height: 32px;
        border-radius: 93.8px;
}
</style>
