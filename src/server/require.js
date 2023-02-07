import axios from 'axios';
// 引入NProgress
import NProgress from 'nprogress'
// 引入nprogress样式文件
import'nprogress/nprogress.css'
const instance = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});
instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  console.log(config,'----111')
  NProgress.start()
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  console.log(response,'----222')
  NProgress.done()
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  alert('请求超时')
  NProgress.done()
  return Promise.reject(error);
});
export default instance