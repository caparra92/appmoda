<template>
  <v-app data-app="true" class="application theme--light">
    <v-main>
      <Login/>
    </v-main>
  </v-app>
</template>

<script>
import Login from './views/Login';

export default {
  name: 'App',

  components: {
    Login,
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
