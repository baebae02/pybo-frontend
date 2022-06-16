<template>
    <span :class="{Bold, Gray, General, Purple}">
        {{ content }}
    </span>
</template>

<script>
export default {
  name: 'TextOption',
  data() {
    return {
      
    };
  },
  props: [
      'content',
      'Bold',
      'Gray',
      'General',
      'Purple',
  ],
}
</script>

<style>
    * { font-family: 'Noto Sans KR'; }
    .Bold {
        font-weight: bold;
        font-size: 48px;
        color: #3E3E3E;
    }
    .Gray {
        font-weight: bold;
        font-size: 24px;
        color: #808080;
    }
    .General {
        font-size: 20px;
        font-weight: 500;
    }
    .Purple {
        color: #744CF3;
        font-weight: bold;
    }
</style>
