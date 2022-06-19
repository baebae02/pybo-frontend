<template>
  <div class="signup">
    <div class="wrapper">
      <form type="submit">
      <input type="hidden" name="_token" :value="csrf">
        <div v-if="page">
          <div class="welcomeText">스터디의 <br/>
          일원이 된 걸 <br/>
          환영합니다!
          </div>
          <div class="inputWrapper">
            <div class="inputArea">
              <label for="nickname">아이디</label>
              <input type="text" id="nickname" v-model="nickname"/>
            </div>
            <div class="inputArea">
              <label for="password1">비밀번호</label>
              <input type="password" id="password1" v-model="password1"/>
            </div>
            <div class="inputArea">
              <label for="password2">비밀번호 확인</label>
              <input type="password" id="password2" v-model="password2"/>
            </div>
          </div>
          <button type="button" class="nextBtn" @click="pagination">다음</button>
        </div>
        <div v-else>
          <div class="welcomeText">몇 가지만<br/>
          더 입력하면<br/>
          가입이 완료돼요 :)
          </div>
          <div class="inputWrapper">
            <div class="inputArea">
              <label for="username">이름</label>
              <input type="text" id="username" v-model="username"/>
            </div>
            <div class="inputArea">
              <label for="phone">전화번호</label>
              <input type="text" id="phone" v-model="phone"/>
            </div>
            <div class="inputArea">
              <label for="email">이메일</label>
              <input type="text" id="email" v-model="email"/>
            </div>
            <div class="inputArea">
              <label for="baekjoon">백준 아이디</label>
              <input type="text" id="baekjoon" v-model="baekjoon"/>
            </div>
          </div>
          <button class="nextBtn" type="button" @click="signUp">회원가입</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
    export default {
      name: 'SignUp',
      data() {
        return {
            csrf: document.head.querySelector('meta[name="csrf-token"]') ? document.head.querySelector('meta[name="csrf-token"]').content : '',
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
        };
      },
      methods: {
        async signUp() {
          // axios를 이용하여 API 호출 (component 안에서 axios를 this.$axios로 사용할 수 있습니다.
            const res = await this.$axios.post('http://127.0.0.1:5000/auth/signup', {
              username: this.username,
              nickname: this.nickname,
              password1: this.password1,
              password2: this.password2,
              email: this.email,
              phone: this.phone,
              baekjoon: this.baekjoon
            }).catch(function (error) {
              console.log(error);
            });
            console.log(res);
            if (res.status === 200) {
              this.loginSuccess = true;
              alert('회원가입 되었습니다.');
            } else {
              alert(res.status);
            }
        },
        pagination() {
            this.page = !this.page;
            console.log(this.page);
        },
      }
    }
</script>

<style lang="scss" scoped>
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
  width: 100%;
	border: 2px solid #a0a0a0;
	border-radius: 16px;
	flex-direction: column;
	padding: 0 64px;
  justify-content: space-between;
	margin: 169px 457px;
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
  margin: 40px 0;
	background: linear-gradient(180deg, #744CF3 0%, #B8A2FF 100%);
	-webkit-text-fill-color: transparent;
	background-clip: text;
}

.inputWrapper {
  margin-bottom: 100px;
}
.inputArea {
	margin: 12px 0;
	display: flex;
	flex-direction: column;
  justify-content: left;
}

.inputArea label {
	text-align: left;
	color: #808080;
	font-size: 20px;
  font-weight: bold;
	
	margin-left: 4px;
}

.inputArea input {
  height: 61px;
  border: 1px solid #808080;
  border-radius: 16px;
  font-size: 20px;
  font-weight: bold;
  padding: 16px 80px 16px 12px;
}

.inputarea {
	margin-bottom: 24px;
	display: flex;
	flex-direction: column;
    justify-content: left;
	& > label {
		text-align: left;
		color: #808080;
		font-size: 20px;
		font-weight: bold;

		margin-left: 4px;
	}
	& > input {
		height: 61px;
		border: 1px solid #808080;
		border-radius: 16px;

		font-size: 20px;
		font-weight: bold;

		padding: 16px 80px 16px 12px;
	}
}

.nextBtn {
	background: #744CF3;
	border-radius: 16px;
	font-size: 24px;
	color: #FFFFFF;
	font-weight: bold;
	padding: 16px 0;
  width: 100%;
  margin-bottom: 52px;
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

@media (max-width: 800px) {
  .wrapper {
    padding: 0 32px;
    border: none;
    margin: 0;
  }
  .welcomeText {
    font-size: 30px;
  }
}
</style>
