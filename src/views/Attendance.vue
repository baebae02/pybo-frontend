<template>
  <div id="template">
     <div class="tab">
          <div :class="{'now': page, 'bold': true}" @click="movePage">출석</div>
          <div :class="{'now': !page, 'bold': true}" @click="movePage">과제</div>
    </div>
    <div class="splitBar"></div>
    <div class="grid top" style="column-gap: 14px;">
        <div></div>
        <div v-for="(date, i) in dates" class="class" v-bind:key="date">
            <p>{{ date.month }}월 {{ date.date }}일</p>
            <div>{{ i + 1 }}회차</div>
        </div>
    </div>
    <div v-for="(user, i) in user_attendance" v-bind:key="i" :class="{'grid': true, 'bottom': true, 'hide': hide}" >
        <div class="user">
            <img src="@/assets/icon/blue-boy.svg" alt=""/>
            <p>{{ user.name }}</p>  
        </div>
        <span v-for="(attend, item) in user" v-bind:key="item">
            <span v-if="item != 'name'">
                <div v-if="attend === 'true' " class="success">
                    <img src='@/assets/icon/success.svg' alt="">
                </div>
                <div v-else-if="attend === 'late'" class="late">
                    <img src='@/assets/icon/warning.svg' alt="" style="width: 32px;">
                </div>
                <div v-else-if="attend === 'false'" class="false">
                    <img src='@/assets/icon/false.svg' alt="">
                </div>
                <div v-else-if="attend === 'new'" class="new">
                    <img src='@/assets/icon/new.svg' alt="">
                </div>
                <div v-else class="none">
                    <img src='@/assets/icon/lock.svg' alt="">
                </div>
            </span>
        </span>
    </div>
    <div v-for="(user, i) in subject_attendance" v-bind:key="i" :class="{'grid': true, 'bottom': true, 'hide': !hide}" >
        <div class="user">
            <img src="@/assets/icon/orange-girl.svg" alt=""/>
            <p>{{ user.name }}</p>  
        </div>
        <span v-for="(attend, item) in user" v-bind:key="item">
            <span v-if="item != 'name'">
                <div v-if="attend === 'true' " class="success">
                    <img src='@/assets/icon/success.svg' alt="">
                </div>
                <div v-else-if="attend === 'false'" class="false">
                    <img src='@/assets/icon/false.svg' alt="">
                </div>
                <div v-else class="none">
                    <img src='@/assets/icon/lock.svg' alt="">
                </div>
            </span>
        </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Attendance',
  data() {
    return {
        user_attendance:[
         {class1: 'true',  class2: 'false',  class3: 'true',  class4: 'new',  class5: '',  class6: '',  class7: '',  class8: '', name: 'b01'},
         {class1: 'late', class2: 'true',  class3: 'true',  class4: 'new',  class5: '',  class6: '',  class7: '',  class8: '', name: 'b02'},
         {class1: 'true', class2: 'true',  class3: 'true',  class4: 'new',  class5: '',  class6: '',  class7: '',  class8: '', name: 'b03'},
         {class1: 'true', class2: 'true',  class3: 'true',  class4: 'new', class5: '',  class6: '',  class7: '',  class8: '', name: 'b04'},
         {class1: 'true', class2: 'true',  class3: 'false',  class4: 'new', class5: '',  class6: '',  class7: '',  class8: '', name: 'b05'},
         {class1: 'false', class2: 'true',  class3: 'true',  class4: 'new',  class5: '',  class6: '',  class7: '',  class8: '', name: 'b06'},
        ],
        subject_attendance:[
         {class1: 'true',  class2: 'false',  class3: 'true',  class4: '', class5: '',  class6: '',  class7: '',  class8: '', name: 'b01'},
         {class1: 'false', class2: 'true',  class3: 'true',  class4: '',  class5: '',  class6: '',  class7: '',  class8: '', name: 'b02'},
         {class1: 'true', class2: 'true',  class3: 'true',  class4: '',  class5: '',  class6: '',  class7: '',  class8: '', name: 'b03'},
         {class1: 'true', class2: 'true',  class3: 'true',  class4: '',  class5: '',  class6: '',  class7: '',  class8: '', name: 'b04'},
         {class1: 'true', class2: 'true',  class3: 'false',  class4: '',  class5: '',  class6: '',  class7: '',  class8: '', name: 'b05'},
         {class1: 'false', class2: 'true',  class3: 'true',  class4: '',  class5: '',  class6: '',  class7: '',  class8: '', name: 'b06'},
        ],
        dates:[
            {month: 7, date: 11},
            {month: 7, date: 14},
            {month: 7, date: 18},
            {month: 7, date: 21},
            {month: 7, date: 25},
            {month: 7, date: 28},
            {month: 8, date: 1},
            {month: 8, date: 4},
        ],
        attendance: ['class1', 'class2', 'class3', 'class4', 'class5', 'class6', 'class7', 'class8'],
        page: true,
        hide: false
    };
  },
  methods: {
      movePage() {
          if (this.page === true) {
              this.page = false
          }
          else {
              this.page = true
          }
          if (this.hide === true) {
              this.hide = false
          }
          else {
              this.hide = true
          }
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
    margin-top: 60px;
    height: 90vh;

    .tab {
        width: 40%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        
        .bold {
            font-weight: bold;
            font-size: 36px;
            color: #E3E3E3;
        }
        .not-now {
        }
        .now {
            transition: all ease 1s 0s;
            color: #3E3E3E;
        }
    }
    
    .splitBar {
        width: 80%;
        height: 2px;
        background-color: #C0C0C0;
        margin: 16px 0;
    }
    
    .hide {
        display: none !important;
    }
    
    .grid {
        display: grid;
        grid-template-columns: repeat(9, 1fr);
        opacity: 1;
        
        
        .class {
            padding: 4px 40px;
            background: #744CF3;
            border-radius: 12px;
            text-align: center;
            
            p {
                font-weight: bold;
                font-size: 12px;
                color: #BDA8FF;
            }
        
            div {
                color: #FFFFFF;
                font-weight: bold;
                font-size: 24px;
            }
        }
        
        .user {
            background: rgba(0, 0, 0, 0.1);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 14px;
            font-weight: bold;
        }
        
        .success {
            background: rgba(0, 189, 121, 0.25);
            padding: 24px 60px;
            
        }
        
        .new {
            background: rgba(0, 127, 242, 0.25);
            padding: 24px 60px;
        }
        
        .late {
            background: rgba(255, 205, 0, 0.25);
            padding: 24px 60px;
        }
        
        .false {
            background: rgba(239, 68, 82, 0.25);
            padding: 24px 60px;
        }
        
        .none {
            background: rgba(0, 0, 0, 0.5);
            padding: 24px 60px;
        }
        
        & + .bottom {
            margin: 2px 0;
        }
    }
    .top {
        margin: 20px 0 20px 0;
    }
}

</style>
