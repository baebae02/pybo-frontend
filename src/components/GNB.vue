<template>
    <div class="gnb">
      <img src="@/assets/logo.svg" alt="" @click="goHome">
      <nav class="nav">
        <router-link class=text class-active="active" to="/introduce" exact>
          소개
        </router-link>
        <router-link class=text class-active="active" to="/study" exact>
          스터디
        </router-link>
        <router-link class=text class-active="active" to="/subject" exact>
          과제
        </router-link>
        <router-link class=text class-active="active" to="/attendance" exact>
          출석부
        </router-link>
        <router-link class="sign" class-active="active" to="/signup">
          로그인
        </router-link>
      </nav>
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
		& > .nav {
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 40px;
      a {
        text-decoration: none;
      }
      .text:hover {
        color: rgba(229, 229, 229, 1) !important;
      }
      .text:active {
        color: rgba(179, 179, 179, 1) !important;
      }
      .text.router-link-active,
      .text.router-link-exact-active {
        color: rgba(255, 184, 0, 1) !important;
      }
      .text.router-link-active:hover {
        color: rgba(229, 166, 0, 1) !important;
      }
      .text.router-link-exact-active:active {
        color: rgba(179, 129, 0, 1) !important;
      }
			& > .text {
				font-size: 16px;
				font-weight: bold;
				cursor: pointer;
				padding: 10px 10px;
				user-select: none;
          color: #FFFFFF;
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