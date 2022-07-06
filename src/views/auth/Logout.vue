<template>
  <div class="logout">
  </div>
</template>

<script>

import router from "@/router";

export default {
  name: 'Logout',
  data() {
    return {
    };
  },
  created() {
    this.$store.state.username = '';
    router.push({ path: '/' });
  },
};
</script>
