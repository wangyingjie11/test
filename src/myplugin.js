export const MyPlugin = {}
MyPlugin.install = function (Vue) {
    // 1. 添加全局方法或 property
    Vue.prototype.myGlobalMethod = function () {
        // 逻辑...
        console.log(1111)
    }
}
export const myP = {
    install(Vue) {
        Vue.mixin({
            created() {
                // console.log('全局混入')
            }
        })
    }
}