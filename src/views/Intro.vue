<template>
  <div id="app">
<!--    <v-text-field-->
<!--        solo-->
<!--        label="Your Name Here"-->
<!--        clearable-->
<!--    ></v-text-field>-->
<!--    <button @click="getQuestion">BUTTON</button>-->
<!--    <ul v-for="question in this.questions.question" :key="question.id">-->
<!--      <li>subject: {{ question.subject}}</li>-->
<!--      <li>content: {{ question.content}}</li>-->
<!--    </ul>-->
    <div class="topText">
      <h1>Welcome to BaeBae!</h1>
      <p>안녕하세요, 초보 개발자 배서현입니다.<br>재능보단 노력이 저의 무기입니다😆</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Intro',
  data() {
    return {
      questions : [],
    };
  },
  methods: {
    getQuestion() {
      // axios를 이용하여 API 호출 (component 안에서 axios를 this.$axios로 사용할 수 있습니다.)
      this.$axios.get('http://127.0.0.1:5000/question/list').then(response => {
        this.questions= response.data
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.topText {
  display: flex;
  background-color: antiquewhite;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 80px 0px;
  padding: 20px;
}
</style>
