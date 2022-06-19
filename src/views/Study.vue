<template>
    <div class="template">
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <div class="top">
            <img class="study-img" src="@/assets/study.png" alt="">
            <div class="textArea">
                <div>
                  <TextOption Bolder="true" content="Welcome Study" style="font-size: 60px;"></TextOption>
                  <div style="font-size: 32px; color: #808080; font-weight:400;">공부하러 오셨군요!</div>
                </div>
                <div class="info-wrapper">
                  <div style="font-size: 24px; font-weight: bold">
                      다음 시간은
                      <TextOption Purple="true" content="1"/>주차
                      <TextOption Purple="true" content="2"/>번째 스터디입니다.
                  </div>
                  <div class="progress">
                      <div v-for="index in current" :key="index">
                          <img class="fry" src="@/assets/fry.png" alt=""/>
                      </div>
                      <div v-for="index in total-current" :key="index">
                          <img class="fry" src="@/assets/egg.png" alt=""/>
                      </div>
                  </div>
                </div>
            </div>
        </div>
        <div class="splitBar"></div>
        <div class="plan">
            <div class="time">
                <div class="title">
                    <TextOption content="This Time" Bold="true"></TextOption>
                    <img src="@/assets/clock.png"  alt=""/>
                </div>
                <div class="fill purple">Date</div>
                <TextOption SmallGray="true" content="2022년 7월 15일(수)  19:00"></TextOption>
                <div class="fill org">Topic</div>
                <TextOption SmallGray="true" content="연결리스트(Linked List)"></TextOption>
                <div class="fill blue">Presenter</div>
                <TextOption SmallGray="true" content="배서현"></TextOption>
            </div>
            <div class="time">
                <div class="title">
                    <TextOption content="Next Time" Bold="true"></TextOption>
                    <img src="@/assets/clock.png" width="42px" alt=""/>
                </div>
                <div class="fill purple">Date</div>
                <TextOption SmallGray="true" content="2022년 7월 19일(일)  19:00"></TextOption>
                <div class="fill org">Topic</div>
                <TextOption SmallGray="true" content="이진 검색 트리(Binary Search Tree)"></TextOption>
                <div class="fill blue">Presenter</div>
                <TextOption SmallGray="true" content="이종우"></TextOption>
            </div>
        </div>
        <div class="study">
            <TextOption SmallGray="true" content="지난 시간에 배운 내용" style="font-weight: 400;"></TextOption>
            <div class="subject">연결 리스트(Linked List)</div>
            <img src="@/assets/study/linkedList.png" style="margin-top: 10px;" alt=""/>
        </div>
        <div>
            <div class="item">
                <div class="left" style="background-color: rgba(116, 76, 243, 0.1);"></div>
                <div class="right">
                  <TextOption Purple="true" content="Singly Linked List" style="font-size:16px;"></TextOption>
                  <TextOption Bold="true" content="단일 연결 리스트란?"></TextOption>
                </div>
                <div></div>
                <p class="contents">각 노드가 데이터와 다음 노드 정보를 가지고 <br/>한 줄로 연결되어 있는 방식으로 데이터를 저장하는 자료 구조</p>
            </div>
            <div class="item">
              <div class="left" style="background-color: rgba(116, 76, 243, 0.1);"></div>
              <div class="right">
                <TextOption Purple="true" content="Singly Linked List" style="font-size:16px;"></TextOption>
                <TextOption Bold="true" content="원형 연결 리스트란?"></TextOption>
              </div>
              <div></div>
              <p class="contents">마지막 노드가 첫 번째 노드를 가리켜서 연결의 형태가 원을 이루는<br/>다음 구조의 연결 리스트를 가리키는 자료 구조</p>
            </div>
            <div class="item">
                <div class="left" style="background-color: rgba(116, 76, 243, 0.1);"></div>
                <div class="right">
                  <TextOption Purple="true" content="Singly Linked List" style="font-size:16px;"></TextOption>
                  <TextOption Bold="true" content="이중 연결 리스트란?"></TextOption>
                </div>
                <div></div>
                <p class="contents">단순 연결 리스트와는 다르게 노드가 이전 노드와 다음 노드로 구성되어 있는 자료 구조</p>
            </div>
        </div>
        <div class="study">
          <TextOption SmallGray="true" content="이번 시간에 배울 내용" style="font-weight: 400;"></TextOption>
            <div class="subject">퀵 정렬(Quick Sort)</div>
            <div class="plan-grid">
              <PurpleBtn content="과제"></PurpleBtn>
              <PurpleBtn content="발표자"></PurpleBtn>
              <PurpleBtn content="마감기한"></PurpleBtn>
              <div>
                <div class="topic">
                  <TextOption Bold="true" content="퀵정렬"></TextOption>
                  <img src="@/assets/light.png"  style="width: 42px" alt=""/>
                </div>
                <p class="contents">퀵 정렬에 대해 공부하고 원하는 언어로 퀵 정렬을 구현해보세요!</p>
              </div>
              <div>
                <div class="topic">
                  <TextOption Bold="true" content="배서현"></TextOption>
                  <img src="@/assets/presenter.png"  style="width: 42px" alt=""/>
                </div>
                <p class="contents">
                  이번 발표자는 ‘배서현’님 입니다!
                  퀵 정렬에 대한 개념 설명을
                  5-10분간 진행할 거에요.
                  스터디원을 위해 성심성의껏
                  발표를 준비해주세요!</p>
              </div>
              <div>
                <div class="topic">
                  <TextOption Bold="true" content="7월 15일 23시 59분"></TextOption>
                  <img src="@/assets/bomb.png"  style="width: 42px" alt=""/>
                </div>
                <p style="font-size: 14px; color: rgba(128, 128, 128, 1)">* 마감기한이 지나면 자동으로 <span style="font-weight: bold">지각처리</span>되니 잊지 말고 제출해주세요!</p>
              </div>
              <div>
                <div class="topic">
                  <TextOption Bold="true" content="Baekjoon"></TextOption>
                  <img src="@/assets/baekjoon.png"  style="width: 42px" alt=""/>
                </div>
                <p class="contents">관련된 백준 문제는
                  <TextOption Purple="true" content="1101, 1102, 1103, 1104, 1105"></TextOption>
                  입니다.
                  이중 2개를 골라 원하는 언어로 푸신 후
                  <TextOption Purple="true" content="‘Subject’"></TextOption>에 제출해주세요!</p>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
