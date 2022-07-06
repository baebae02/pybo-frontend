<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <br><br><br>
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">id: </label>
          <input id="username" type="text" v-model="username" />
        </div>
        <div>
          <label for="password">pw: </label>
          <input id="password" type="text" v-model="password" />
        </div>
        <button type="submit" class="btn">정보확인</button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script>
// import { loginUser } from '@/api/index.js';

export default {
  name: 'About',
  data() {
    return {
      // form values
      username: '',
      password: '',
      logMessage: '',
    };
  },
  methods: {
    async submitForm() {
      const userData = {
        username: this.username,
        password: this.password
      };
      // const { data } = await loginUser(userData);
      // console.log(data.username);
      // alert(data.username);
      // this.logMessage = `${data.username} 님이 로그인하셨습니다`;
      // this.initForm();
      this.$store.dispatch('LOGIN', userData)
          .then(() => {
            this.$router.push('About');
          });
    },
    initForm() {
      this.username = '';
      this.password = '';
    },
  },
};
</script>