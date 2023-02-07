<template>
    <div>
        <h1 @click="goStu">我的{{ info.newNum }}</h1>
        <h2 v-if="info.age">{{ info.age }}</h2>
        <input type="text" v-model="inputTxt">
        <h1>{{ inputTxt | newName }}</h1>
        <hr />
        <!-- <h3>{{ name }}</h3> -->
        <h4>{{ ccT }}</h4>
        <slotNew>
            匿名插槽
        </slotNew>
        <slotNew>
            <template v-slot:header>
                具名插槽
            </template>
        </slotNew>
        <slotNew v-slot="user">
            {{ user.user }}
        </slotNew>
        <busNew></busNew>
        
    </div>
</template>
<script>
import slotNew from '../components/slotNew.vue'
import busNew from '../components/busNew.vue'
import { myMixin } from '../mixin'
export default {
    mixins: [myMixin],
    components: {
        slotNew,
        busNew
    },
    data() {
        return {
            info: {
                newNum: 33,
            },
            inputTxt: '',
            ccT: '55'
        }
    },
    // computed: {
    //     name() {
    //         return this.$route.params.name
    //     }
    // },
    filters: {
        newName(value) {
            return value.length > 5 ? value.slice(0, 5) + '...' : value
        }

    },
    mounted() {
        console.log(this.$route.params.name, '333')
    },
    methods: {
        goStu() {
            console.log(this, '222')
            this.$set(this.info, 'age', '66')
            console.log(this.$sm('777'), '555')
            let bb
            let objC = {
                cc: '22'
            }
            // this.ccT = objC.cc
            bb = objC.cc
            Object.defineProperty(objC, 'cc', {
                get() {
                    console.log('cccc')
                    return bb
                },
                set(newValue) {
                    bb = newValue
                }
            })
            objC.cc = '====='
            console.log(bb,objC.cc)

        }
    }
}
</script>
<style scoped lang="less">

</style>