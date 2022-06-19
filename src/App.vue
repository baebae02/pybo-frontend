<template>
  <div class="app">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <GNB/>
    <div class="content">
      <router-view :key="$route.fullPath"/>
    </div>
  </div>
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
    
* { font-family: 'Noto Sans KR'; }

.app {
    width: 100%;
    height: auto;
}
body {
  margin: 0;
}
p {
  margin: 0;
}
button {
  padding: 0;
}

</style>