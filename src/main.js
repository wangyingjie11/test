import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from '../src/router'
import store from './store'
import {MyPlugin,myP} from './myplugin'
import {MyPluginCC} from '../src/myPlugin/index.js'
import less from 'less'
import 'animate.css';
Vue.config.productionTip = false
Vue.use(MyPlugin)
Vue.use(myP)
Vue.use(MyPluginCC)
Vue.use(VueRouter)
Vue.config.errorHandler = function (err, vm, info) {
  // handle error
  // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
  // 只在 2.2.0+ 可用
  console.log(err,'err')
  console.log(vm,'vm')
  console.log(info,'info11')
  console.error(err);
}
Vue.use(less)
let sm = (value)=>{
  return value+'==='
}
new Vue({
  render: h => h(App),
  store,
  router,
  beforeCreate(){
    Vue.prototype.$bus = this
    Vue.prototype.$sm = sm
  }
}).$mount('#app')
