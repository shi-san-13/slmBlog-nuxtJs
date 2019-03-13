// 代理 API 接口
import Vue from 'vue'
const IP = {
  main: 'https://slmblog.com/api/',
  uploadImg: '/img/upload/'
}

const handler = {
  get(target, key, receiver) {
    let value = Reflect.get(target, key, receiver)
    if (typeof value !== 'string' && key !== 'IP') return false
    if (!value) throw Error(`Axios [${ key }] API not exist!`)
    
    typeof value === 'string' && (value = encodeURI(value))
    return (!value.search || value.search('//') >= 0) ? value : IP.main + value
  }
}

const API = {
  // 首页 热门 右侧
  HOME_HOT: 'blog/hot',
  HOME_RIGHT: 'blog/right',
  NOTICE: 'blog/special/1?tag=公告',
  
  // 文章 内容
  ARTCILE_CONTENT: 'article/:id',
  
  /* IP 接口 */
  IP
}

export default new Proxy(API, handler)
Vue.prototype.$API = API
