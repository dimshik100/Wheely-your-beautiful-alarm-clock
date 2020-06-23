<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="shadow-2">
    <div class="toolBar">
      <q-toolbar>
      <!--
       <q-btn flat round dense icon="create" />
        <q-space />
        <div class="text-white">
        Wheely
        </div>
        <q-space />
        <q-btn flat round dense icon="add_alert" />
        -->
        <div class="Edit">Edit</div>
        <q-space />
        <div class="Wheely">Wheely</div>
        <q-space />
        <div class="Add">+Add</div>
      </q-toolbar>
    </div>
  </q-header>

    <q-page-container>
    <AlertsList v-bind:alerts = "alerts"/>
    </q-page-container>
  </q-layout>
</template>

<script>
import AlertsList from '../components/AlertsList'
export default {
  name: 'MainLayout',

  components: {
    AlertsList
  },

  data () {
    return {
      alerts: [
        {
          id: 1,
          hour: '13:30 PM',
          text: 'once'
        },
        {
          id: 2,
          hour: '14:30 PM',
          text: 'mon'
        },
        {
          id: 3,
          hour: '16:50 PM',
          text: 'weekends'
        }
      ]
    }
  }
}
</script>

<style>
  .Edit {
    width: 32px;
    height: 20px;
    font-family: CircularStd;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.8px;
    color: #ff5959;
  }
  .Wheely {
    width: 85.8px;
    height: 20px;
    font-family: CircularStd;
    font-size: 16px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.8px;
    text-align: center;
    color: #ffffff;
  }
  .Add {
    width: 47px;
    height: 20px;
    font-family: CircularStd;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.8px;
    color: #ff5959;
  }

</style>
