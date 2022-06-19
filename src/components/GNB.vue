<template>
    <div class="gnb">
      <img src="@/assets/logo.svg" alt="" @click="goHome">
      <div class="right">
        <router-link :class="{text: true, now: true}" to="/">
          소개
        </router-link>
        <router-link :class="{text: true, now}" to="/study">
          스터디
        </router-link>
        <router-link :class="{text: true, now}" to="/">
          과제
        </router-link>
        <router-link :class="{text: true, now}" to="/">
          출석부
        </router-link>
        <router-link class="sign" to="/signup">
          로그인
        </router-link>
      </div>
	</div>
</template>

<script>
import router from "@/router";

export default {
  name: 'GNB',
  components: {
  },
  methods: {
    goHome() {
      router.push({ path: '/' })
    }
  },
  data: () => ({
    //
  }),
};
</script>

<style lang="scss" scoped>
  a {
    text-decoration: none;
  }
	.gnb {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;

		z-index: 100;

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;

		background-color: #754ff3e6;
		backdrop-filter: blur(4px);
		padding: 0 40px;
		height: 59px;
		& > img {
			cursor: pointer;
		}
		& > .right {
			display: flex;
			flex-diretion: row;
			align-items: center;
			gap: 40px;
			& > .text {
				color: #FFFFFF;
				font-size: 16px;
				font-weight: bold;
				cursor: pointer;
				padding: 10px 10px;

				user-select: none;

				&:hover {
					color: #e5e5e5;
				}
				&:active {
					color: #B3B3B3;
				}
			}
			& > .now {
				color: #FFB800;
				&:hover {
					color: #E5A600;
				}
				&:active {
					color: #B38100;
				}
			}
			& > .sign {
				color: #ffffff80;
				font-size: 16px;
				font-weight: bold;
				border: solid 2px #ffffff80;
				border-radius: 8px;
				cursor: pointer;
				padding: 8px 16px;

				user-select: none;

				&:hover {
					color: #ffffff;
					border: solid 2px #ffffff00;
					background-color: #ffffff80;
				}
				&:active {
					color: #E5E5E5;
					border: solid 2px #ffffff00;
					background-color: #AD9DE0;

				}
			}
		}
	}
	
</style>