<template>
    <div class="template">
        <div class="top">
            <img class="study" src="@/assets/study.png">
            <div class="textArea">
                <TextOption Bolder="true" content="Welcome Study"></TextOption>
                <TextOption Gray="true" content="공부하러 오셨군요!"></TextOption>
                <br/><br/>
                <div style="margin-bottom: 10px;">
                    오늘은
                    <TextOption Purple="true" content="1"/>주차
                    <TextOption Purple="true" content="2"/>번째 스터디입니다.
                </div>
                <div class="progress">
                    <div v-for="index in current" :key="index">
                        <img id="fry" src="@/assets/fry.png"/>  
                    </div>
                    <div v-for="index in total-current" :key="index">
                        <img id="fry" src="@/assets/egg.png"/>  
                    </div>
                </div>
            </div>
        </div>
        <div class="splitBar"></div>
        <div class="plan">
            <div class="time">
                <div class="title">
                    <TextOption content="This Time" Bold="true"></TextOption>
                    <img src="@/assets/clock.png" />
                    <img src="@/assets/clock.png" />
                </div>
                <div class="fill purple">Date</div>
                <TextOption Gray="true" content="2022년 7월 15일(수)  19:00"></TextOption>
                <div class="fill org">Topic</div>
                <TextOption Gray="true" content="연결리스트(Linked List)"></TextOption>
                <div class="fill blue">Presenter</div>
                <TextOption Gray="true" content="배서현"></TextOption>
            </div>
            <div class="time">
                <div class="title">
                    <TextOption content="Next Time" Bold="true"></TextOption>
                    <img src="@/assets/clock.png" width="42px"/> 
                </div>
                <div class="fill purple">Date</div>
                <TextOption Gray="true" content="2022년 7월 19일(일)  19:00"></TextOption>
                <div class="fill org">Topic</div>
                <TextOption Gray="true" content="이진 검색 트리(Binary Search Tree)"></TextOption>
                <div class="fill blue">Presenter</div>
                <TextOption Gray="true" content="이종우"></TextOption>
            </div>
        </div>
        <div class="last">
            <TextOption Gray="true" content="지난 시간에 배운 내용" style="font-size:20px;"></TextOption>
            <div class="subject">연결 리스트(Linked List)</div>
            <img src="@/assets/study/linkedList.png"/> 
        </div>
    </div>
</template>

<script>
import TextOption from '../components/TextOption.vue';
export default {
  name: 'StudyInfo',
  data() {
    return {
        current : 2,
        total: 8
    };
  },
  components: {
      TextOption,
  }
}
</script>

<style>
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
    }
    .top .study {
        width: 450px;
    }
    .textArea {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;
        font-size: 21px;
        font-weight: 500;
    }
    .progress {
        display: flex;
        flex-direction: row;
    }
    #fry {
        margin-right: 28px;
         width: 42px;
    }
    .splitBar {
        width: 80%;
        heigth: 0;
        border: 1px solid #C0C0C0;
        margin: 53px 0px;
    }
    
    .plan {
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: space-around;
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
    }
    .title img {
        width: auto;
        height: 45px;
    }
    .fill {
        border-radius: 4px;
        width: fit-content;
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
    .last {
        display: flex;
        margin: 100px 0px;
        flex-direction: column;
        align-items: center;
    }
    .last img {
        width: 476px;
    }
    .subject {
        font-size: 48px;
        font-weight: bold;
        line-height: 54px;
        background: linear-gradient(90deg, #04A3FB 0%, #D661FF 49.48%, #FFB800 100%, #FFB800 100%);
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin: 10px;
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
}
</style>
