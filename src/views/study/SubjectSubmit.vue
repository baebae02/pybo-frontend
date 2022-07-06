<template>
  <div id="template">
    <div class="task">
        <TextOption Bold="true" content="Task 1"></TextOption>
        <div class="option">
            <div class="select-box">
                <select v-model="selectedLang">
                  <option disabled value="">언어</option>
                  <option>C</option>
                  <option>C++</option>
                  <option>JAVA</option>
                  <option>Python</option>
                </select>
                <span class="arrow">
                    <img src="@/assets/icon/select-tri.svg"/>
                </span>
            </div>
            <div class="select-box">
                <select v-model="selectedNum">
                  <option disabled value="">문제 번호</option>
                  <option>2001</option>
                  <option>2002</option>
                  <option>2003</option>
                  <option>2004</option>
                </select>
                <span class="arrow">
                    <img src="@/assets/icon/select-tri.svg"/>
                </span>
            </div>
        </div>
        <div class="code">
            <textarea type="text" v-model="code1" placeholder="print('Hello World!')"></textarea>
            <img src="@/assets/icon/trashcan.svg" alt="" class="trashcan" @click="reset1"/>
        </div>
    </div>
    <div class="task">
        <TextOption Bold="true" content="Task 2"></TextOption>
        <div class="option">
            <div class="select-box">
                <select v-model="selectedLang2">
                  <option disabled value="">언어</option>
                  <option>C</option>
                  <option>C++</option>
                  <option>JAVA</option>
                  <option>Python</option>
                </select>
                <span class="arrow">
                    <img src="@/assets/icon/select-tri.svg"/>
                </span>
            </div>
            <div class="select-box">
                <select v-model="selectedNum2">
                  <option disabled value="">문제 번호</option>
                  <option>2001</option>
                  <option>2002</option>
                  <option>2003</option>
                  <option>2004</option>
                </select>
                <span class="arrow">
                    <img src="@/assets/icon/select-tri.svg"/>
                </span>
            </div>
        </div>
        <div class="code">
            <textarea type="text" v-model="code2" placeholder="print('Hello World!')"></textarea>
            <img src="@/assets/icon/trashcan.svg" alt="" class="trashcan" @click="reset2"/>
        </div>
    </div>
    <PurpleBtn content="제출하기" class="submit-btn" @click.native="submit"></PurpleBtn>
  </div>
</template>

<script>
import TextOption from '@/components/TextOption'
import PurpleBtn from '@/components/PurpleBtn'
import router from "@/router";

    export default {
  name: 'SubjectSubmit',
  components : {
      TextOption,
      PurpleBtn
  },
  data() {
    return {
        selectedNum: '',
        selectedNum2: '',
        selectedLang: '',
        selectedLang2: '',
        code1: '',
        code2: ''
    };
  },
  methods: {
      reset1() {
          this.code1 = '';
      },
      reset2() {
          this.code2 = '';
      },
      submit() {
          if (this.code1 === '' || this.code2 === '') 
              alert("빈 코드는 제출할 수 없습니다.");
          else
              alert("제출하시겠습니까?")
              router.push({ name: 'SubjectComplete' }) 
      }
  }
}
</script>

<style lang="scss" scoped>
    #template {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: row;
        width: 100%;
        min-height: 90vh;
        margin-top: 60px;
        position: relative;
        
        .task {
            .option {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                margin: 8px 0;
                flex-wrap: wrap;
                gap: 47px;
                
                .select-box {
                    position: relative;
                    border: 1px solid #808080;
                    border-radius: 4px;
                    padding: 12px 24px;
                    width: 234px;
                    display: flex;
                    justify-content: space-between;

                    select option:checked {
                        background: rgba(116, 76, 243, 0.1);
                    }
                    select {
                        background: transparent;
                        width: 100%;
                        outline: 0 none;
                        border: 0 none;
                        position: relative;
                        z-index: 3;
                        font-size: 21px;
                        color: #808080;
                        font-weight: 400;

                        &:focus + .arrow img {
                            transform: rotate(180deg);
                        }

                        option {
                            background: #FFFFFF;
                        }
                    }
                    .arrow {
                        position: absolute; 
                        top: 50%; 
                        right: 10%;
                        transform: translate(0%, -50%);
                        z-index: 1;   
                        height: inherit;
                        display: flex;
                        justify-content: center;
                        align-items: center;    
                        img {
                            width: 100%;
                            align-self: center;
                            transition: .5s;// 부드럽게 회전
                        }
                    }
                }
            }
            .code {
                margin: 16px 0;
                position: relative;
                
                textarea {
                    flex-grow: 1;
                    height: 70vh;
                    width: 100%;
                    border: 1px solid #808080;
                    border-radius: 4px;
                    padding: 15px 24px;
                    color: #808080;
                    
                    &:focus {
                        outline-color: #744CF3 !important;
                    }
                }
                .trashcan {
                    position: absolute;
                    bottom: 3%;
                    right: 3%;
                }
            }
        }
        .submit-btn {
            position: absolute;
            bottom: 5%;
            right: 2%;
        }
    }
</style>