<template>
    <div class="gnb">
		<img src="@/assets/logo.svg">
		<div class="right">
			<div :class="{text: true, now: true}">
				소개
			</div>
			<div :class="{text: true, now}">
				스터디
			</div>
			<div :class="{text: true, now}">
				과제
			</div>
			<div :class="{text: true, now}">
				출석부
			</div>
			<div class="sign">
				로그인
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'GNB',
  components: {
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