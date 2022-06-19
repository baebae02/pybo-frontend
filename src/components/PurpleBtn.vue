<template>
  <div class="btn">{{ content }}</div>
</template>

<script>
export default {
  name: 'PurpleBtn',
  data() {
    return {

    };
  },
  props: [
    'content',
  ],
}
</script>

<style>
.btn {
  background-color: rgba(116, 76, 243, 1);
  color: #FFFFFF;
  font-size: 20px;
  width: fit-content;
  font-weight: bold;
  border-radius: 20px;
  padding: 8px 40px;
}
@media (max-width: 800px) {

}
</style>
