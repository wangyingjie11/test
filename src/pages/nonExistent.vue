<template>
    <div class="conter">
        <p v-if="titleTop">当前页面不见了，现在返回首页{{ numD }}</p>
        <img src="../image/404.webp" alt="">
    </div>
</template>
<script>
export default {
    data() {
        return {
            titleTop:false,
            numD:5
        }
    },
    mounted(){
      this.titleTop = true
      let dTime = setInterval(()=>{
        this.numD--
        if(this.numD<=0){
            this.$router.replace({
                path:'/'
            })
            clearInterval(dTime)
        }
      },1000)
    },
    methods: {

    }
}
</script>
<style scoped lang="less">
.conter {
    width: 100%;
    height: 100%;
    p{
        position: absolute;
        top: 50px;
        text-align: center;
        width: 100%;
        color: antiquewhite;
    }

    img {
        width: 100%;
        height: 100%;
    }
}
</style>