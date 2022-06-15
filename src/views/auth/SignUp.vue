<template>
  <div id="app">
	<div class="wrapper">
		<div class="welcomeText">스터디의 <br>
		일원이 된 걸 <br>
		환영합니다!</div>
		<form v-on:submit="submitForm">
		<input type="hidden" name="_token" v-bind:value="csrf"/>
			<div v-if="page == 1" class="inputarea">
				<label for="nickname">아이디</label>
				<input type="text" id="nickname" v-model="nickname"/>
			</div>
			<div v-if="page == 1" class="inputarea">
				<label for="password1">비밀번호</label>
				<input type="password" id="password1" v-model="password1">
			</div>
			<div v-if="page == 1" class="inputarea">
				<label for="password2">비밀번호 확인</label>
				<input type="password" id="password2" v-model="password2">
			</div>
			<div v-if="page == 2" class="inputarea">
				<label for="username">사용자 이름</label>
				<input type="text" id="username" v-model="username"/>
			</div>
			<div v-if="page == 2" class="inputarea">
				<label for="email">이메일</label>
				<input type="text" id="email" v-model="email">
			</div>
			<button type="submit" class="nextBtn">다음</button>
		</form>
	</div>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  data() {
    return {
    questions : [],
    username : '',
	nickname: '', 
	password1: '', 
	password2: '',
	email: '', 
	phone: '',
	baekjoon: '',
	loginSuccess: false,
    loginError: false,
	page: 1,
    };
  },
  methods: {
    signUp() {
      // axios를 이용하여 API 호출 (component 안에서 axios를 this.$axios로 사용할 수 있습니다.)
      try {
			const result = this.$axios.post('https://baebae02.kr/auth/signUp', {
				username: this.username, 
				nickname: this.nickname, 
				password1: this.password1,
				password2: this.password2, 
				email: this.email, 
				phone: this.phone,
				baekjoon: this.baekjoon
			});
			if (result.status == 200) {
				this.loginSuccess = true
				alert('회원가입 되었습니다.')
			}
		} catch (err) {
				this.loginError = true;
				throw new Error(err)
		}
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
  display: flex;
  justify-content: center;
  color: #2c3e50;
}

.wrapper {
	display: flex;
	border: 2px solid #808080;
	border-radius: 16px;
	flex-direction: column;
	padding: 65px;
}
form {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}

.welcomeText {
	background: linear-gradient(126.3deg, #744CF3 0%, #B8A2FF 100%);
	font-size: 40px;
	font-weight: 700;
	line-height: 58px;
	-webkit-text-fill-color: transparent;
	background-clip: text;
	text-align: left;
}
.inputarea {
	margin: 12px 0px;
	display: flex;
	flex-direction: column;
}

.inputarea label {
	text-align: left;
	font-size: 20px;
	color: #808080;
}

.inputarea input {
	width: 455px;
	height: 61px;
	border: 1px solid #808080;
	border-radius: 16px;

}

.nextBtn {
	width: 455px;
	height: 67px;
	background: #744CF3;
	border-radius: 16px;
	font-size: 24px;
	color: #FFFFFF;
	font-weight: 700;
}
</style>
