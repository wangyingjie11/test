<template>
    <div>
        <h2 @click="go">333aaa 匿名插槽</h2>
        <slot></slot>
        <slot name="header"></slot>
        <slot :user="user"></slot>
    </div>
</template>
<script>
export default {
    data() {
        return {
            user: '作用域插槽'
        }
    },
    methods: {
        go(){
            console.log(this)
            this.$bus.$emit('newBus','user')
        }

    }
}
</script>
<style lang="less" scoped>

</style>