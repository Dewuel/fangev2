import axios from 'axios'

const instance = axios.create({
  xsrfCookieName: 'xsrf-token',
  timeout: 15000,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  baseURL: 'http://127.0.0.1:5000/api'
})
instance.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')

//添加请求拦截
instance.interceptors.request.use(function(config){
  return config
}, function(err){
  console.log('请求超时')
  return Promise.reject(err)
});

// 响应拦截
instance.interceptors.response.use(data => {
  return data;
}, err => {
  if(err.response.status !== 200){
    console.log('失败', err)
  }
  return Promise.reject(err)
})

export default instance