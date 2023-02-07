<template>
    <div>
        <h1>信息</h1>
        <h2 @click="goAbout">xxx</h2>
    </div>
</template>
<script>
export default {
    data() {
        return {
            $route:this.$route
        }
    },
    watch:{
        $route:{
            handler(oldValue,newValue){
                console.log(oldValue,newValue,'222233')
            },
            deep: true
            
        }
    },
    computed:{
    },
    
    mounted(){
        console.log(this.$route.query)
        
    },
    methods:{
        goAbout(){
            this.$router.push({
                name:'About',
                query:{
                    sex:'男'
                }
            })
        }
    }
}
</script>
<style>

</style>