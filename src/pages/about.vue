<template>
    <div>
        <h1 @click="goMsg">关于</h1>
        <h1 @click="goBefo">食物</h1>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        <h2>{{ id }}</h2>
        <h1 style="color:red">{{ sex }}</h1>
        <div>
            <h1>当前数值为 state {{ count }}</h1>
            <h1>当前数值为 getter {{ addMultiple }}</h1>
        </div>
        <div>
            <button @click="add">加1</button>
            <button @click="reduceE">减1</button>
            <button @click="awitIn">异步加1</button>
            <button @click="oddE">奇数1</button>
        </div>

    </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
export default {
    data() {
        return {

        }
    },
    props: ['sex'],
    computed: {
        id() {
            return this.$route.query.id
        },
        ...mapState({
            count(state) {
                return state.count
            }
        }),
        ...mapGetters(['addMultiple']),
    },
    mounted() {
        console.log(this.$route, '222', mapState.count)
    },
    methods: {
        ...mapActions(['awitIncrement','odd']),
        ...mapMutations(['increment','reduce']),
        goMsg() {
            this.$router.push({
                // path: '/fp/about/msg',
                name:'msg',
                query: {
                    age: 222
                }
            })
        },
        goBefo() {
            this.$router.push({
                path: '/fp/about/befo',
            })
        },
        add(){
            // this.$store.commit('increment')
            this.increment()
        },
        awitIn(){
            // this.$store.dispatch('awitIncrement')
            this.awitIncrement(2000)
        },
        reduceE(){
            // this.$store.commit('reduce')
            this.reduce()
        },
        oddE(){
            // this.$store.dispatch('odd')
            this.odd()
        }

    }
}
</script>
<style>

</style>