<template>
	<div class="introduce">
		<div class="intro-image page">
			<img src="@/assets/intro.png" alt="">
			<div class="logo">
				<img src="@/assets/big-logo-icon.svg" alt="">
				<img src="@/assets/big-logo-text.svg" alt="">
			</div>
		</div>

    <div class="page subject" style="justify-content: space-evenly">
      <div>
        <TextOption Bolder="true" content="스터디 소개" style="margin-bottom: 8px;"></TextOption>
        <div class="text bold">
          이대로는 코테 신청도 못한다 싶어 만든 스터디<br/>
          알고리즘 공부 미룰 수 있을 때까지 미룬 자의 스터디 <br/>
          알고리즘 공부 하기 싫어서 스터디장이 되어버렸습니다.
        </div>
        <img src="@/assets/spin-around.png" alt="" width="60px">
      </div>
      <div>
        <TextOption Bolder="true" content="스터디 일정" style="margin-bottom: 8px;"></TextOption>
        <div class="text bold">7월 12일 - 8월 5일(약 4주)</div>
        <div class="text">매주 수요일, 일요일마다 오후 10시 30분, 구글미트</div>
        <div class="text gray">(요일 및 시간은 스터디원의 합의 후 변동될 수 있습니다)</div>
        <img src="@/assets/calender.png" alt="" width="340px">
      </div>
    </div>
		<div class="wrap page">
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
        <div class="row">
          <div class="minute">
            15분
          </div>
          <div class="content">
            예제 문제 풀기
          </div>
        </div>
        <div class="row">
          <div class="minute">
            30분
          </div>
          <div class="content">
            심화 문제 풀기
          </div>
        </div>
        <div class="row">
          <div class="minute">
            5분
          </div>
          <div class="content">
            마무리하기
          </div>
        </div>
			</div>
      <div class="split-bar">
        <p>* 총 90분 과정</p>
      </div>
      <ul class="explain">
        <li>제출한 과제 중에서 가장 효율적이고 창의적인 알고리즘을 베스트 코드로 선정합니다.</li>
        <li><span style="color: #744CF3">예제 문제 & 심화 문제</span>는 같은 문제를 각자 푸는 것이며 문제를 푸는 도중 질의응답이 자유롭게 가능합니다.</li>
        <li>과제 미제출 또는 지각 시 <span style="color: #FFB800">경고</span> 1회 부여, 결석 시 <span style="color: #FFB800">옐로카드</span> 1회 부여됩니다.</li>
        <li><span style="color: #FFB800">옐로카드</span> 2회 부여 시 스터디에서 퇴출됩니다.</li>
      </ul>
		</div>
    <div class="page subject">
      <TextOption Bolder="true" content="과제 소개" style="margin-bottom: 8px;"></TextOption>
      <div class="text bold">과제는 당일 배운 개념을 복습하는 목적입니다.<br/>
        백준에서 개념과 관련된 문제 5개가 주어지며 <br/>
      5문제 중 2문제를 선택하여 제출하면 됩니다. </div>
      <div class="text gray">
        (과제 제출일은 스터디 전날 <span style="font-weight: bold">11:59</span>까지이며 제출 폼이 제공됩니다)
      </div>
      <div class="img">
        <img src="@/assets/subject-intro-1.png" alt="" width="444px">
        <img src="@/assets/subject-intro-2.png" alt="" width="444px">
      </div>
    </div>
	</div>
</template>

<script>
  import $ from 'jquery';
  import TextOption from "@/components/TextOption";
  window.addEventListener("wheel", function(e){
    e.preventDefault();
  },{passive : false});
  const $html = $("html");
  let page = 1;
  const lastPage = $(".page").length;
  $html.animate({scrollTop:0},10);
  $(window).on("wheel", function(e){

    if($html.is(":animated")) return;

    if(e.originalEvent.deltaY > 0){
      if(page=== lastPage) return;

      page++;
    }else if(e.originalEvent.deltaY < 0){
      if(page === 1) return;

      page--;
    }
    const posTop = (page - 1) * $(window).height();
    $html.animate({scrollTop : posTop});
  });
  export default {
    name: 'Intro',
    components: {TextOption},
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
    width: 100%;
    height: 100%;
    & > .page {
      width: 100%;
      height: 100%;
      min-height: 100vh;
    }
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
					animation: appear 2s 1s forwards cubic-bezier(0.65, 0.05, 0.36, 1);
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
					& > .minute{
						color: #ffffffcc;
						width: 100px;
						text-align: center;
						padding: 12px 0;
						
						background-color: #AB90FF;
						
					}
					& > .content {
						color: #ffffffcc;
						padding: 12px 0 12px 32px;
						min-width: 340px;
						
						background-color: #744CF3;
					}
					&:nth-child(2n) > .minute {
						background-color: #876FD2;
					}
					&:nth-child(2n) > .content {
						background-color: #5937C7;
					}
				}
			}
      & > .split-bar {
        width: 35%;
		height: 1px;
        margin-top: 8px;
		background-color: #808080;
        p {
          color: #E3E3E3;
          text-align: right;
          font-size: 12px;
          margin-top: 4px;
        }
      }
      & > .explain {
        margin-top: 120px;
        li {
          color: #FFFFFF;
          font-weight: 300;
          font-size: 16px;
          line-height: 29px;
        }
      }
		}
    & > .subject {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: center;
      .text {
        color: #3c3c3c;
        font-size: 20px;
        text-align: center;
      }
		.bold {
			font-weight: bold;
		}
      .gray {
        color: #808080;
      }
      .img {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 26px;
      }
      & > div > img {
        margin-top: 16px;
      }
    }
	}
	@keyframes appear {
		0% {
			opacity: 0;
			transform: translateY(50px);
		}
		100% {
			opacity: 1;
			transform: translateY(0px);
		}
	}
</style>
