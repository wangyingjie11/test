<template>
    <div>
        <h1 @click="setName">{{ id }}</h1>
    </div>
</template>
<script>
import { myMixin } from '../mixin'
export default {
    mixins: [myMixin],
    props: {
        id: {
            type: [String, Number],
            default: 4
        }
    },
    data() {
        return {

        }
    },
    created() {
        this.myGlobalMethod()
    },
    methods: {

        setName() {
            this.name = 'set mixin'
            this.$emit('setName','333')
        }
    }
}
</script>
<style>

</style>