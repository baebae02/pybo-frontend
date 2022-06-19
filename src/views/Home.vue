<template>
	<div class="main">
		<div class="left">
			<div class="wave">
			</div>
		</div>
		<div class="right">
			<div class="title">
				<div class="text">
					Study With Bae
				</div>
				<img src="@/assets/pencil.svg">
			</div>
			<div class="sub-title">
				코딩 테스트 합격을 위한 그날까지	
			</div>
			<div class="login-form">
				<input type="text" placeholder="아이디" />
				<div class="line" />
				<input type="password" placeholder="비밀번호" />
			</div>
			<button class="login-btn" click="pagination">로그인</button>
			<div class="link-signup">
				계정이 없으신가요?
			</div>
		</div>
	</div>
</template>

<script>
    export default {
      name: 'Main',
      methods: {
      },
      data() {
        return {
        }
      }
    }
</script>

<style lang="scss" scoped>
	.main {
		display: flex;
		flex-direction: row;
		
		min-height: 100vh;
		& > .left {
			position: relative;
			overflow: hidden;
			transform: translate3d(0, 0, 0);
			flex-grow: 1;
			width: 50%;
			& > .wave {
				position: absolute;
				top: 0;
				left: -50vw;
				width: 100vw;
				height: 100vw;
				border-radius: 45% 35% 45% 40%;
				background: linear-gradient(to right, #744CF3, #9878FF);
				animation: wave 6s infinite linear;
			}
		}
		& > .right {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;
			flex-grow: 1;
			
			& > .title {
				display: flex;
				flex-direciton: row;
				align-items: center;
				
				& > .text {
					color: #000000;
					font-size: 36px;
					font-weight: bold;
					margin-right: 4px;
				}
			}
			& > .sub-title {
				color: #808080;
				font-size: 24px;
				margin-bottom: 28px;
			}
			& > .login-form {
				display: flex;
				flex-direction: column;
				border: solid 1px #808080;
				border-radius: 4px;
				width: 80%;
				margin-bottom: 20px;
				
				& > .line {
					height: 1px;
					background-color: #808080;
				}
				& > input {
					flex-grow: 1;
					outline: none;
					padding: 16px;
					font-size: 16px;
				}
			}
			& > .login-btn {
				width: 80%;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: center;
				background-color: #744CF3;
				
				padding: 8px 0;
				border-radius: 4px;
				
				color: #ffffff;
				font-size: 24px;
				font-weight: bold;
				
				&:hover {
					background-color: #643fd9;
					color: #e3e3e3;
				}
				&:active {
					background-color: #5135AA;
					color: #B3B3B3;
				}
			}
			& > .link-signup {
				color: #808080;
				font-size: 16px;
				text-decoration: underline;
				margin-top: 4px;
				
				cursor: pointer;
				user-select: none;
				&:hover {
					color: #303030;
				}
			}
		}
	}
	@keyframes wave {
		100% {
			transform: rotate(360deg);
		}
	}
</style>
