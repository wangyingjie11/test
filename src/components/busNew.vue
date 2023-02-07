<template>
    <div>
        <h1>$on</h1>
        <h3 style="color:red">{{ this.name }}</h3>
    </div>
</template>
<script>
import {stu} from '../server/student'
export default {
    data() {
        return {
            user: '作用域插槽'
        }
    },
    computed:{
        name(){
            return this.user+'222'
        }
    },
    // watch:{
    //     name(){
    //         if(this.name.length>10){
    //             alert('name的长度大于10')
    //         }
    //     }
    // },
    mounted(){
      this.$bus.$on('newBus',(res)=>{
        console.log(res)
        this.user=this.user+'3333'
        stu().then(res=>{
            console.log(res,'222')
        }).catch(error=>{
            console.log(error,'333')
        })
      })
    },
    methods: {

    }
}
</script>
<style lang="less" scoped>

</style>