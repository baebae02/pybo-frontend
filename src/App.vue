<template>
  <v-app>
    <v-app-bar absolute dense color="#FFFFFF" class="flex text-center justify-center align-center">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-app-bar-title>BAE!</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
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
