<template>
  <div class="hello" v-if="delDom">
    <label for="add">
      请输入：<input type="text" id="add" @change.enter="enterF" v-model="setValue">
    </label>
    <transition-group appear name="animate__animated animate__bounce animate__slow" enter-active-class="animate__rubberBand" leave-active-class="animate__backOutUp">
    <div v-for="item in arr" :key="item.id" class="bgc_box" @mouseenter="setBgc(item.id)" @mouseleave="delBgc(item.id)"
      :ref="'demo_' + item.id">
      <div>
        <input type="checkbox" @change="change(item.id, $event)" :checked="item.ckeck">
        <span v-if="!item.setInput">{{ item.name }}</span>
        <input v-else type="text" v-model="item.name">
      </div>
      <div v-show="item.mouseTo">
        <button @click="editInput(item.id)">修改</button>
        <button @click="delInput(item.id)">删除</button>
      </div>
    </div>
  </transition-group>

    <div>
      <input type="checkbox" name="" id="" @change="changeAll">已完成{{ arrL }}/全部{{ arr.length }}
    </div>
    <toList :id="22" @setName="getName" ref="list"></toList>
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
import toList from './toItem.vue'
export default {
  components: {
    toList
  },
  data() {
    return {
      arr: [{
        id: '01',
        name: '吃饭',
        ckeck: false,
        setInput:false
      }, {
        id: '02',
        name: '打豆豆',
        ckeck: true,
        setInput:false
      }, {
        id: '03',
        name: '烫头',
        ckeck: false,
        setInput:false
      }],
      arrL: 0,
      setValue: '',
      delDom:true
    }
  },
  watch: {
    'arr': {
      deep: true,
      immediate: true,
      handler: function () {
        let num = 0
        this.arr.forEach(item => {
          if (item.ckeck) {
            num++
          }
        });
        this.arrL = num
      }
    }
  },
  created() {
    // let num = null
    // num.forEach(item=>{
    //   console.log(item,'---')
    // })
    console.log(this)
    this.arr.forEach(item => {
      this.$set(item, 'mouseTo', false)
    })
  },
  mounted() {
    this.$refs.list.$on('setName', e => {
      console.log(e, '222')
    })
      this.$bus.$on('emitSong',res=>{
        this.delDom = false
      console.log(res,'=777')
    })
  },
  beforeDestroy(){
    this.$bus.$off('emitSong')
  },
  methods: {
    change(id, event) {
      this.arr.forEach(item => {
        if (item.id == id) {
          item.ckeck = event.target.checked
        }
      });
    },
    changeAll(event) {
      this.arr.forEach(item => {
        if (event.target.checked) {
          item.ckeck = true
        } else {
          item.ckeck = false
        }
      })
    },
    enterF() {
      this.arr.push({
        id: nanoid(),
        name: this.setValue,
        ckeck: false,
        setInput:false,
        mouseTo: false
      })
      this.setValue = ''
    },
    getName(e) {
      console.log(e, '---')
    },
    setBgc(e) {
      this.arr.forEach(item => {
        if (item.id == e) {
          if (item.mouseT) {
            return
          }
          item.mouseTo = true
        }
      })
    },
    delBgc(e) {
      this.arr.forEach(item => {
        item.setInput = false
        if (item.id == e) {
          item.mouseTo = false
        }
      })
    },
    editInput(e){
      this.arr.forEach(item => {
        if (item.id != e) {
          item.setInput = false
        }else{
          item.setInput = true
        }
      })
    },
    delInput(e){
      console.log(e,'111')
      let arr = []
      console.log(this.arr.forEach(item=>{
         if(item.id!=e){
          arr.push(item)
         }
      }))

      this.arr = arr
      console.log(this.arr)
    }
  }
}
</script>

<style scoped>
.bgc_box {
  height: 50px;
  width: 300px;
  border: 1px solid #ffbbcc;
  line-height: 50px;
  display: flex;
  justify-content: space-between;
}
.fade-enter-active, .fade-leave-active {
  transition: .5s;
}
.fade-enter,.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(-300px);
}
.fade-enter-to,.fade-leave{
  transform: translateX(0px);
}
:root {
  --animate-duration: 2s;
}
</style>
