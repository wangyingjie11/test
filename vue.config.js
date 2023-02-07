const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // host: 'localhost',
    // port: 8081,
    // https: false,
    // hot: false,
    proxy:{
      '/students':{//表示拦截以/api开头的请求路径
        target:'http://localhost:5000',
        changOrigin: true,//是否开启跨域
        // pathRewrite:{
        //   '^/api':'' //重写api，把api变成空字符，因为我们真正请求的路径是没有api的
        // }
      }
    }
  },
})
