<template>
  <div id="template">
    <div class="task">
        <TextOption Bold="true" content="Task 1"></TextOption>
        <div class="select-box">
            <select v-model="selected">
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
    </div>
  </div>
</template>

<script>
import TextOption from '@/components/TextOption'
export default {
  name: 'SubjectSubmit',
  components : {
      TextOption
  },
  data() {
    return {
        selected: ''
    };
  },
  methods: {
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
        min-height: 100%;
        margin-top: 60px;
        
        .task {
            
            .select-box {
                position: relative;
                border: 1px solid #808080;
                border-radius: 4px;
                padding: 12px 24px;
                width: 242px;
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
    }
</style>