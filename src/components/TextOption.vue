<template>
    <span>
      <span v-if="PurPle" :class="{PurPle}">
        {{ content }}
        </span>
      <div v-else :class="{Bold, Gray, General}">
        {{ content }}
      </div>
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
      'PurPle',
  ],
}
</script>

<style>
    .Bold {
        font-weight: 700;
        font-size: 48px;
        color: #3E3E3E;
    }
    .Gray {
        font-weight: 700;
        font-size: 24px;
        color: #808080;
    }
    .General {
        font-size: 21px;
        font-weight: 500;
    }
    .PurPle {
        color: #744CF3;
        font-weight: 700;
    }
</style>
