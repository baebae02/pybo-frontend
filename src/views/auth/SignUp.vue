<template>
  <div class="signup">
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
		<div class="welcomeText">몇 가지만<br/>
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
.signup {
  font-family: 'Noto Sans KR', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
	
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #2c3e50;
  min-height: 100vh;
}

.wrapper {
	display: flex;
	border: 2px solid #a0a0a0;
	border-radius: 16px;
	flex-direction: column;
	padding: 40px 64px;
	margin-top: 40px;
}
	
form {
	display: flex;
	flex-direction: column;
	margin-top: 40px;
}

.welcomeText {
	font-size: 40px;
	font-weight: bold;
	font-family: 'Noto Sans KR', sans-serif;
	
	line-height: 54px;
	
	background: linear-gradient(180deg, #744CF3 0%, #B8A2FF 100%);
	-webkit-text-fill-color: transparent;
	background-clip: text;
}
.inputarea {
	margin-bottom: 24px;
	display: flex;
	flex-direction: column;
    justify-content: left;
}

.inputarea label {
	text-align: left;
	color: #808080;
	font-size: 20px;
    font-weight: bold;
	
	margin-left: 4px;
}

.inputarea input {
	height: 61px;
	border: 1px solid #808080;
	border-radius: 16px;
	
	font-size: 20px;
	font-weight: bold;
	
	padding: 16px 80px 16px 12px;
}

.nextBtn {
	background: #744CF3;
	border-radius: 16px;
	font-size: 24px;
	color: #FFFFFF;
	font-weight: bold;
	padding: 16px 0;
    margin-top: 100px;
	
	cursor: pointer;
}
	
.nextBtn:hover {
	background-color: #643fd9;
	color: #e3e3e3;
}
.nextBtn:active {
	background-color: #5135AA;
	color: #B3B3B3;
}
</style>
