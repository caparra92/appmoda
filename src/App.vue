<template>
  <v-app data-app="true" class="application theme--light">
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
</style>
