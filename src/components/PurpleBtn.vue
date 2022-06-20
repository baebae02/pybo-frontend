<template>
    <button  type="button" class="btn">{{ content }}</button>
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
  width: 130px;
  color: #FFFFFF;
  font-size: 20px;
  padding: 8px 0;
  text-align: center;
  font-weight: bold;
  border-radius: 20px;
}
@media (max-width: 800px) {

}
</style>
