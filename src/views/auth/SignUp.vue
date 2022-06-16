<template>
  <div id="app">
	<div v-if="page" class="wrapper">
		<div class="welcomeText">스터디의 <br/>
		일원이 된 걸 <br/>
		환영합니다!
        </div>
		<form>
			<div class="inputarea">
				<label for="nickname">아이디</label>
				<input type="text" id="nickname" v-model="nickname"/>
			</div>
			<div class="inputarea">
				<label for="password1">비밀번호</label>
				<input type="password" id="password1" v-model="password1"/>
			</div>
			<div class="inputarea">
				<label for="password2">비밀번호 확인</label>
				<input type="password" id="password2" v-model="password2"/>
			</div>
			<button class="nextBtn" click="pagination">다음</button>
		</form>
	</div>
    <div v-else class="wrapper">
		<div class="welcomeText">몇 가지만 <br/>
		더 입력하면<br/>
		가입이 완료돼요 :)
        </div>
        <form type="submit">
			<div class="inputarea">
				<label for="username">이름</label>
				<input type="text" id="username" v-model="username"/>
			</div>
            <div class="inputarea">
				<label for="phone">전화번호</label>
				<input type="text" id="phone" v-model="phone"/>
			</div>
			<div class="inputarea">
				<label for="email">이메일</label>
				<input type="text" id="email" v-model="email"/>
			</div>
            <div class="inputarea">
				<label for="baekjoon">백준 아이디</label>
				<input type="text" id="baekjoon" v-model="baekjoon"/>
			</div>
            <button class="nextBtn" click="signUp">회원가입</button>
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
            page: true,
            //csrf: document.head.querySelector('meta[name="csrf-token"]').content
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
                    this.loginSuccess = true;
                    alert('회원가입 되었습니다.');
                }
                else {
                   alert(result.status);
               }
            } catch (err) {
                    this.loginError = true;
                    throw new Error(err);
            }
        },
        pagination() {
            this.page = !this.page;
            console.log(this.page);
        },
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
  align-items: center;
  color: #2c3e50;
  margin-top: 64px;
}

.wrapper {
	display: flex;
	border: 2px solid #808080;
	border-radius: 16px;
	flex-direction: column;
	padding: 40px;
    flex-grow: 1;
    margin: 0px 600px 0px 600px;
}
form {
	display: flex;
	justify-content: left;
	flex-direction: column;
}

.welcomeText {
	background: linear-gradient(126.3deg, #744CF3 0%, #B8A2FF 100%);
	font-size: 35px;
	font-weight: 700;
	line-height: 50px;
	-webkit-text-fill-color: transparent;
	background-clip: text;
	text-align: left;
}
.inputarea {
	margin: 15px 0px;
	display: flex;
	flex-direction: column;
    justify-content: left;
}

.inputarea label {
	text-align: left;
    font-weight: 700;
	font-size: 20px;
	color: #808080;
}

.inputarea input {
	height: 55px;
	border: 1px solid #808080;
	border-radius: 16px;

}

.nextBtn {
	flex-grow: 1;
	height: 55px;
	background: #744CF3;
	border-radius: 16px;
	font-size: 24px;
	color: #FFFFFF;
	font-weight: 700;
    margin: 68px 0px 12px 0px;
}
</style>
