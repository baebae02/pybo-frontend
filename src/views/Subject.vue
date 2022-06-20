<template>
<div id="template">
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <div class="page">
        <img src="@/assets/subject.png" alt="" width="600px"/>
        <div class="last-text">
            과제 마감까지 남은 시간
        </div>
        <TextOption class="last-time" Purple="true" content="57: 12 : 45" style="font-size: 110px;"/>
        <PurpleBtn class="submit-btn" content="제출하기" @click.native="goSubmit"></PurpleBtn>
        <div class="split-bar"></div>
        <TextOption Bolder="true" content="Subject Submission" style="margin: 4px 0"/>
        <div class="explain-text">
            2회차, 퀵정렬에 관한 과제입니다!<br/>
            언어는 자유이며 백준 <span style="color: #744CF3; font-weight: bold;">1101, 1102, 1103, 1104, 1105</span>문제 중 2가지를 택하여 제출하면 됩니다.
        </div>
        <div class="explain-add">
            (제출작 중 가장 우수한 알고리즘은 스터디 시간에 다른 부원들과 공유될 예정입니다.)
        </div>
    </div>
</div>
</template>

<script>
import TextOption from '@/components/TextOption'
import PurpleBtn from '@/components/PurpleBtn'
import router from "@/router";
    
export default {
  name: 'Subject',
  components : {
      TextOption,
      PurpleBtn
  },
  data() {
    return {};
  },
  methods: {
      goSubmit() {
          router.push({ name: 'SubjectSubmit' }) 
      }
  }
}
</script>

<style lang="scss" scoped>
#template {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;

    .page {
        width: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        
        .last-text {
            font-size: 40px; 
            color: #3E3E3E;
            font-weight: bold;
        }
        
        .last-time {
            margin-top: -40px;
        }
        
        .submit-btn {
            padding: 12px 240px; 
            width:auto; 
            font-size: 24px;
        }
        
        .split-bar {
            width: 80%;
            height: 1px;
            background-color: #C0C0C0; 
            margin: 24px 0 36px 0;
        }
        
        .explain-text {
            font-weight: 400;
            font-size: 20px;
        }
        
        .explain-add {
            font-weight: 400;
            font-size: 16px;
        }
    }
}

@media (max-width: 800px) {
    .page {
        .last-time {
            font-size: 80px !important;
        }
        
        .submit-btn {
            padding: 6px 50px !important;
            font-size: 20px !important;
        }
    }
}
</style>