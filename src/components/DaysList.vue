<template>
<div class="container">
    <div class="checkbox-label">
      <input type="checkbox" id="check1" class="visually-hidden" value=0 v-model="days" v-on:click="emitToParent"/>
      <label for="check1">sun</label>
    </div>
    <div class="checkbox-label">
      <input type="checkbox" id="check2" class="visually-hidden" value=1 v-model="days" v-on:click="emitToParent"/>
      <label for="check2">mon</label>
    </div>
    <div class="checkbox-label">
      <input type="checkbox" id="check3" class="visually-hidden" value=2 v-model="days" v-on:click="emitToParent"/>
      <label for="check3">tue</label>
    </div>
    <div class="checkbox-label">
      <input type="checkbox" id="check4" class="visually-hidden" value=3 v-model="days" v-on:click="emitToParent"/>
      <label for="check4">wed</label>
    </div>
    <div class="checkbox-label">
      <input type="checkbox" id="check5" class="visually-hidden" value=4 v-model="days" v-on:click="emitToParent"/>
      <label for="check5">thu</label>
    </div>
    <div class="checkbox-label">
      <input type="checkbox" id="check6" class="visually-hidden" value=5 v-model="days" v-on:click="emitToParent"/>
      <label for="check6">fri</label>
    </div>
    <div class="checkbox-label">
      <input type="checkbox" id="check7" class="visually-hidden" value=6 v-model="days" v-on:click="emitToParent"/>
      <label for="check7">sat</label>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DaysList',
  data () {
    return {
      days: []
    }
  },
  methods: {
    emitToParent (event) {
      this.$emit('childToParent', this.days.map(Number));
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  display: flex;
  justify-content: center;
  flex-direction: row;
  text-align: center;
  flex-wrap: wrap;
}

.visually-hidden {
    opacity: 0;
}

.checkbox-label{
  border-radius: 0.5rem;
}

.checkbox-label label {
  display: inline-block;
  padding-top: 15px;
  width: 50px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.18);
  color: white;
  margin-bottom: 10px;
  margin-right: 8px;
  border-radius: 50%;
}

.checkbox-label input:checked ~ label {
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  color: #606060;
}
</style>
