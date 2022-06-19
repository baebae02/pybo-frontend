<template>
	<div class="introduce">
		<div class="intro-image">
			<img src="@/assets/intro.png">
			<div class="logo">
				<img src="@/assets/big-logo-icon.svg">
				<img src="@/assets/big-logo-text.svg">
			</div>
		</div>
		<div class="wrap">
			<div class="title">
				스터디 진행방식
			</div>
			<div class="timetable">
				<div class="row">
					<div class="minute">
						5분
					</div>
					<div class="content">
						출석체크 & 과제체크
					</div>
				</div>
				<div class="row">
					<div class="minute">
						10분
					</div>
					<div class="content">
						베스트 코드 발표 진행
					</div>
				</div>
				<div class="row">
					<div class="minute">
						25분
					</div>
					<div class="content">
						개념 설명
					</div>	
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
      name: 'Introduce',
      methods: {
      },
      data() {
        return {
        }
      }
    }
</script>

<style lang="scss" scoped>
	.introduce {
		display: flex;
		flex-direction: column;
		& > .intro-image {
			display: flex;
			flex-direction: column;
			min-height: 100vh;
			
			position: relative;
			
			& > img {
				width: 100%;
				height: 100vh;
				object-fit: cover;
			}
			& > .logo {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				& > img {
					opacity: 0;
					animation: appear 3s 1s forwards linear;
				}
			}
		}
		& > .wrap {
			min-height: 100vh;
			background-image: linear-gradient(to bottom, #473190, #000000);
			
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			& > .title {
				color: #ffffff;
				font-size: 48px;
				font-weight: bold;
				
				margin-bottom: 40px;
			}
			& > .timetable {
				display: flex;
				flex-direction: column;
				gap: 8px;
				& > .row {
					display: flex;
					flex-direction: row;
					gap: 60px;
					& > .minute, .content {
						font-size: 24px;
						font-weight: bold;
						
						border-radius: 8px;
					}
					& > .minute {
						color: #ffffffcc;
						padding: 12px 32px;
						max-width: 101px;
						
						background-color: #AB90FF;
					}
					& > .content {
						color: #ffffffcc;
						padding: 12px 0px 12px 32px;
						min-width: 316px;
						
						background-color: #744CF3;
					}
				}
			}
		}
	}
	@keyframes appear {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
