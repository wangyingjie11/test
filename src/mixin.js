export const myMixin = {
    created: function () {
      this.hello()
      console.log(this)
    },
    methods: {
      hello: function () {
        console.log('hello from mixin!')
      }
    },
    data(){
        return{
            name:'mixin'
        }
    }
}