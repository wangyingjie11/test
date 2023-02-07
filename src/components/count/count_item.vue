<template>
    <div>
        <h1>当前数值：{{ count }}</h1>
        <h2>{{ bigNum }}</h2>
        <button @click="add">add</button>
        <button @click="reduce">reduce</button>
        <button @click="oddAdd(1)">2n+1_add</button>
        <button @click="awitAdd(1)">awit_add</button>
    </div>
</template>
<script>
import { mapActions, mapGetters, mapState } from 'vuex'
export default {
    data() {
        return {

        }
    },
    computed: {
        ...mapState({ count: 'count', scholl: 'scholl', subject: 'subject' }),
        ...mapGetters({ bigNum: 'bigNum' })
    },
    created() {
        console.log(this.$store.state.count, '--222')
    },
    methods: {
        ...mapActions({ oddAdd: 'oddAdd', awitAdd: 'awitAdd' }),
        add() {
            this.$store.commit('add', 1)
        },
        reduce() {
            this.$store.commit('reduce', 1)
        },
        // oddAdd() {
        //     this.$store.commit('oddAdd',1)
        // },
        // AwitAdd() {
        //     this.$store.commit('awitadd',1)
        // }
    }
}
</script>
<style scoped>

</style>