import axios from 'axios'
import { Toast } from 'vant'

// 对于数据请求的封装
const http = axios.create({
  baseURL: 'https://m.maizuo.com',
  timeout: 10000,
  headers: {
    'X-Client-Info':
      '{"a":"3000","ch":"1002","v":"5.2.1","e":"16899142051922852563451905","bc":"110100"}'
  }
})

// axios拦截器 发请求之前拦截--showLoading
// Add a request interceptor
http.interceptors.request.use(function (config) {
  // Do something before request is sent
  Toast.loading({
    message: 'Loading...',
    forbidClick: true,
    duration: 0
  })
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// 在成功后拦截--hideLoading
// Add a response interceptor
http.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  // 隐藏
  Toast.clear()
  return {
    ...response,
    aaa: 'grace'
  }
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  // 隐藏
  Toast.clear()
  return Promise.reject(error)
})

export default http