import TextOption from '../components/TextOption.vue';
import PurpleBtn from "@/components/PurpleBtn";
export default {
  name: 'StudyInfo',
  data() {
    return {
        current : 2,
        total: 8
    };
  },
  components: {
    PurpleBtn,
      TextOption,
  }
}
</script>

<style lang="scss" scoped>
    .template {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: auto;
    }
    .top {
        display: flex;
        justify-content: center;
        margin-top: 128px;
        width: 100%;
        .study-img {
          width: 450px;
        }
    }

    .textArea {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .info-wrapper {
      display:flex;
      flex-wrap: wrap;
      gap: 8px;
      flex-direction: column;
    }

    .progress {
        display: flex;
        flex-direction: row;
    }
    .fry {
        margin-right: 28px;
         width: 42px;
    }
    .splitBar {
        width: 80%;
        height: 1px;
        background-color: #C0C0C0;
        margin: 40px 0;
    }
    
    .plan {
        display: flex;
        width: 60%;
        flex-direction: row;
        justify-content: space-between;
    }
    .time {
        display: flex;
        flex-direction: column;
        font-size: 20px;
    }
    .title {
        display: flex;
        flex-direction: row;
        justify-content: left;
        align-items: center;
        margin-bottom: 16px;
    }
    .title img {
        width: auto;
        height: 45px;
    }
    .fill {
        border-radius: 4px;
        width: fit-content;
        font-weight: bold;
        padding: 2px 4px;
        margin-top: 8px;
        font-size: 14px;
    }
    .purple {
        color: #744CF3;
        background-color: rgba(116, 76, 243, 0.5);
    }
    .org {
        color: #F39C4C;
        background-color: rgba(243, 156, 76, 0.5);
    }
    .blue {
        color: #00C2FF;
        background-color: rgba(0, 194, 255, 0.5);
    }
    .study {
        display: flex;
        margin: 86px 0;
        width: 100%;
        flex-direction: column;
        align-items: center;
    }
    .study img {
        width: 476px;
    }
    .subject {
        font-size: 48px;
        font-weight: bold;
        background: linear-gradient(90deg, #04A3FB 0%, #D661FF 49.48%, #FFB800 100%, #FFB800 100%);
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
    .item {
        display: grid;
        margin: 50px 0;
        grid-template-columns: 10px 1fr;
        flex-direction: column;
        column-gap: 20px;
        row-gap: 4px;
        .right {
          display: flex;
          flex-direction: column;
        }
        .right span:nth-child(2) {
          margin-top: -8px;
        }
        .contents {
          background-color: rgba(116, 76, 243, 0.1);
          padding: 0 16px 0 4px;
        }
    }
    .contents {
          font-size: 20px;
          font-weight: 400;
          word-break: keep-all;
    }
    .plan-grid {
        display: grid;
        margin: 142px 124px;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 140px;
        row-gap: 6px;
        .topic {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 2px;
        }
    }


    @media (max-width: 800px) {
    .top {
        flex-direction: column;
        margin-top: 80px;
    }
    .top .study {
        width: 150px;
    }
    #fry {
        margin-right: 14px;
        width: 24px;
    }
    .plan {
        flex-direction: column;
    }
    .time {
        margin-bottom: 30px;
    }
    .subject {
        font-size: 36px;
        line-height: 40px;
    }
    .contents {
        grid-template-columns: 1fr;
        width: 100%;
    }
}
</style>
