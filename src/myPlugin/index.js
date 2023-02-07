export const MyPluginCC = {}
MyPluginCC.install = function (Vue) {
    // 3. 注入组件选项
    Vue.mixin({
        created: function () {
            // 逻辑...
            console.log('注册插件')
        }
    })
}