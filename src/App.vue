<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <Intro/>
      <router-view :key="$route.fullPath"/>
    </v-main>
  </v-app>
</template>

<script>
import Intro from './views/Intro';

export default {
  name: 'App',
  components: {
    Intro,
  },
  data: () => ({
    //
  }),
};
</script>
