<template>
  <v-app>
    <GNB/>
    <v-main>
      <router-view :key="$route.fullPath"/>
    </v-main>
  </v-app>
</template>

<script>
import GNB from '@/components/GNB.vue'
export default {
  name: 'App',
  components: {
      GNB,
  },
  data: () => ({
    //
  }),
};
</script>
<style>
    .GNB {
        position: fixed;
        top: 0;
    }
</style>