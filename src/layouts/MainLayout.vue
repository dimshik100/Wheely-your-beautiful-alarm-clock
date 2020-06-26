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
          time: '13:30 PM',
          occurrence: 'once'
        },
        {
          id: 2,
          time: '14:30 PM',
          occurrence: 'mon'
        },
        {
          id: 3,
          time: '16:50 PM',
          occurrence: 'weekends'
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
    color: $white;
  }

</style>
