import axios from 'axios'
// 将token记录到vuex及cookie中，这部分将在后面章节讲述
import store from '../store'

// 超时设置
const service = axios.create({
  timeout: 5000
})
// baseURL
// axios.defaults.baseURL = 'https://api.github.com';

// http request 拦截器
// 每次请求都为http头增加Authorization字段，其内容为token
service.interceptors.request.use(
  config => {
    if (store.state.user.token) {
      config.headers.Authorization = `token ${store.state.user.token}`
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)
export default service
