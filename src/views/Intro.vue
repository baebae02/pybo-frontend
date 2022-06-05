<template>
  <div id="app">
    <v-text-field
        solo
        label="Your Name Here"
        clearable
    ></v-text-field>
    <button @click="getQuestion">BUTTON</button>
    <ul v-for="question in this.questions.question" :key="question.id">
      <li>subject: {{ question.subject}}</li>
      <li>content: {{ question.content}}</li>
    </ul>
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
</style>
