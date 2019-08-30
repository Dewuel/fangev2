import axios from 'axios';

const instance = axios.create({
  xsrfCookieName: 'xsrf-token',
  timeout: 10000,
  headers: {
    "content-type": "application/json",
  },
  baseURL: 'http://127.0.0.1:5000/api'
});
// instance.defaults.headers.common['Authorization'] = 'Bearer ' + sessionStorage.getItem('token')

//添加请求拦截
instance.interceptors.request.use(function(config){
  let userinfo = JSON.parse(sessionStorage.getItem('userinfo'))
  let token
  if(userinfo){
    token = userinfo.token
    // console.log(token)
  } else {
    token = null
  }
  config.headers.common['Authorization'] = 'Bearer ' + token;
  return config;
}, function(err){
  console.log(err)
  return Promise.reject(err)
});

// 响应拦截
instance.interceptors.response.use(data => {
  return data;
}, err => {
  if(err.response.status !== 404){
    console.log('不存在', err)
  }
  return Promise.reject(err)
})

export default instance