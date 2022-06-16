<template>
    <v-app-bar fixed color="#744CF3" class="flex text-center justify-center align-center">
      <v-app-bar-nav-icon class="white"></v-app-bar-nav-icon>
      <v-app-bar-title class="white--text">BAE!</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn icon class="white">
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on" class="white">
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
</template>

<script>
export default {
  name: 'GNB',
  components: {
  },
  data: () => ({
    //
  }),
};
</script>