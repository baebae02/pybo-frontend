<template>
    <span :class="{Bold, Gray, General, Purple, Bolder}">
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
      'Bolder',
  ],
}
</script>

<style>
    .Bold {
        font-weight: bold;
        font-size: 36px;
        color: #3E3E3E;
    }
    .Bolder {
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
    
    @media (max-width: 800px) {
         .Bold {
            font-size: 36px;
        }
        .Gray {
            font-size: 18px;
        }
        .General {
            font-size: 14px;
        }    
    }
</style>
