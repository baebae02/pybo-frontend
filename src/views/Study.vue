<template>
    <div class="template">
        <div class="top">
            <img id="study" src="@/assets/study.png" width="450px">
            <div class="textArea">
                <TextOption Bold="true" content="Welcome Study"></TextOption>
                <TextOption Gray="true" content="공부하러 오셨군요!"></TextOption>
                <br/><br/>
                <div>
                    오늘은 <br/>
                    <TextOption Purple="true" content="1"/>주차
                    <TextOption Purple="true" content="2"/>번째 스터디입니다.
                </div>
                <div class="progress">
                    <div v-for="index in current" :key="index">
                        <img id="fry" src="@/assets/fry.png" width="42px"/>  
                    </div>
                    <div v-for="index in total-current" :key="index">
                        <img id="fry" src="@/assets/egg.png" width="42px"/>  
                    </div>
                </div>
            </div>
        </div>
        <div class="splitBar"></div>
        <div class="bottom">
            <div class="time">
                <div class="title">
                    <TextOption content="This Time" Bold="true"></TextOption>
                    <img src="@/assets/clock.png" width="42px"/> 
                    <img src="@/assets/clock.png" width="42px"/>
                </div>
                <div>Date</div>
                <TextOption Gray="true" content="2022년 7월 15일(수)  19:00"></TextOption>
            </div>
            <div class="time">
                <TextOption content="Next Time" Bold="true"></TextOption>
                <img src="@/assets/clock.png" width="42px"/> 
            </div>
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
    }
    .top {
        display: flex;
        justify-content: center;
        margin-top: 128px;
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
        margin: 28px 0px;
    }
    #fry {
        margin-right: 28px;
    }
    .splitBar {
        width: 80%;
        heigth: 0;
        border: 1px solid #C0C0C0;
        margin: 53px 0px;
    }
    
    .bottom {
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: space-around;
        .time {
            display: flex;
            flex-direction: column;
            .title {
                display: flex;
                width: 100%;
                flex-direction: row;
            }
        }
    }
</style>
