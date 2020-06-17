<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="shadow-2">
      <q-toolbar>

        <q-toolbar-title>
          Wheely
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',

  components: {

  },

  data () {
    return {
    }
  }
}
</script>
