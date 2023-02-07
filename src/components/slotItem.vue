<template>
    <div>
        <!-- 匿名插槽
        <slot></slot> -->
        <!-- 具名插槽
        <slot name="juming"></slot> -->
        <!-- 作用域插槽 -->
        <slot :arr="arr"></slot>
        <button @click="emitInfo">全局事件总线  发送数据</button>
    </div>
</template>
<script>
export default{
    data(){
        return{
            arr: [22, 33, 44, 55]
        }
    },
    methods:{
        emitInfo(){
            this.$bus.$emit('emitSong',this.arr)
        }
    }
}
</script>
<style scoped>

</style>