<template>
    <div>
        <h1 :style="{opacity:num}">食物</h1>
        111<input type="text" name="" id="">
    </div>
</template>
<script>
export default {
    data() {
        return {
            num:1,
            setin:''
        }
    },
    computed:{
    },
    activated(){
        console.log('激活')
    },
    deactivated(){
        console.log(222)
    },
    mounted(){
        console.log(this.$route.query)
        this.setin = setInterval(()=>{
            this.num-=0.1
            if(this.num<=0){
                this.num=1
            }
        },200)
    },
    methods:{
    }
}
</script>
<style>

</style>