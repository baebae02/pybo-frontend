<template>
    <div id="template">
        <img src="@/assets/cheer-up.svg" alt=""/>
        <div class="text">
          이번 과제도 수고했어요!
        </div>
        <div class="bold">
            7월 20일 오후 6시, <span style="color:#744CF3;">구글미트</span>
            에서 만나요!👋
        </div>
        <div class="split-bar"></div>
    </div>
</template>

<script>
export default {
  name: 'SubjectComplete',
  data() {
    return {

    };
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
 #template {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    min-height: 100vh;
    margin-top: 60px;
     
     img {
         margin: 24px;
     }
     
     .text {
         color: #808080;
         font-weight: bold;
         font-size: 28px;
     }
     .bold {
         font-size: 36px;
         font-weight: bold;
         color: #3E3E3E;
     }
     .split-bar {
            width: 80%;
            height: 1px;
            background-color: #C0C0C0; 
            margin: 100px 0 0 0;
      }
}
</style>
