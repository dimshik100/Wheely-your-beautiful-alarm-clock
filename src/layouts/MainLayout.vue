<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="shadow-2">
      <q-toolbar>
          <q-btn no-caps flat color="secondary" label="Edit" icon="create"/>
          <q-space />
          <div class="header-title">Wheely</div>
          <q-space />
          <q-btn no-caps flat color="secondary" label="+Add" icon="add_alert"/>
      </q-toolbar>
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

<style lang="scss" scoped>
  .header-title {
    font-family: Roboto, Helvetica, sans-serif;
    font-size: 16px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.8px;
    text-align: center;
    color: $white;
  }

</style>
